"use client"
import { useState } from "react";
import { X, CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { createTestResult } from "@/lib/airtable";

const questions = [
  {
    id: 1,
    question: "How do you say 'Hello' in Portuguese?",
    options: ["Adeus", "Olá", "Por favor", "Obrigado"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What does 'Obrigado' mean?",
    options: ["Please", "Thank you", "Sorry", "Goodbye"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which word means 'water'?",
    options: ["Pão", "Água", "Leite", "Café"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "How do you say 'I am' in Portuguese?",
    options: ["Eu sou", "Tu és", "Ele é", "Nós somos"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "What is the Portuguese word for 'house'?",
    options: ["Carro", "Casa", "Mesa", "Cadeira"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "How do you ask 'How are you?' in Portuguese?",
    options: ["Como está?", "Onde está?", "Quando é?", "Por que não?"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What does 'Bom dia' mean?",
    options: ["Good night", "Good afternoon", "Good morning", "Good evening"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which number is 'cinco'?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "How do you say 'I speak Portuguese'?",
    options: ["Eu falo português", "Eu como português", "Eu bebo português", "Eu vejo português"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "What is 'família' in English?",
    options: ["Friend", "Family", "Food", "Phone"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "How do you say 'Where is...?' in Portuguese?",
    options: ["Como é?", "Quando é?", "Onde está?", "Quem é?"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "What does 'Muito obrigado' mean?",
    options: ["Very sorry", "Thank you very much", "Very good", "Very bad"],
    correctAnswer: 1
  }
];

export default function PortugueseTestModal({ open, onClose, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [score, setScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (value) => {
    setSelectedAnswer(parseInt(value));
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(newAnswers[currentQuestion + 1] ?? null);
      } else {
        setShowEmailCapture(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] ?? null);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const getRecommendation = (finalScore) => {
    const percentage = (finalScore / questions.length) * 100;
    
    if (percentage >= 75) {
      return "Online";
    } else if (percentage >= 40) {
      return "Online";
    } else {
      return "Offline or Online";
    }
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const finalScore = calculateScore();
      const recommendation = getRecommendation(finalScore);
      const percentage = Math.round((finalScore / questions.length) * 100);

      // 1. Save to Firebase
      const testData = {
        email: email,
        score: finalScore,
        totalQuestions: questions.length,
        percentage: percentage,
        recommendation: recommendation,
        answers: answers,
        createdAt: serverTimestamp()
      };

      const docRef = await addDoc(collection(db, "testResults"), testData);

      // 2. Save to Airtable
      const airtableData = {
        Email: email,
        Score: finalScore,
        "Total Questions": questions.length,
        Percentage: percentage,
        Recommendation: recommendation,
        "Created At": new Date().toISOString(),
        "Firebase ID": docRef.id
      };

      await createTestResult(airtableData);

      // 3. Send results email via Brevo
      await fetch('/api/send-test-results-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          score: finalScore,
          totalQuestions: questions.length,
          recommendation: recommendation
        }),
      });

      // 4. Show results and call parent callback
      setScore(finalScore);
      setShowResults(true);
      onComplete(email, finalScore);
    } catch (err) {
      console.error("Error submitting test results:", err);
      setError("Failed to submit test results. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowEmailCapture(false);
    setShowResults(false);
    setEmail("");
    setScore(0);
    setError("");
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-xl shadow-[0px_30px_50px_-12px_rgba(0,0,0,0.20),0px_15px_30px_-12px_rgba(0,0,0,0.12)] w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        data-testid="modal-portuguese-test"
      >
        <div className="p-6">
          {!showEmailCapture && !showResults && (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h2 className="text-2xl font-bold text-[#394D5C]" data-testid="text-test-title">
                      Portuguese Level Test
                    </h2>
                    <p className="text-sm text-[#6B8299]">
                      Question {currentQuestion + 1} of {questions.length}
                    </p>
                  </div>
                  <button
                    id="btn-test-close-quiz"
                    onClick={handleClose}
                    className="text-[#6B8299] hover:text-[#394D5C] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="w-full bg-[#E3E5E8] rounded-full h-2" data-testid="progress-test">
                  <div 
                    className="bg-[#3BA9A3] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#394D5C]" data-testid={`text-question-${currentQuestion}`}>
                    {questions[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div 
                        key={index}
                        onClick={() => handleAnswerSelect(index.toString())}
                        className={`flex items-center space-x-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedAnswer === index 
                            ? 'border-[#3BA9A3] bg-[#3BA9A3]/5' 
                            : 'border-[#E3E5E8] hover:border-[#3BA9A3]/50'
                        }`}
                        data-testid={`option-${currentQuestion}-${index}`}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswer === index 
                            ? 'border-[#3BA9A3]' 
                            : 'border-[#E3E5E8]'
                        }`}>
                          {selectedAnswer === index && (
                            <div className="w-3 h-3 rounded-full bg-[#3BA9A3]" />
                          )}
                        </div>
                        <label className="flex-1 cursor-pointer text-[#394D5C]">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    id="btn-test-back"
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className={`px-4 py-2 border-2 border-[#E3E5E8] rounded-xl font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200 flex items-center gap-2 ${
                      currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    data-testid="button-back"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    id="btn-test-next"
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                    className={`px-4 py-2 bg-[#3BA9A3] text-white rounded-xl font-medium hover:bg-[#359690] transition-colors duration-200 flex items-center gap-2 ${
                      selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    data-testid="button-next"
                  >
                    {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}

          {showEmailCapture && !showResults && (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h2 className="text-2xl font-bold text-[#394D5C]" data-testid="text-email-title">
                      Almost Done!
                    </h2>
                    <p className="text-sm text-[#6B8299]">
                      Enter your email to see your results and personalized course recommendation.
                    </p>
                  </div>
                  <button
                    id="btn-test-close-email"
                    onClick={handleClose}
                    className="text-[#6B8299] hover:text-[#394D5C] transition-colors"
                    disabled={isSubmitting}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label htmlFor="test-email" className="block text-sm font-medium text-[#394D5C] mb-2">
                    Email Address
                  </label>
                  <input
                    id="test-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full h-12 px-4 py-2 border-2 border-[#E3E5E8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3BA9A3] focus:border-transparent text-[#394D5C] disabled:bg-gray-50 disabled:cursor-not-allowed"
                    data-testid="input-test-email"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    id="btn-test-back-to-test"
                    type="button"
                    onClick={() => setShowEmailCapture(false)}
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 border-2 border-[#E3E5E8] rounded-xl font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-back-to-test"
                  >
                    Back to Test
                  </button>
                  <button 
                    id="btn-test-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-[#3BA9A3] text-white rounded-xl font-medium hover:bg-[#359690] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-show-results"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Show My Results"
                    )}
                  </button>
                </div>
              </form>
            </>
          )}

          {showResults && (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h2 className="text-2xl font-bold text-[#394D5C]" data-testid="text-results-title">
                      Your Test Results
                    </h2>
                    <p className="text-sm text-[#6B8299]">
                      Check your email for your complete results and Portuguese starter guide!
                    </p>
                  </div>
                  <button
                    id="btn-test-close-results"
                    onClick={handleClose}
                    className="text-[#6B8299] hover:text-[#394D5C] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center p-8 bg-[#F5F6F7] rounded-xl">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#3BA9A3]/10 mb-4">
                    <CheckCircle2 className="w-10 h-10 text-[#3BA9A3]" />
                  </div>
                  <div className="text-5xl font-bold mb-2 text-[#394D5C]" data-testid="text-score">
                    {score}/{questions.length}
                  </div>
                  <p className="text-[#6B8299]">Questions Correct</p>
                </div>

                <div className="space-y-4">
                  <div className="p-6 border-2 border-[#E3E5E8] rounded-xl bg-white">
                    <h4 className="font-semibold mb-2 text-[#394D5C]">Recommended Plan:</h4>
                    <p className="text-lg font-bold text-[#3BA9A3] mb-2">
                      {getRecommendation(score)}
                    </p>
                    <p className="text-sm text-[#6B8299]">
                      Based on your results, this plan will help you achieve your Portuguese goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    id="btn-test-close"
                    onClick={handleClose}
                    className="flex-1 px-4 py-2 border-2 border-[#E3E5E8] rounded-xl font-medium text-[#394D5C] hover:bg-[#F5F6F7] transition-colors duration-200"
                    data-testid="button-close-results"
                  >
                    Close
                  </button>
                  <button
                    id="btn-test-enroll"
                    onClick={() => {
                      handleClose();
                      const url = "https://wa.me/351933292112?text=" + encodeURIComponent("Hi! I'm interested in the Portuguese Immersion program and would like to secure a spot.");
                      window.open(url, "_blank", "noopener,noreferrer");
                    }}
                    className="flex-1 px-4 py-2 bg-[#3BA9A3] text-white rounded-xl font-medium hover:bg-[#359690] transition-colors duration-200"
                    data-testid="button-enroll-from-test"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}