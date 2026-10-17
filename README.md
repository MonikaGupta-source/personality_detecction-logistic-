
# Personality Check 🎀 - Introvert or Extrovert?

> A cute, aesthetic personality prediction app that tells you if you're a Cozy Dreamer 🌙 or a Sunshine personality 🌟

**Live Demo:** https://personality-detection-git-main-next-gen-x1.vercel.app/✨

---

## 🌸 What is this?

An AI-powered web app that predicts your personality type based on your social vibe, inner world, work style & lifestyle! Just slide the cute pink sliders and let the magic happen 💅

The model is trained using **Logistic Regression** on personality trait data and deployed with a super cute aesthetics — because ML can be pretty too! 💕

## ✨ Features

- 🎀 **Aesthetic UI** - Pink gradient, floating hearts, glassmorphism cards
- 🌙 **Two Personalities** - Introvert (The Cozy Dreamer) & Extrovert (The Sunshine Girl)
- 💖 **4-Step Quiz** - Social Vibe, Inner World, Work Style, Lifestyle
- 📊 **25 Traits** - Social Energy, Empathy, Leadership, Adventurousness & more!
- 💫 **Confidence Score** - Pink progress bar with prediction confidence
- 📱 **Fully Responsive** - Works on mobile, tablet & desktop
- ⚡ **Fast & Lightweight** - Built with Vite + React

## 🛠️ Tech Stack

**Frontend:**
- React + Vite
- Pure CSS (No Tailwind) - Custom pink palette #ffe4ec, #ff4d6d
- Floating hearts animation, custom sliders, Poppins font

**Backend:**
- FastAPI + Python
- Scikit-Learn - Logistic Regression Model
- Uvicorn server
- CORS enabled

**Deployment:**
- Frontend: Vercel
- Backend: Vercel (Serverless Functions)

## 🚀 Live Links

- **Frontend:** 🎀 https://personality-detection-git-main-next-gen-x1.vercel.app/
- **Backend API:**  https://personality-detecction-logistic.vercel.app/
- **API Docs:** https://personality-detecction-logistic.vercel.app/docs

## 🏃‍♀️ Run Locally

```bash
# Clone the repo
git clone https://github.com/MonikaGupta-source/personality-detection.git
cd personality-detection

# Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

Create `.env` in frontend:
```
VITE_API_URL=http://127.0.0.1:8000
```

For production:
```
VITE_API_URL=https://personality-detecction-logistic.vercel.app
```

## 🔮 API Endpoint

`POST /predict`

Request Body:
```json
{
  "social_energy": 5,
  "talkativeness": 7,
  "group_comfort": 6,
  ...
}
```

Response:
```json
{
  "personality_type": "Introvert",
  "confidence": 87
}
```

## 💡 What I Learned

- Training & deploying ML models with FastAPI
- Handling CORS for frontend-backend connection
- Vercel deployment for both frontend & backend
- Environment variables (VITE_API_URL)
- Building cute UI without any UI library - pure CSS magic! 💅

## 👩‍💻 Author

**Monika Gupta**
- Made with 💖 in Delhi
- LinkedIn: [Your LinkedIn]
- GitHub: @MonikaGupta-source

---

### 💖 Made with 💖 by Monika 🎀

If you like this project, give it a ⭐ and share your result!
