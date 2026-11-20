# OpenRAG Project: 20-Day MVP

## Goal

Build a focused document-question-answering MVP: users will upload documents, the backend will extract and index their content, and chat responses will include citations to the source material.

This is an original learning project inspired by OpenRAG's public overview, not a recreation of its full enterprise platform. The root `README.md` is reproduced from [langflow-ai/openrag](https://github.com/langflow-ai/openrag); its Apache 2.0 license is retained in `LICENSE`.

## Planned stack

- FastAPI backend
- Next.js and TypeScript frontend
- Docling for document parsing
- OpenSearch for retrieval
- An LLM provider for grounded answers

## Day 1 acceptance criteria

- A documented MVP scope and a clear backend/frontend directory layout
- A FastAPI application with a passing health-endpoint test
- A generated Next.js application with a project-specific landing page
- Build and lint checks pass for the frontend

## Out of scope for this MVP

- Enterprise multi-tenancy and role administration
- Horizontal scaling and production deployment guarantees
- Reimplementing every OpenRAG integration or feature
