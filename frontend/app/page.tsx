"use client";

import Link from "next/link";
import { useState, type ChangeEvent } from "react";

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  function handleFileSelection(event: ChangeEvent<HTMLInputElement>) {
    const newFiles = Array.from(event.currentTarget.files ?? []);
    setSelectedFiles((currentFiles) => {
      const existingFiles = new Set(
        currentFiles.map((file) => `${file.name}:${file.size}`),
      );
      return [
        ...currentFiles,
        ...newFiles.filter((file) => {
          const key = `${file.name}:${file.size}`;
          if (existingFiles.has(key)) return false;
          existingFiles.add(key);
          return true;
        }),
      ];
    });
    event.currentTarget.value = "";
  }

  function removeFile(fileToRemove: File) {
    setSelectedFiles((files) =>
      files.filter(
        (file) =>
          file.name !== fileToRemove.name || file.size !== fileToRemove.size,
      ),
    );
  }

  return (
    <main className="workspace-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="OpenRAG home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M16 4.5a11.5 11.5 0 1 0 0 23 11.5 11.5 0 0 0 0-23Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M11 20.5c1.2-2.9 2.9-4.4 5-4.4s3.8 1.5 5 4.4M12.4 12.6h.1m7 0h.1"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </span>
          <span className="brand-name">open<span>rag</span></span>
        </Link>

        <div className="topbar-right">
          <span className="workspace-label">
            <span className="status-dot" />
            Personal workspace
          </span>
          <span className="avatar" aria-label="User profile">
            J
          </span>
        </div>
      </header>

      <section className="page-content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">YOUR KNOWLEDGE WORKSPACE</p>
            <h1>Make your documents useful.</h1>
            <p className="page-description">
              Bring your files together and get ready to explore them with
              grounded answers.
            </p>
          </div>
          <span className="prototype-badge">
            <span className="status-dot" />
            Workspace preview
          </span>
        </div>

        <div className="workspace-grid">
          <section className="documents-panel" aria-labelledby="documents-title">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">KNOWLEDGE BASE</p>
                <h2 id="documents-title">Your documents</h2>
              </div>
              <span className="file-count">{selectedFiles.length}</span>
            </div>

            <label className="upload-area" htmlFor="document-files">
              <span className="upload-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 15.5v3A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </span>
              <span className="upload-title">Choose files to get started</span>
              <span className="upload-caption">PDF or text files</span>
              <span className="upload-button">Browse files</span>
              <input
                accept=".pdf,.txt,text/plain,application/pdf"
                className="sr-only"
                id="document-files"
                multiple
                onChange={handleFileSelection}
                type="file"
              />
            </label>
            <p className="local-note">
              Files are only selected in this preview. Upload will be connected
              in a later step.
            </p>

            <div className="documents-list">
              <div className="list-heading">
                <span>SELECTED FILES</span>
                {selectedFiles.length > 0 && (
                  <span>{selectedFiles.length} total</span>
                )}
              </div>
              {selectedFiles.length === 0 ? (
                <div className="empty-files">
                  <span className="empty-file-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 3.75h6l4.25 4.5v11A1.75 1.75 0 0 1 15.5 21h-8A1.75 1.75 0 0 1 5.75 19.25v-13.75A1.75 1.75 0 0 1 7.5 3.75ZM13 4v4.5h4.25M9 13h6m-6 3.5h6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                  <p>No files selected yet</p>
                  <span>Choose a file above to see it here.</span>
                </div>
              ) : (
                <ul className="file-list">
                  {selectedFiles.map((file) => (
                    <li className="file-row" key={`${file.name}:${file.size}`}>
                      <span className="file-type-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M7 3.75h6l4.25 4.5v11A1.75 1.75 0 0 1 15.5 21h-8A1.75 1.75 0 0 1 5.75 19.25v-13.75A1.75 1.75 0 0 1 7.5 3.75ZM13 4v4.5h4.25M9 13h6m-6 3.5h4"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <span className="file-details">
                        <span className="file-name">{file.name}</span>
                        <span className="file-meta">
                          {formatFileSize(file.size)} · Selected locally
                        </span>
                      </span>
                      <button
                        aria-label={`Remove ${file.name}`}
                        className="remove-file"
                        onClick={() => removeFile(file)}
                        type="button"
                      >
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path
                            d="m6 6 8 8m0-8-8 8"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.6"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="privacy-note">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M10 2.5 4 5v4.3c0 3.7 2.5 6.7 6 8.2 3.5-1.5 6-4.5 6-8.2V5l-6-2.5Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
                <path
                  d="m7.5 9.8 1.7 1.7 3.5-3.7"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                />
              </svg>
              <span>Your files stay on this device for now.</span>
            </div>
          </section>

          <section className="chat-panel" aria-labelledby="chat-title">
            <div className="chat-header">
              <div className="chat-title-group">
                <span className="chat-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3.5 13.9 9l5.6 2-5.6 2-1.9 5.5L10.1 13l-5.6-2 5.6-2L12 3.5Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div>
                  <h2 id="chat-title">Knowledge chat</h2>
                  <p>Answers grounded in your sources</p>
                </div>
              </div>
              <span className="connection-status">
                <span className="status-dot muted" />
                Not connected
              </span>
            </div>

            <div className="chat-empty-state">
              <div className="chat-illustration" aria-hidden="true">
                <span className="illustration-orbit orbit-one" />
                <span className="illustration-orbit orbit-two" />
                <span className="illustration-card">
                  <svg viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 4.5 18.8 13l8.7 3-8.7 3-2.8 8.5L13.2 19l-8.7-3 8.7-3L16 4.5Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </span>
                <span className="illustration-spark spark-one">✦</span>
                <span className="illustration-spark spark-two">✧</span>
              </div>
              <p className="chat-eyebrow">A LITTLE MORE CLARITY</p>
              <h3>Your next answer starts with a document.</h3>
              <p className="chat-empty-copy">
                Add your knowledge base to ask questions and explore clear,
                source-backed answers.
              </p>
              <div className="suggestion-list" aria-label="Example questions">
                <span>Summarize the key ideas</span>
                <span>What should I know first?</span>
                <span>Find a detail in my files</span>
              </div>
            </div>

            <div className="chat-composer">
              <label className="sr-only" htmlFor="chat-message">
                Ask your documents a question
              </label>
              <input
                disabled
                id="chat-message"
                placeholder="Chat will be enabled after documents are indexed"
                type="text"
              />
              <button aria-label="Send message" disabled type="button">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M3 9.8 17 3l-4.8 14-2.1-5.1L3 9.8Zm7.1 2.1L17 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
            <p className="chat-footnote">
              Chat and retrieval will be connected in upcoming steps.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
