'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";

export default function PickRace() {
  // Define an array of races from the D&D Player's Handbook
  const races = [
    { name: "Dwarf", description: "Stout, durable, and skilled in combat and craftsmanship.", imageUrl: "/dwarf.png", hasSubraces: true },
    { name: "Elf", description: "Graceful, with keen senses and a deep affinity for nature and magic.", imageUrl: "/elf.png", hasSubraces: true },
    { name: "Halfling", description: "Optimistic and cheerful, with a knack for stealth and luck.", imageUrl: "/halfling.png", hasSubraces: true },
    { name: "Human", description: "Versatile and ambitious, humans have a wide variety of skills and talents.", imageUrl: "/human.png", hasSubraces: false },
    { name: "Dragonborn", description: "Proud, honorable, and with a strong affinity for magic and the ability to breathe dragonfire.", imageUrl: "/dragonborn.png", hasSubraces: false },
    { name: "Gnome", description: "Diminutive, intelligent, and curious, with a natural aptitude for magic and a love of craftsmanship and invention.", imageUrl: "/gnome2.png", hasSubraces: true },
    { name: "Half-Elf", description: "Blending the traits of elves and humans, half-elves are versatile, charismatic, and capable of mastering a variety of skills.", imageUrl: "/vercel.svg", hasSubraces: false },
    { name: "Half-Orc", description: "Combining the best features of humans and orcs, half-orcs are strong, resilient, and intimidating.", imageUrl: "/vercel.svg", hasSubraces: false },
    { name: "Tiefling", description: "Bearing the bloodline of a fiend, tieflings have a natural inclination towards magic and typically carry a daunting presence.", imageUrl: "/vercel.svg", hasSubraces: true },
    ];
  

    const router = useRouter(); // make sure to import useRouter

    // Function to handle race selection
    const selectRace = (race) => {
      if (race.hasSubraces) {
        localStorage.setItem('selectedRace', race.name);
        router.push('/subrace'); // Use Next.js routing to navigate
      } else {
        router.push('/classselection'); // No subraces, go directly to class selection
      }
    };
  
    return (
        <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-fantasy-landscape bg-cover">
          <h1 className="text-4xl font-bold text-center mb-12">Choose Your Race</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {races.map((race) => (
              <div key={race.name} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => selectRace(race)}>
                <Image src={race.imageUrl} alt={race.name} width={500} height={300} objectFit="cover" />
                <div className="p-5">
                  <h2 className="text-2xl font-bold">{race.name}</h2>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{race.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      );
  }