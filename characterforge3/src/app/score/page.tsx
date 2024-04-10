'use client'

import { useState } from 'react';
import Link from "next/link";// Import Link from React Router

export default function ScoreCalculation() {
  // The standard array of scores
  const standardArray = [15, 14, 13, 12, 10, 8];
  // State to keep track of score assignments to abilities
  const [scores, setScores] = useState({
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
  });

  // Function to update score assignment
  const assignScore = (ability, score) => {
    setScores(prevScores => ({
      ...prevScores,
      [ability]: score,
    }));
  };

  // Function to get the available scores for a specific ability
  const getAvailableScores = (currentAbility) => {
    const selectedScores = Object.values(scores).filter(val => val !== '');
    return standardArray.filter(score => !selectedScores.includes(score.toString()) || scores[currentAbility] === score.toString());
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Assign Your Ability Scores</h1> {/* Center align the page title */}
      <div className="flex items-center justify-center"> {/* Center align the dropdown menus */}
        {Object.keys(scores).map((ability) => (
          <div key={ability} className="mb-4 flex flex-col items-center mr-4">
            <img src={`placeholder_${ability}.png`} alt={`${ability} icon`} className="mb-2 w-16 h-16" /> {/* Placeholder image */}
            <label className="mb-1">{ability.charAt(0).toUpperCase() + ability.slice(1)}:</label>
            <select
              value={scores[ability] || ''}
              onChange={(e) => assignScore(ability, e.target.value)}
              style={{
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '0.5rem',
                width: '100px', // Set width of dropdown
                fontSize: '16px', // Adjust the font size as needed
                textAlign: 'center', // Center the text horizontally within the box
              }} 
            >
              <option value="">Select a score</option>
              {getAvailableScores(ability).map((score) => (
                <option key={score} value={score} style={{ color: 'black', backgroundColor: 'white' }}>
                  {score}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
      <Link href="/background">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Submit Scores
          </button>
        </Link>
      </div>
    </main>
  );
}
