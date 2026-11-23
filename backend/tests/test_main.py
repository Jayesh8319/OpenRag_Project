import logging

import pytest
from fastapi.testclient import TestClient
from pydantic import ValidationError

from backend.app.logging_config import configure_logging
from backend.app.main import app, create_app
from backend.app.settings import Settings


def test_health_check_returns_ok() -> None:
    response = TestClient(app).get("/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_settings_read_environment_variables(monkeypatch) -> None:
    monkeypatch.setenv("OPENRAG_APP_NAME", "Test API")
    monkeypatch.setenv("OPENRAG_LOG_LEVEL", "debug")

    settings = Settings(_env_file=None)

    assert settings.app_name == "Test API"
    assert settings.log_level == "DEBUG"


def test_settings_reject_invalid_log_level() -> None:
    with pytest.raises(ValidationError, match="log_level"):
        Settings(log_level="TRACE")


def test_app_metadata_comes_from_settings() -> None:
    client = TestClient(
        create_app(Settings(app_name="Configured API", app_version="2.0"))
    )

    response = client.get("/openapi.json")

    assert response.status_code == 200
    assert response.json()["info"]["title"] == "Configured API"
    assert response.json()["info"]["version"] == "2.0"


def test_request_logs_method_path_and_status(caplog) -> None:
    with caplog.at_level(logging.INFO, logger="openrag.api"):
        response = TestClient(app).get("/health")

    assert response.status_code == 200
    assert "request_complete method=GET path=/health status_code=200" in caplog.text


def test_logging_configuration_applies_level() -> None:
    root_logger = logging.getLogger()
    previous_level = root_logger.level
    try:
        configure_logging("DEBUG")
        assert root_logger.level == logging.DEBUG
    finally:
        root_logger.setLevel(previous_level)
