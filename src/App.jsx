import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const PDF_FILE_URL = "/maersk-q2-2025.pdf";
const TARGET_TEXT = "Gain on sale of non-current assets, etc";

export default function App() {
  const [numPages, setNumPages] = useState(null);
  const [highlightActive, setHighlightActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(15);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleClickRef3 = () => {
    setCurrentPage(15);
    setHighlightActive(true);
  };

  const handleClickRef1 = () => {
    setCurrentPage(3);   
    setHighlightActive(false);
  };

  const handleClickRef2 = () => {
    setCurrentPage(5);    
    setHighlightActive(false);
  };

  const customTextRenderer = (textItem) => {
    const { str } = textItem;

    if (!highlightActive) return str;

    if (str.includes(TARGET_TEXT)) {
      const parts = str.split(TARGET_TEXT);
      return (
        <>
          {parts[0]}
          <span className="highlight">{TARGET_TEXT}</span>
          {parts.slice(1).join(TARGET_TEXT)}
        </>
      );
    }

    return str;
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Maersk Q2 2025 Interim Report – PDF Highlighter</h1>
      </header>

      <main className="main-layout">
        <section className="pdf-panel">
          <div className="pdf-toolbar">
            <button onClick={() => setCurrentPage((p) => (p > 1 ? p - 1 : 1))}>
              ◀ Prev
            </button>
            <span>
              Page {currentPage} {numPages ? `of ${numPages}` : ""}
            </span>
            <button
              onClick={() =>
                setCurrentPage((p) =>
                  numPages ? (p < numPages ? p + 1 : p) : p
                )
              }
            >
              Next ▶
            </button>
          </div>

          <div className="pdf-wrapper">
            <Document
              file={PDF_FILE_URL}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="loading">Loading PDF…</div>}
            >
              <Page
                key={currentPage}
                pageNumber={currentPage}
                renderTextLayer={true}
                renderAnnotationLayer={false}
                customTextRenderer={customTextRenderer}
              />
            </Document>
          </div>
        </section>

        <section className="analysis-panel">
          <h2>Analysis</h2>
          <p>
            No extraordinary or one-off items affecting EBITDA were reported in
            Maersk’s Q2 2025 results. The report explicitly notes that EBITDA
            improvements stemmed from operational performance— including volume
            growth, cost control, and margin improvement across Ocean, Logistics
            &amp; Services, and Terminals segments{" "}
            <button className="ref-button" onClick={handleClickRef1}>
              [1]
            </button>
            <button className="ref-button" onClick={handleClickRef2}>
              [2]
            </button>
            .
          </p>
          <p>
            Gains or losses from asset sales are shown separately under EBIT and
            not included in EBITDA. The gain on sale of non-current assets was
            USD 25m in Q2 2025, significantly lower than USD 208m in Q2 2024,
            but these affect EBIT, not EBITDA{" "}
            <button className="ref-button" onClick={handleClickRef3}>
              [3]
            </button>
            . Hence, Q2 2025 EBITDA reflects core operating activities without
            one-off extraordinary adjustments.
          </p>

          <h3>Findings</h3>
          <ul>
            <li>
              Page 3 — Highlights Q2 2025: EBITDA increase attributed to
              operational improvements; no extraordinary items.{" "}
              <button className="ref-button" onClick={handleClickRef1}>
                [1]
              </button>
            </li>
            <li>
              Page 5 — Review Q2 2025: EBITDA rise driven by higher revenue and
              cost control; no extraordinary gains or losses.{" "}
              <button className="ref-button" onClick={handleClickRef2}>
                [2]
              </button>
            </li>
            <li>
              Page 15 — Condensed Income Statement: Gain on sale of non-current
              assets USD 25 m reported separately below EBITDA.{" "}
              <button className="ref-button" onClick={handleClickRef3}>
                [3]
              </button>
            </li>
          </ul>

          <p className="hint">
            Tip: Click on <strong>[3]</strong> to jump to the income statement
            page and highlight{" "}
            <em>“Gain on sale of non-current assets, etc”</em> in yellow.
          </p>
        </section>
      </main>
    </div>
  );
}
