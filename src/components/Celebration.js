// components/Celebration.js
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './Celebration.css';

const Celebration = ({ isVisible, onComplete, message = "🎉 Task Completed! 🎉" }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Show confetti immediately
      setShowConfetti(true);
      
      // Show message after a short delay
      setTimeout(() => {
        setShowMessage(true);
      }, 300);

      // Hide everything after 3 seconds
      setTimeout(() => {
        setShowConfetti(false);
        setShowMessage(false);
        onComplete();
      }, 3000);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="celebration-overlay">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
          initialVelocityY={20}
          colors={['#4fd1c7', '#38b2ac', '#667eea', '#764ba2', '#ff6b6b', '#ee5a24', '#feca57', '#ff9ff3']}
        />
      )}

      {/* Celebration Message */}
      {showMessage && (
        <div className="celebration-message">
          <div className="celebration-text">
            <h1 className="woohoo">🎉 WOOHOO! 🎉</h1>
            <div className="celebration-subtext">
              {message.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div className="celebration-emoji">
              🚀✨🎊🎈🎁🏆💪🔥
            </div>
          </div>
        </div>
      )}

      {/* Poppers Animation */}
      <div className="poppers">
        <div className="popper popper-1">🎊</div>
        <div className="popper popper-2">🎉</div>
        <div className="popper popper-3">🎈</div>
        <div className="popper popper-4">🎁</div>
        <div className="popper popper-5">🏆</div>
        <div className="popper popper-6">✨</div>
        <div className="popper popper-7">🚀</div>
        <div className="popper popper-8">💪</div>
      </div>
    </div>
  );
};

export default Celebration;
