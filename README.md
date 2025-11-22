# 📄 Maersk Q2 2025 PDF Highlighter (React + Vite)

A web application built with **React + Vite** that displays the **Maersk Q2 2025 Interim Report PDF** and allows contextual navigation through highlighted financial insights. Clicking reference tags like `[1] [2] [3]` automatically scrolls to the correct PDF page, and `[3]` highlights **"Gain on sale of non-current assets, etc"** in yellow.

---

## 🚀 Features

✔ View PDF directly inside the app  
✔ Click references to jump to specific report pages  
✔ Highlight **important financial text** inside the PDF  
✔ Fast build & rendering using **Vite**  
✔ Uses `react-pdf` + `pdfjs` worker for performance  
✔ Fully deployable on **Vercel**

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React | UI framework |
| Vite | Faster bundling & development |
| react-pdf | PDF rendering |
| pdfjs-dist | PDF parsing & worker |
| Vercel | Deployment |

---

## 📂 Project Structure

.
├── public/
│ └── maersk-q2-2025.pdf
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ └── styles.css
├── package.json
├── vite.config.js
└── README.md

yaml
Copy code

---

## 📎 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/maersk-pdf-highlighter.git
cd maersk-pdf-highlighter
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Start Development Server
bash
Copy code
npm run dev
4️⃣ Required File
Place this file in /public/:

arduino
Copy code
public/maersk-q2-2025.pdf
⚙ PDF Worker Setup (Important)
react-pdf requires a worker. For Vite, you must import it like this:

js
Copy code
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
🌍 Deploying on Vercel
1. Push your code to GitHub
bash
Copy code
git add .
git commit -m "deploy"
git push origin main
2. Go to https://vercel.com
Import your repository

Vercel will auto-detect Vite

Confirm settings:

Setting	Value
Framework	Vite
Build Command	npm run build
Output Dir	dist

3. Click Deploy 🚀
Your live URL will look like:

arduino
Copy code
https://maersk-pdf-highlighter.vercel.app/
