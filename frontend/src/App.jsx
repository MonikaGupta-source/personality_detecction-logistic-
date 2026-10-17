import { useState } from 'react'
import './App.css'

// cute mapping - change labels easily here!
const personalityMap = {
  0: {
    label: "Introvert 🌙",
    tagline: "The Cozy Dreamer",
    desc: "You have the softest, most thoughtful heart! You listen with love, feel deeply, and your calm energy makes everyone feel safe. Quiet but sooo powerful 💗"
  },
  1: {
    label: "Extrovert 🌟",
    tagline: "The Sunshine Girl",
    desc: "You literally light up every room! Your giggles, chats and big heart make everyone smile. You're friendly, bubbly and born to sparkle ✨"
  },
  // also support string keys from backend
  "0": {
    label: "Introvert 🌙",
    tagline: "The Cozy Dreamer",
    desc: "You have the softest, most thoughtful heart! You listen with love, feel deeply, and your calm energy makes everyone feel safe. Quiet but sooo powerful 💗"
  },
  "1": {
    label: "Extrovert 🌟",
    tagline: "The Sunshine Girl",
    desc: "You literally light up every room! Your giggles, chats and big heart make everyone smile. You're friendly, bubbly and born to sparkle ✨"
  },
  "introvert": {
    label: "Introvert 🌙",
    tagline: "The Cozy Dreamer",
    desc: "You have the softest, most thoughtful heart! You listen with love, feel deeply, and your calm energy makes everyone feel safe. Quiet but sooo powerful 💗"
  },
  "extrovert": {
    label: "Extrovert 🌟",
    tagline: "The Sunshine Girl",
    desc: "You literally light up every room! Your giggles, chats and big heart make everyone smile. You're friendly, bubbly and born to sparkle ✨"
  }
};

// cute emoji labels for sliders - keep Social Vibe exactly as asked
const emojiLabels = {
  // Social Vibe - Step 1 (required)
  social_energy: "⚡ Social Energy",
  talkativeness: "🗣 Talkativeness",
  group_comfort: "🤗 Group Comfort",
  party_liking: "🎉 Party Liking",
  friendliness: "💕 Friendliness",
  // Inner World
  alone_time_preference: "🌸 Alone Time",
  deep_reflection: "💭 Deep Reflection",
  listening_skill: "👂 Listening Skill",
  empathy: "💗 Empathy",
  curiosity: "🔍 Curiosity",
  // Work Style
  organization: "📚 Organization",
  leadership: "👑 Leadership",
  planning: "📝 Planning",
  work_style_collaborative: "🤝 Team Work",
  public_speaking_comfort: "🎤 Speaking Comfort",
  risk_taking: "🎲 Risk Taking",
  decision_speed: "⏩ Decision Speed",
  // Lifestyle
  routine_preference: "🗓 Routine Love",
  excitement_seeking: "🌈 Excitement Seeking",
  spontaneity: "✨ Spontaneity",
  adventurousness: "🗺 Adventurousness",
  reading_habit: "📖 Reading Habit",
  sports_interest: "🏀 Sports Interest",
  online_social_usage: "📱 Social Media",
  travel_desire: "✈️ Travel Desire",
  gadget_usage: "💻 Gadget Love"
};

const initialData = {
  social_energy: 5, alone_time_preference: 5, talkativeness: 5,
  deep_reflection: 5, group_comfort: 5, party_liking: 5, listening_skill: 5,
  empathy: 5, organization: 5, leadership: 5, risk_taking: 5,
  public_speaking_comfort: 5, curiosity: 5, routine_preference: 5,
  excitement_seeking: 5, friendliness: 5, planning: 5, spontaneity: 5,
  adventurousness: 5, reading_habit: 5, sports_interest: 5,
  online_social_usage: 5, travel_desire: 5, gadget_usage: 5,
  work_style_collaborative: 5, decision_speed: 5
};

const groups = {
  "Social Vibe": ["social_energy", "talkativeness", "group_comfort", "party_liking", "friendliness"],
  "Inner World": ["alone_time_preference", "deep_reflection", "listening_skill", "empathy", "curiosity"],
  "Work Style": ["organization", "leadership", "planning", "work_style_collaborative", "public_speaking_comfort", "risk_taking", "decision_speed"],
  "Lifestyle": ["routine_preference", "excitement_seeking", "spontaneity", "adventurousness", "reading_habit", "sports_interest", "online_social_usage", "travel_desire", "gadget_usage"]
};

export default function App() {
  const [form, setForm] = useState(initialData);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const groupKeys = Object.keys(groups);

  // same API call - do not change!
  const handlePredict = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      alert("Backend band hai! Dusra terminal check karo jaha uvicorn chal raha hai");
    }
    setLoading(false);
  };

  // result page
  if (result) {
    const key = String(result.personality_type).toLowerCase();
    const info = personalityMap[key] || personalityMap[String(result.personality_type)] || {
      label: String(result.personality_type),
      tagline: "Unique & Cute ✨",
      desc: "Your vibe is so unique and precious! You have a perfect mix that makes you unforgettable 💖"
    };

    return (
      <div className="result-bg">
        {/* floating hearts deco */}
        <div className="floating-hearts">
          <span>💖</span><span>✨</span><span>💕</span><span>🌸</span><span>💖</span><span>✨</span>
        </div>
        <div className="result-card-new">
          <p className="result-emoji">🎀</p>
          <p className="result-label">Your Personality is</p>
          <h2 className="result-title">{info.label}</h2>
          <p className="result-tagline">{info.tagline}</p>
          <p className="result-desc">{info.desc}</p>
          
          {/* confidence as pink progress bar */}
          <div className="confidence-wrap">
            <div className="confidence-top">
              <span>Confidence</span>
              <span>{result.confidence}%</span>
            </div>
            <div className="confidence-bar">
              <div className="confidence-fill" style={{ width: `${result.confidence}%` }}></div>
            </div>
          </div>

          <button className="btn-black" onClick={() => setResult(null)}>Retake Test 🔄</button>
          <p className="footer">Made with 💖 by Monika 🎀</p>
        </div>
      </div>
    );
  }

  const currentGroup = groupKeys[step];
  const progress = ((step + 1) / groupKeys.length) * 100;

  return (
    <div className="app-bg">
      {/* floating hearts background */}
      <div className="floating-hearts">
        <span>💖</span><span>✨</span><span>💕</span><span>🌸</span><span>💖</span><span>✨</span><span>🎀</span><span>💗</span>
      </div>

      <div className="container">
        {/* cute title */}
        <h1 className="main-title">Personality Check 🎀💖✨</h1>
        <p className="subtitle">Slide to spill the tea about youu ~</p>

        {/* progress bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="step-text">Step {step + 1} / {groupKeys.length} • {currentGroup}</p>

        {/* main card */}
        <div className="card">
          <h2 className="card-title">{currentGroup} 💅</h2>
          
          {groups[currentGroup].map(key => {
            const percent = ((form[key] - 1) / 9) * 100;
            return (
              <div key={key} className="field">
                <div className="label-row">
                  <label>{emojiLabels[key] || key.replace(/_/g, " ")}</label>
                  <span className="value-badge">{form[key]}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: parseInt(e.target.value) })}
                  style={{
                    background: `linear-gradient(to right, #ff4d6d ${percent}%, #ffe4ec ${percent}%)`
                  }}
                />
              </div>
            );
          })}

          <div className="btn-row">
            {step > 0 && (
              <button className="btn-outline" onClick={() => setStep(s => s - 1)}>
                ← Back
              </button>
            )}
            {step < groupKeys.length - 1 ? (
              <button className="btn-black" onClick={() => setStep(s => s + 1)}>
                Next 💖
              </button>
            ) : (
              <button className="btn-black" onClick={handlePredict}>
                {loading ? "Predicting... 💭" : "See Result ✨"}
              </button>
            )}
          </div>
        </div>

        <p className="footer">Made with 💖 by Monika 🎀</p>
      </div>
    </div>
  );
}