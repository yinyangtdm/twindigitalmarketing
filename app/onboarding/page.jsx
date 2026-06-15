"use client";

import { useState } from "react";

const ACCESS_KEY = "d2d39725-05ca-4aea-932e-7496afc5e5d1";

const QUESTIONS = [
  { id: "name", label: "What is your full name?", type: "text", placeholder: "Jane Smith" },
  { id: "email", label: "What is your email address?", type: "email", placeholder: "jane@company.com" },
  { id: "company", label: "What is your company or brand name?", type: "text", placeholder: "Acme Inc." },
  { id: "website", label: "What is your current website URL?", type: "text", placeholder: "https://yourwebsite.com", optional: true },
  {
    id: "domain",
    label: "If you do not already have a domain, would you like help finding one?",
    type: "choice",
    options: ["Yes, I'd like help", "No, I already have one", "No, I don't need one"],
  },
  {
    id: "help",
    label: "What do you need help with?",
    type: "choice",
    options: ["New website", "Website redesign", "Landing page", "Conversion optimization", "Ongoing website support", "Not sure yet"],
  },
  { id: "mission", label: "Company Mission", description: "In one or two sentences, what does your company do?", type: "textarea", placeholder: "We help businesses..." },
  { id: "objective", label: "Primary Objective", description: "What is the main goal of this website? (e.g., generate leads, sell products, provide information, build brand awareness)", type: "textarea", placeholder: "Our main goal is to..." },
  { id: "personality", label: "Brand Personality", description: "If your brand were a person, how would you describe them? (e.g., professional, playful, minimalist, edgy, luxury)", type: "textarea", placeholder: "Our brand is..." },
  { id: "design_prefs", label: "Design Preferences", description: "Please provide 2–3 links to websites you admire and explain what you like about them.", type: "textarea", placeholder: "1. https://example.com — I love the clean layout...\n2. ..." },
  { id: "competitors", label: "Competitor Analysis", description: "Who are your top three competitors? What do you like or dislike about their current websites?", type: "textarea", placeholder: "1. Competitor — what I like/dislike...\n2. ..." },
  { id: "assets", label: "Visual Assets", description: "Do you have existing branding, a style guide, or high-quality photography ready to use?", type: "textarea", placeholder: "Yes, we have a logo and brand guidelines..." },
  { id: "features", label: "Must-Have Features", description: "List the essential features required (e.g., e-commerce, booking system, blog, contact forms, newsletter integration).", type: "textarea", placeholder: "Contact form, blog, booking system..." },
  { id: "tech", label: "Technical Requirements", description: "Are there specific third-party tools or software that must integrate with the website?", type: "textarea", placeholder: "Shopify, Mailchimp, Calendly..." },
  { id: "go_live", label: "Project Timeline", description: "What is your desired 'Go-Live' date? Is this deadline flexible?", type: "textarea", placeholder: "March 2026, flexible by 2 weeks..." },
  { id: "budget", label: "Budget Range", description: "What is your approximate budget for this project?", type: "text", placeholder: "$2,000 – $5,000" },
  { id: "admire", label: "What websites do you admire, and why?", type: "textarea", placeholder: "I love Apple.com because..." },
  {
    id: "pages",
    label: "Which pages or sections do you expect to need?",
    type: "multiselect",
    options: ["Home", "About", "Services", "Pricing", "Portfolio", "Testimonials", "Blog", "Contact", "Landing pages", "Other"],
  },
  {
    id: "pref_timeline",
    label: "What is your preferred timeline?",
    type: "choice",
    options: ["ASAP", "Within 2 weeks", "Within 1 month", "1–3 months", "Just exploring"],
  },
  { id: "other", label: "Is there anything else you'd like to share before we get started?", description: "Feel free to include any questions or details we haven't covered.", type: "textarea", placeholder: "...", optional: true },
];

export default function OnboardingPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const q = QUESTIONS[current];
  const answer = answers[q.id] ?? (q.type === "multiselect" ? [] : "");
  const isLast = current === QUESTIONS.length - 1;
  const progress = Math.round((current / QUESTIONS.length) * 100);

  function setAnswer(val) {
    setAnswers((prev) => ({ ...prev, [q.id]: val }));
  }

  function toggleMulti(option) {
    const current = answers[q.id] ?? [];
    setAnswer(
      current.includes(option) ? current.filter((o) => o !== option) : [...current, option]
    );
  }

  function canProceed() {
    if (q.optional) return true;
    if (q.type === "multiselect") return (answer).length > 0;
    return String(answer).trim().length > 0;
  }

  function handleNext() {
    if (!canProceed()) return;
    if (q.type === "email") {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(String(answer).trim())) {
        setError("Please enter a valid email address.");
        return;
      }
    }
    setError("");
    setCurrent((c) => c + 1);
  }

  function handleBack() {
    setError("");
    setCurrent((c) => c - 1);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && q.type !== "textarea" && canProceed()) {
      e.preventDefault();
      if (isLast) handleSubmit();
      else handleNext();
    }
  }

  async function handleSubmit() {
    if (!canProceed()) return;
    setSubmitting(true);
    setError("");

    const finalAnswers = { ...answers, [q.id]: answer };
    const message = QUESTIONS.map((qu) => {
      const val = finalAnswers[qu.id];
      const display = Array.isArray(val) ? val.join(", ") : val || "—";
      return `${qu.label}\n${display}`;
    }).join("\n\n---\n\n");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New client questionnaire — ${finalAnswers.name || "Unknown"}`,
          from_name: finalAnswers.name || "Website Visitor",
          email: finalAnswers.email || "noreply@twindigitalmarketing.com",
          message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Couldn't submit. Please email yin@twindigitalmarketing.com directly.");
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="quiz-page">
        <div className="quiz-wrap quiz-success">
          <div className="quiz-success-icon">✓</div>
          <h2>You&apos;re all set!</h2>
          <p>Thanks for filling out the questionnaire. We&apos;ll review your answers and be in touch within one business day.</p>
          <a href="/" className="btn" style={{ marginTop: "24px", display: "inline-block" }}>Back to home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-progress-track">
        <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-wrap">
        <div className="quiz-meta">
          <span className="quiz-num">{current + 1}</span>
          <span className="quiz-of">of {QUESTIONS.length}</span>
        </div>

        <h2 className="quiz-question">{q.label}</h2>
        {q.description && <p className="quiz-desc">{q.description}</p>}

        <div className="quiz-input-wrap">
          {(q.type === "text" || q.type === "email" || q.type === "url") && (
            <input
              className="quiz-input"
              type={q.type}
              placeholder={q.placeholder}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          )}

          {q.type === "textarea" && (
            <textarea
              className="quiz-textarea"
              placeholder={q.placeholder}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={5}
              autoFocus
            />
          )}

          {q.type === "choice" && (
            <div className="quiz-choices">
              {q.options.map((opt, i) => (
                <button
                  key={opt}
                  className={`quiz-choice${answer === opt ? " selected" : ""}`}
                  onClick={() => setAnswer(opt)}
                >
                  <span className="quiz-choice-key">{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {q.type === "multiselect" && (
            <div className="quiz-choices">
              {q.options.map((opt, i) => (
                <button
                  key={opt}
                  className={`quiz-choice${answer.includes(opt) ? " selected" : ""}`}
                  onClick={() => toggleMulti(opt)}
                >
                  <span className="quiz-choice-key">{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              ))}
              <p className="quiz-multi-hint">Select all that apply</p>
            </div>
          )}
        </div>

        {error && <p className="quiz-error">{error}</p>}

        <div className="quiz-nav">
          {current > 0 && (
            <button className="quiz-btn-back" onClick={handleBack}>← Back</button>
          )}
          {isLast ? (
            <button
              className="btn"
              onClick={handleSubmit}
              disabled={submitting || !canProceed()}
            >
              {submitting ? "Submitting..." : "Submit →"}
            </button>
          ) : (
            <button
              className="btn"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              Next →
            </button>
          )}
        </div>

        {q.optional && <p className="quiz-skip" onClick={handleNext}>Skip this question →</p>}
      </div>
    </div>
  );
}
