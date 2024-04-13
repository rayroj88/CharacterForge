'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/legacy/image";
import Link from 'next/link';

// Define an array of classes from the D&D Player's Handbook
const classes = [
    {
      name: "Barbarian",
      description: "A fierce warrior of primitive background who can enter a battle rage.",
      imageUrl: "/classes/barbarian.png", 
    },
    {
      name: "Bard",
      description: "An inspiring magician whose power echoes the music of creation.",
      imageUrl: "/classes/bard.png", 
    },
    {
      name: "Cleric",
      description: "A priestly champion who wields divine magic in service of a higher power.",
      imageUrl: "/classes/cleric.png", // Replace with your actual image path
    },
    {
      name: "Druid",
      description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms.",
      imageUrl: "/classes/druid.png", // Replace with your actual image path
    },
    {
      name: "Fighter",
      description: "A master of martial combat, skilled with a variety of weapons and armor.",
      imageUrl: "/classes/fighter.png", // Replace with your actual image path
    },
    {
      name: "Monk",
      description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.",
      imageUrl: "/classes/monk.png", // Replace with your actual image path
    },
    {
      name: "Paladin",
      description: "A holy warrior bound to a sacred oath.",
      imageUrl: "/classes/paladin.png", // Replace with your actual image path
    },
    {
      name: "Ranger",
      description: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.",
      imageUrl: "/classes/ranger.png", // Replace with your actual image path
    },
    {
      name: "Rogue",
      description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies.",
      imageUrl: "/classes/rogue.png", // Replace with your actual image path
    },
    {
      name: "Sorcerer",
      description: "A spellcaster who draws on inherent magic from a gift or bloodline.",
      imageUrl: "/classes/sorcerer.png", // Replace with your actual image path
    },
    {
      name: "Warlock",
      description: "A wielder of magic that is derived from a bargain with an extraplanar entity.",
      imageUrl: "/classes/warlock.png", // Replace with your actual image path
    },
    {
      name: "Wizard",
      description: "A scholarly magic-user capable of manipulating the structures of reality.",
      imageUrl: "/classes/wizard.png", // Replace with your actual image path
    },
  ];

  export default function PickClass() {
    const router = useRouter();

    const handleClassClick = (cls) => {
      localStorage.setItem('selectedClass', cls.name);
      console.log(localStorage.getItem('selectedClass'));
      router.push('/score'); // Navigate to score selection page
    };
  
    return (
      <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-fantasy-landscape bg-cover">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Class</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => (
             <div key={cls.name} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer" onClick={() => handleClassClick(cls)}>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer relative">
                <Image src={cls.imageUrl} alt={cls.name} width={500} height={500} />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                  {/* Ensure text container is not affecting the centering */}
                  <div className="text-center p-5 text-white">
                    <h2 className="text-2xl font-bold">{cls.name}</h2>
                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{cls.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }