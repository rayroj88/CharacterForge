import Image from "next/image";
import Link from "next/link";

// Define an array of classes from the D&D Player's Handbook
const classes = [
    {
      name: "Barbarian",
      description: "A fierce warrior of primitive background who can enter a battle rage.",
      imageUrl: "/images/classes/barbarian.svg", // Replace with your actual image path
    },
    {
      name: "Bard",
      description: "An inspiring magician whose power echoes the music of creation.",
      imageUrl: "/images/classes/bard.svg", // Replace with your actual image path
    },
    {
      name: "Cleric",
      description: "A priestly champion who wields divine magic in service of a higher power.",
      imageUrl: "/images/classes/cleric.svg", // Replace with your actual image path
    },
    {
      name: "Druid",
      description: "A priest of the Old Faith, wielding the powers of nature and adopting animal forms.",
      imageUrl: "/images/classes/druid.svg", // Replace with your actual image path
    },
    {
      name: "Fighter",
      description: "A master of martial combat, skilled with a variety of weapons and armor.",
      imageUrl: "/images/classes/fighter.svg", // Replace with your actual image path
    },
    {
      name: "Monk",
      description: "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.",
      imageUrl: "/images/classes/monk.svg", // Replace with your actual image path
    },
    {
      name: "Paladin",
      description: "A holy warrior bound to a sacred oath.",
      imageUrl: "/images/classes/paladin.svg", // Replace with your actual image path
    },
    {
      name: "Ranger",
      description: "A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.",
      imageUrl: "/images/classes/ranger.svg", // Replace with your actual image path
    },
    {
      name: "Rogue",
      description: "A scoundrel who uses stealth and trickery to overcome obstacles and enemies.",
      imageUrl: "/images/classes/rogue.svg", // Replace with your actual image path
    },
    {
      name: "Sorcerer",
      description: "A spellcaster who draws on inherent magic from a gift or bloodline.",
      imageUrl: "/images/classes/sorcerer.svg", // Replace with your actual image path
    },
    {
      name: "Warlock",
      description: "A wielder of magic that is derived from a bargain with an extraplanar entity.",
      imageUrl: "/images/classes/warlock.svg", // Replace with your actual image path
    },
    {
      name: "Wizard",
      description: "A scholarly magic-user capable of manipulating the structures of reality.",
      imageUrl: "/images/classes/wizard.svg", // Replace with your actual image path
    },
  ];
  

export default function PickClass() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-fantasy-landscape bg-cover">
      <h1 className="text-4xl font-bold text-center mb-12">Choose Your Class</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classes.map((cls) => (
            <Link key={cls.name} href="/score" passHref>
                <div key={cls.name} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                    <Image src={cls.imageUrl} alt={cls.name} width={500} height={300} objectFit="cover" />
                    <div className="p-5">
                        <h2 className="text-2xl font-bold">{cls.name}</h2>
                        <p className="text-sm opacity-0 group-hover:opacity-75 transition-opacity duration-500">{cls.description}</p>
                    </div>
                </div>
            </Link>
        ))}
      </div>
      <Link href="/character-summary">
        <span className="mt-12 text-lg text-gray-600 hover:text-gray-800 transition-colors">Next: Review Your Character →</span>
      </Link>
    </main>
  );
}
