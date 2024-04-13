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
      imageUrl: '/sub/hilldwarf.png',
    },
    {
      name: 'Mountain Dwarf',
      description: 'Mountain Dwarves are strong and hardy, accustomed to a difficult life in rugged terrain.',
      imageUrl: '/sub/mountaindwarf.png',
    },
  ],
  elf: [
    {
      name: 'High Elf',
      description: 'High Elves are known for their keen intellect and mastery of magic.',
      imageUrl: '/sub/highelf.png',
    },
    {
      name: 'Wood Elf',
      description: 'Wood Elves are stealthy and nimble, with a deep connection to nature.',
      imageUrl: '/sub/woodelf.png',
    },
    {
      name: 'Dark Elf (Drow)',
      description: 'Drow are adept in dark magic, with superior vision in darkness.',
      imageUrl: '/sub/drow.png',
    },
  ],
  halfling: [
    {
      name: 'Lightfoot Halfling',
      description: 'Lightfoot Halflings are stealthy and skilled at evading notice.',
      imageUrl: '/sub/lightfoothalfling.png',
    },
    {
      name: 'Stout Halfling',
      description: 'Stout Halflings are hardy and resistant, with a natural resilience.',
      imageUrl: '/sub/stouthalfling.png',
    },
  ],
  gnome: [
    {
      name: 'Forest Gnome',
      description: 'Forest Gnomes have a knack for stealth and illusion, with a love of animals.',
      imageUrl: '/sub/forestgnome.png',
    },
    {
      name: 'Rock Gnome',
      description: 'Rock Gnomes are tinkerers and inventors, known for their creativity and technical prowess.',
      imageUrl: '/sub/rockgnome.png',
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
      <div className={`flex justify-center gap-8 ${subraces.length < 3 ? 'w-auto' : 'w-full'}`}>
        {subraces.map((subrace) => (
          <div key={subrace.name} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer relative" onClick={() => handleSubraceClick(subrace)}>
            <Image src={subrace.imageUrl} alt={subrace.name} width={500} height={500} />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 text-white">
              <div className="p-5 text-center">
                <h2 className="text-2xl font-bold">{subrace.name}</h2>
                <p className="text-sm">{subrace.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Removed the Link to class selection since it's handled in handleSubraceClick now */}
    </main>
  );
}