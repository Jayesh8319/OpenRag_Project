# Frontend

The Next.js app is the UI for the OpenRAG Project MVP.

From this directory, start the development server:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` to view the app. The backend runs separately from the repository root:

```powershell
python -m uvicorn backend.app.main:app --reload
```

Run the frontend checks before committing:

```powershell
npm run lint
npm run build
```
