# Personality Check 🎀💖✨ - Introvert or Extrovert?

> A cute, aesthetic personality prediction app that tells you if you're a Cozy Dreamer 🌙 or a Sunshine Girl 🌟

**Live Demo:** https://personality-detecction-logistic-ljd-two.vercel.app/ ✨

[Personality Check Banner](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge) [Made With Love](https://img.shields.io/badge/Made%20with-💖%20by%20Monika-ff4d6d?style=for-the-badge) [React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) [FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)

---

## 🌸 What is this?

An AI-powered web app that predicts your personality type based on your social vibe, inner world, work style & lifestyle! Just slide the cute pink sliders and let the magic happen 💅

The model is trained using **Logistic Regression** on personality trait data and deployed with a super cute girly aesthetic — because ML can be pretty too! 💕

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

- **Frontend:** https://personality-detecction-logistic-ljd-two.vercel.app/
- **Backend API:** https://personality-detecction-logistic.vercel.app
- **API Docs:** https://personality-detecction-logistic.vercel.app/docs

## 📸 Screenshots

> Personality Check 🎀 - Slide to spill the tea about youu ~
> - Step 1: Social Vibe ⚡
> - Result: Introvert 🌙 - The Cozy Dreamer / Extrovert 🌟 - The Sunshine Girl

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

## 🌈 Future Improvements

- [ ] Add more personality types (Ambivert, etc.)
- [ ] Share result as image card
- [ ] Dark mode toggle
- [ ] Add personality history

## 👩‍💻 Author

**Monika Gupta**
- Made with 💖 in Delhi
- LinkedIn: [Your LinkedIn]
- GitHub: @MonikaGupta-source

---

### 💖 Made with 💖 by Monika 🎀

If you like this project, give it a ⭐ and share your result!
