# Backend

From the repository root, install the backend dependencies and start the API:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r backend\requirements.txt
python -m uvicorn backend.app.main:app --reload
```

The initial health endpoint is available at `http://127.0.0.1:8000/health`; interactive API documentation is at `http://127.0.0.1:8000/docs`.

Run the backend tests from the repository root:

```powershell
python -m pytest backend\tests
```
