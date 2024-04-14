'use client'

import { useEffect, useState } from 'react';
import Link from "next/link";

export default function ScoreCalculation() {
  const standardArray = [
    { score: 15, imageUrl: '/score/d15.png' },
    { score: 14, imageUrl: '/score/d14.png' },
    { score: 13, imageUrl: '/score/d13.png' },
    { score: 12, imageUrl: '/score/d12.png' },
    { score: 10, imageUrl: '/score/d10.png' },
    { score: 8, imageUrl: '/score/d8.png' },
  ];

  const [scores, setScores] = useState({
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
  });

  // Load scores from local storage when component mounts
  useEffect(() => {
    const loadedScores = {};
    Object.keys(scores).forEach((ability) => {
      loadedScores[ability] = localStorage.getItem(ability) || '';
    });
    setScores(loadedScores);
  }, []);

  const assignScore = (ability, score) => {
    const updatedScores = { ...scores, [ability]: score };
    const scoreValues = Object.values(updatedScores).filter(Boolean);
    const isUnique = new Set(scoreValues).size === scoreValues.length;

    if (isUnique) {
      setScores(updatedScores);
      localStorage.setItem(ability, score); // Save the score in local storage
    } else {
      alert('Each ability must have a unique score.');
    }
  };

  const handleDragStart = (e, score) => {
    e.dataTransfer.setData('score', score);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, ability) => {
    const score = e.dataTransfer.getData('score');
    if (score) {
      assignScore(ability, score);
      const draggedScore = standardArray.find(item => item.score.toString() === score);
      e.target.innerHTML = `<img src=${draggedScore.imageUrl} alt="Score ${score}" class="score" style="width: 100px; height: 100px;">`;

      // Hide the dragged image
      const draggedImage = document.getElementById(score);
      if (draggedImage) {
        draggedImage.style.display = 'none';
      }
    }
  };

  const resetDraggables = () => {
    standardArray.forEach(scoreObj => {
      const draggableImage = document.getElementById(scoreObj.score.toString());
      if (draggableImage) {
        draggableImage.style.display = 'block';
      }
    });

    const resetScores = {
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
    };

    setScores(resetScores);
    Object.keys(resetScores).forEach(ability => {
      localStorage.setItem(ability, ''); // Clear the stored score for each ability
    });
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Assign Your Ability Scores</h1>
      <div className="flex items-center justify-center">
        {Object.keys(scores).map((ability) => (
          <div key={ability} className="mb-4 flex flex-col items-center mr-4">
            <img src={`/score/${ability}.png`} alt={`${ability} icon`} className="mb-2 w-16 h-16" />
            <label className="mb-1">{ability.charAt(0).toUpperCase() + ability.slice(1)}:</label>
            <div
              className="ability-dropzone"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, ability)}
              style={{
                border: '1px solid white',
                padding: '5px',
                width: '100px',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {scores[ability] ? (
                <img
                  src={`/score/d${scores[ability]}.png`}
                  alt={`Score ${scores[ability]}`}
                  className="score"
                  style={{ width: '90px', height: '90px' }}
                />
              ) : (
                <div className="score-placeholder">Drop score here</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="flex">
          {standardArray.map((scoreObj) => (
            <img
              key={scoreObj.score}
              id={scoreObj.score.toString()}
              src={scoreObj.imageUrl}
              alt={`Score ${scoreObj.score}`}
              className="score-draggable"
              draggable
              onDragStart={(e) => handleDragStart(e, scoreObj.score)}
              style={{ width: '100px', height: '100px', marginRight: '10px' }}
            />
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={resetDraggables}>
          Reset
        </button>
        <Link href="/background">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ml-4">
            Submit Scores
          </button>
        </Link>
      </div>
    </main>
  );
}
