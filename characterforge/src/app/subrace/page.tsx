'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/legacy/image";
import Link from 'next/link';

// This could be a static object or fetched from an API/database
const allSubraces = {
  dwarf: [
    {
      name: 'Hill Dwarf',
      description: 'Hill Dwarves have keen senses, deep intuition, and remarkable resilience.',
      imageUrl: '/hill_dwarf.svg',
    },
    {
      name: 'Mountain Dwarf',
      description: 'Mountain Dwarves are strong and hardy, accustomed to a difficult life in rugged terrain.',
      imageUrl: '/mountain_dwarf.svg',
    },
  ],
  elf: [
    {
      name: 'High Elf',
      description: 'High Elves are known for their keen intellect and mastery of magic.',
      imageUrl: '/high_elf.svg',
    },
    {
      name: 'Wood Elf',
      description: 'Wood Elves are stealthy and nimble, with a deep connection to nature.',
      imageUrl: '/wood_elf.svg',
    },
    {
      name: 'Dark Elf (Drow)',
      description: 'Drow are adept in dark magic, with superior vision in darkness.',
      imageUrl: '/dark_elf.svg',
    },
  ],
  halfling: [
    {
      name: 'Lightfoot Halfling',
      description: 'Lightfoot Halflings are stealthy and skilled at evading notice.',
      imageUrl: '/lightfoot_halfling.svg',
    },
    {
      name: 'Stout Halfling',
      description: 'Stout Halflings are hardy and resistant, with a natural resilience.',
      imageUrl: '/stout_halfling.svg',
    },
  ],
  gnome: [
    {
      name: 'Forest Gnome',
      description: 'Forest Gnomes have a knack for stealth and illusion, with a love of animals.',
      imageUrl: '/forest_gnome.svg',
    },
    {
      name: 'Rock Gnome',
      description: 'Rock Gnomes are tinkerers and inventors, known for their creativity and technical prowess.',
      imageUrl: '/rock_gnome.svg',
    },
  ],
};

export default function PickSubrace() {
  const [subraces, setSubraces] = useState([]);
  const [race, setRace] = useState('');
  const router = useRouter(); // Initialize the useRouter hook

  useEffect(() => {
    // Read the selected race from localStorage
    const selectedRaceName = localStorage.getItem('selectedRace');
    if (selectedRaceName) {
      setRace(selectedRaceName);
      //Saving subraces for chosen race in an array
      const subracesForRace = allSubraces[selectedRaceName.toLowerCase()];
      setSubraces(subracesForRace || []);
    }
  }, []);

  // Function to handle clicking on a subrace
  const handleSubraceClick = (subrace) => {
    localStorage.setItem('selectedSubrace', subrace.name);
    router.push('/classselection'); // Navigate to class selection page
  };

  if (!subraces.length) {
    return <p>No subraces found for this race. Please select a different race.</p>;
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-fantasy-landscape bg-cover">
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your {race.charAt(0).toUpperCase() + race.slice(1)} Subrace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subraces.map((subrace) => (
          <div key={subrace.name} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => handleSubraceClick(subrace)}>
            <Image src={subrace.imageUrl} alt={subrace.name} width={500} height={300} />
            <div className="p-5">
              <h2 className="text-2xl font-bold">{subrace.name}</h2>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{subrace.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Removed the Link to class selection since it's handled in handleSubraceClick now */}
    </main>
  );
}