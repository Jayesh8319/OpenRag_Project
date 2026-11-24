# Frontend

The Next.js app is the UI for the OpenRAG Project MVP.

The workspace provides a document-selection preview and a chat empty state.
Selected files remain in the browser; upload and chat are not connected to the
backend yet.

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
