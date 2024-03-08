import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function RaceButton({ race, onClick }) {
  return (
    <button className="race-button" data-race={race} >
      {race}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <div className="Racepage">
      <h3>Dungeons & Dragons Fifth Edition Races</h3>
        <div id="race-buttons">
          {/* Button for each race */}
          {["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"].map(race => (
          <RaceButton key={race} race={race} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
