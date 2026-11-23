# Backend

From the repository root, install the backend dependencies and start the API:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r backend\requirements.txt
Copy-Item .env.example .env
python -m uvicorn backend.app.main:app --reload
```

The initial health endpoint is available at `http://127.0.0.1:8000/health`; interactive API documentation is at `http://127.0.0.1:8000/docs`.

Settings are read from `.env` or the process environment. All supported variables
use the `OPENRAG_` prefix: `APP_NAME`, `APP_VERSION`, `ENVIRONMENT`, and
`LOG_LEVEL`. The log level may be `CRITICAL`, `ERROR`, `WARNING`, `INFO`, or
`DEBUG` (case-insensitive). HTTP requests are logged with method, path, status,
and elapsed milliseconds; credentials and query strings are not logged.

Run the backend tests from the repository root:

```powershell
python -m pytest backend\tests
```
