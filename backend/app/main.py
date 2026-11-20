from fastapi import FastAPI
from pydantic import BaseModel


class HealthStatus(BaseModel):
    status: str


app = FastAPI(
    title="OpenRAG Project API",
    description="A focused document-question-answering MVP.",
    version="0.1.0",
)


@app.get("/health", response_model=HealthStatus, tags=["health"])
def health_check() -> HealthStatus:
    return HealthStatus(status="ok")
