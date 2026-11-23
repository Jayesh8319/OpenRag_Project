import logging
from collections.abc import Awaitable, Callable
from time import perf_counter

from fastapi import FastAPI, Request, Response
from pydantic import BaseModel

from backend.app.logging_config import configure_logging
from backend.app.settings import Settings

logger = logging.getLogger("openrag.api")


class HealthStatus(BaseModel):
    status: str


def create_app(settings: Settings | None = None) -> FastAPI:
    app_settings = settings or Settings()
    app = FastAPI(
        title=app_settings.app_name,
        description="A focused document-question-answering MVP.",
        version=app_settings.app_version,
    )

    @app.middleware("http")
    async def log_requests(
        request: Request,
        call_next: Callable[[Request], Awaitable[Response]],
    ) -> Response:
        started_at = perf_counter()
        response = await call_next(request)
        duration_ms = (perf_counter() - started_at) * 1000
        logger.info(
            "request_complete method=%s path=%s status_code=%d duration_ms=%.2f",
            request.method,
            request.url.path,
            response.status_code,
            duration_ms,
        )
        return response

    @app.get("/health", response_model=HealthStatus, tags=["health"])
    def health_check() -> HealthStatus:
        return HealthStatus(status="ok")

    return app


settings = Settings()
configure_logging(settings.log_level)
app = create_app(settings)
