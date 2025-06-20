# Associate: Ention Legal Partnership Portal

This is the official **Associate with Us** portal for Ention Legal, allowing individuals to submit their interest to collaborate, while showcasing key information in a clean card-based layout.

---

## 📁 Folder Structure

/associate
├── ention-frontend # React + Tailwind frontend (user interface)
├── ention-backend # Node.js + Express backend (form handling + email)

yaml
Copy
Edit

---

## 🔧 Technologies Used

- Frontend: React, Tailwind CSS, PostCSS, Vite (optional)
- Backend: Node.js, Express, Nodemailer
- Deployment: GitHub + Vercel (for frontend)

---

## 🚀 How to Run the Project

### 🔹 Frontend

```bash
cd ention-frontend
npm install
npm start
🔹 Backend
bash
Copy
Edit
cd ention-backend
npm install
node server.js
🐞 Issues Faced & Solutions
❌ 1. tailwindcss not recognized or errors during init
Problem:
Running npx tailwindcss init -p threw "could not determine executable" or wasn't recognized.

Fix:

Ensure Tailwind was installed correctly:

bash
Copy
Edit
npm install -D tailwindcss postcss autoprefixer
Then run:

bash
Copy
Edit
npx tailwindcss init -p
❌ 2. PostCSS plugin error in browser
Error:

rust
Copy
Edit
You're trying to use `tailwindcss` directly as a PostCSS plugin.
Fix:
Update postcss.config.js to:

js
Copy
Edit
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
❌ 3. GitHub not showing ention-frontend folder
Problem:
GitHub treated ention-frontend as a submodule due to .git inside it.

Fix:

bash
Copy
Edit
Remove-Item -Recurse -Force ention-frontend\.git
git rm -r --cached ention-frontend
git add ention-frontend
git commit -m "Fix frontend tracking"
git push origin main
❌ 4. Error: src refspec main does not match any
Fix:

bash
Copy
Edit
git branch -M main
git push -u origin main
❌ 5. Merge conflicts when pulling from GitHub
Fix:

Resolve the conflict markers (<<<<<<<, =======, >>>>>>>) manually.

Then:

bash
Copy
Edit
git add .
git commit -m "Resolved merge conflict"
git push
✅ Deployment Instructions
Push to GitHub

Deploy frontend on Vercel

Choose ention-frontend/ as root folder

Backend can be deployed to Railway or Render
