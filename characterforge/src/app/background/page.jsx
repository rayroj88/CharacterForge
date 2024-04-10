'use client'

import { useState } from 'react';
import Link from 'next/link';

// List of backgrounds with detailed information
const backgrounds = [
    {
      name: 'Acolyte',
      description: 'You have spent your life in service to a temple, learning sacred rites and rituals.',
      skills: ['Insight', 'Religion'],
      tools: 'None',
      languages: 'Two of your choice',
      equipment: [
        'Holy symbol',
        'Prayer book or prayer wheel',
        '5 sticks of incense',
        'Vestments',
        'Set of common clothes',
        'Pouch containing 15gp'
      ]
    },
    {
      name: 'Criminal',
      description: 'You have a history of breaking the law and surviving on the streets.',
      skills: ['Deception', 'Stealth'],
      tools: 'Thieves\' tools',
      languages: 'None',
      equipment: [
        'Crowbar',
        'Set of dark common clothes including a hood',
        'Belt pouch containing 15gp'
      ]
    },
    {
      name: 'Folk Hero',
      description: 'You come from humble beginnings but have become a hero to the common people.',
      skills: ['Animal Handling', 'Survival'],
      tools: 'Artisan\'s tools (one of your choice)',
      languages: 'None',
      equipment: [
        'Set of artisan\'s tools (one of your choice)',
        'Shovel',
        'Iron pot',
        'Set of common clothes',
        'Belt pouch containing 10gp'
      ]
    },
    {
      name: 'Noble',
      description: 'You were born into a family of wealth and privilege, accustomed to the finer things in life.',
      skills: ['History', 'Persuasion'],
      tools: 'None',
      languages: 'One of your choice',
      equipment: [
        'Fine clothes',
        'Signet ring',
        'Scroll of pedigree',
        'Purse containing 25gp'
      ]
    },
    {
      name: 'Sage',
      description: 'You have spent years studying in libraries and universities, gaining knowledge on various subjects.',
      skills: ['Arcana', 'History'],
      tools: 'None',
      languages: 'Two of your choice',
      equipment: [
        'Bottle of black ink',
        'Quill',
        'Small knife',
        'Letter from a dead colleague with a question you have not yet been able to answer',
        'Set of common clothes',
        'Pouch containing 10gp'
      ]
    },
    {
      name: 'Soldier',
      description: 'You served in a military organization as a soldier, scout, or officer.',
      skills: ['Athletics', 'Intimidation'],
      tools: 'None',
      languages: 'None',
      equipment: [
        'Insignia of rank',
        'Trophy taken from a fallen enemy (such as a dagger, broken blade, or piece of a banner)',
        'Set of bone dice or deck of cards',
        'Set of common clothes',
        'Pouch containing 10gp'
      ]
    },
    {
      name: 'Urchin',
      description: 'You grew up on the streets, fighting to survive each day. You know the ins and outs of city life like the back of your hand.',
      skills: ['Sleight of Hand', 'Stealth'],
      tools: 'Disguise kit, thieves\' tools',
      languages: 'None',
      equipment: [
        'Small knife',
        'Map of the city you grew up in',
        'Pet mouse',
        'Token to remember your parents by',
        'Set of common clothes',
        'Belt pouch containing 10gp'
      ]
    },
    {
      name: 'Hermit',
      description: 'You chose a life of seclusion, spending your days in contemplation and meditation away from the distractions of society.',
      skills: ['Medicine', 'Religion'],
      tools: 'Herbalism kit',
      languages: 'One of your choice',
      equipment: [
        'Winter blanket',
        'Herbalism kit',
        'Common clothes',
        'Belt pouch containing 5gp'
      ]
    },
    {
      name: 'Entertainer',
      description: 'You have delighted audiences with your performances, whether through music, acting, or some other form of entertainment.',
      skills: ['Acrobatics', 'Performance'],
      tools: 'Disguise kit, musical instrument (one of your choice)',
      languages: 'None',
      equipment: [
        'Musical instrument (one of your choice)',
        'Favor of an admirer (love letter, lock of hair, or trinket)',
        'Costume',
        'Belt pouch containing 15gp'
      ]
    },
    {
      name: 'Outlander',
      description: 'You grew up in the wilderness, far from civilization, and have learned to live off the land.',
      skills: ['Athletics', 'Survival'],
      tools: 'Musical instrument (one of your choice)',
      languages: 'One of your choice',
      equipment: [
        'Staff',
        'Hunting trap',
        'Trophy from an animal you killed',
        'Set of traveler’s clothes',
        'Belt pouch containing 10gp'
      ]
    },
    {
      name: 'Guild Artisan',
      description: 'You are a member of a guild, skilled in a particular trade or craft, and have connections with other artisans.',
      skills: ['Insight', 'Persuasion'],
      tools: 'Artisan\'s tools (one of your choice)',
      languages: 'None',
      equipment: [
        'Letter of introduction from your guild',
        'Traveler’s clothes',
        'Belt pouch containing 15gp'
      ]
    },
    {
      name: 'City Watch',
      description: 'You are a member of the city guard, responsible for maintaining law and order within the city.',
      skills: ['Athletics', 'Perception'],
      tools: 'None',
      languages: 'None',
      equipment: [
        'Badge of your rank',
        'Whistle',
        'Set of common clothes',
        'Belt pouch containing 10gp'
      ]
    },
    // Add more backgrounds as needed
  ];
  

  export default function ChooseBackground() {
    // State to store selected background
    const [selectedBackground, setSelectedBackground] = useState('');
  
    // Function to handle background selection
    const handleSelectBackground = (backgroundName) => {
      setSelectedBackground(backgroundName);
    };
  
    return (
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Choose Your Background</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {backgrounds.map((background, index) => (
            <div key={index} className="border rounded p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{background.name}</h2>
                <p className="mb-2">{background.description}</p>
                <h3 className="font-semibold">Skills:</h3>
                <ul className="list-disc ml-6 mb-2">
                  {background.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <p className="mb-2"><span className="font-semibold">Tools:</span> {background.tools}</p>
                <p className="mb-2"><span className="font-semibold">Languages:</span> {background.languages}</p>
                <h3 className="font-semibold">Equipment:</h3>
                <ul className="list-disc ml-6">
                  {background.equipment.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Use Next.js Link component for navigation */}
              <div className="text-center mt-4">
                <Link href="/equipment">
                  <span className={`w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${selectedBackground === background.name ? 'opacity-50 cursor-not-allowed' : ''}`}
                     onClick={() => handleSelectBackground(background.name)}
                     disabled={selectedBackground === background.name}
                  >
                    {selectedBackground === background.name ? 'Selected' : 'Select'}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
  
        {selectedBackground && (
          <div className="mt-6 text-center">
            <p className="text-lg font-bold">You have selected: {selectedBackground}</p>
            {/* Use Next.js Link component for navigation */}
            <Link href="/equipment">
              <span className="text-blue-500 hover:underline">Go to Equipment Page</span>
            </Link>
            {/* You can add further actions or navigation here, e.g., to proceed to character creation */}
          </div>
        )}
      </main>
    );
  }