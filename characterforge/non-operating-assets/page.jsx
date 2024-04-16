'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/legacy/image";
import Link from 'next/link';

export default function Equipment() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null); // Default option
    
    const [selectedWeaponType, setSelectedWeaponType] = useState(null);
    const [selectedArmorType, setSelectedArmorType] = useState(null);
    const [selectedToolCategory, setSelectedToolCategory] = useState(null);

    const [selectedItems, setSelectedItems] = useState([]); // State to hold selected items

    useEffect(() => {
      const storedClass = localStorage.getItem('selectedClass');
      if (!storedClass) {
        // If no class is selected, redirect back to class selection page
        router.push('/scores');
      }
    }, []); 

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // Reset other selected types
        setSelectedWeaponType(null);
        setSelectedArmorType(null);
        setSelectedToolCategory(null);
    };

    const renderWeaponButtons = () => {
        return (
            <div>
                <button onClick={() => setSelectedWeaponType('simple')} className="mx-2 px-4 py-2">Simple Weapons</button>
                <button onClick={() => setSelectedWeaponType('martial')} className="mx-2 px-4 py-2">Martial Weapons</button>
                <button onClick={() => setSelectedWeaponType('ranged')} className="mx-2 px-4 py-2">Ranged Weapons</button>
            </div>
        );
    };

    const renderArmorButtons = () => {
        return (
            <div>
                <button onClick={() => setSelectedArmorType('light')} className="mx-2 px-4 py-2">Light Armor</button>
                <button onClick={() => setSelectedArmorType('medium')} className="mx-2 px-4 py-2">Medium Armor</button>
                <button onClick={() => setSelectedArmorType('heavy')} className="mx-2 px-4 py-2">Heavy Armor</button>
            </div>
        );
    };

    const renderToolButtons = () => {
        return (
            <div>
                <button onClick={() => setSelectedToolCategory('artisan')} className="mx-2 px-4 py-2">Artisan's Tools</button>
                <button onClick={() => setSelectedToolCategory('gaming')} className="mx-2 px-4 py-2">Gaming Sets</button>
                <button onClick={() => setSelectedToolCategory('musical')} className="mx-2 px-4 py-2">Musical Instruments</button>
                <button onClick={() => setSelectedToolCategory('other')} className="mx-2 px-4 py-2">Other Tools</button>
            </div>
        );
    };

    const renderSelectedButtons = () => {
        if (selectedOption === 'weapons') {
            return renderWeaponButtons();
        } else if (selectedOption === 'armor') {
            return renderArmorButtons();
        } else if (selectedOption === 'tools') {
            return renderToolButtons();
        } else {
            return null;
        }
    };

    const handleItemClick = (item) => {
        // Toggle the selection state of the item
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(item)) {
                // Remove item if already selected
                return prevSelectedItems.filter(selectedItem => selectedItem !== item);
            } else {
                // Add item if not selected
                return [...prevSelectedItems, item];
            }
        });
    };
    
    const renderSelectedItemsBox = () => {
        return (
            <div className="border border-gray-500 p-4">
                <h2 className="text-lg font-bold mb-2">Selected Items:</h2>
                <ul className="list-disc pl-4">
                    {selectedItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderItemList = (items) => {
        return (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px', paddingLeft: '20px', borderRadius: '10px', border: '1px solid #ccc', padding: '10px' }}>
                        <button onClick={() => handleItemClick(item)} className={`text-blue-600 ${selectedItems.includes(item) ? 'bg-yellow-200' : ''}`}>{item}</button>
                    </li>
                ))}
            </ul>
        );
    };
    

    const renderSelectedItems = () => {
        if (selectedOption === 'weapons') {
            return (
                <div>
                    {selectedWeaponType && (
                        <div>
                            {selectedWeaponType === 'simple' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Simple Weapons:</h2>
                                    {renderItemList([
                                        'Club',
                                        'Dagger',
                                        'Greatclub',
                                        'Handaxe',
                                        'Javelin',
                                        'Light Hammer',
                                        'Mace',
                                        'Quarterstaff',
                                        'Sickle',
                                        'Spear'
                                    ])}
                                </div>
                            )}
                            {selectedWeaponType === 'martial' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Martial Weapons:</h2>
                                    {renderItemList([
                                        'Battleaxe',
                                        'Flail',
                                        'Glaive',
                                        'Greataxe',
                                        'Greatsword',
                                        'Halberd',
                                        'Lance',
                                        'Longsword',
                                        'Maul',
                                        'Morningstar',
                                        'Pike',
                                        'Rapier',
                                        'Scimitar',
                                        'Shortsword',
                                        'Trident',
                                        'War Pick',
                                        'Warhammer',
                                        'Whip'
                                    ])}
                                </div>
                            )}
                            {selectedWeaponType === 'ranged' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Ranged Weapons:</h2>
                                    <h3 className="text-lg font-bold mb-2">Simple Ranged Weapons:</h3>
                                    {renderItemList([
                                        'Dart',
                                        'Shortbow',
                                        'Sling',
                                        'Light Crossbow'
                                    ])}
                                    <h3 className="text-lg font-bold mb-2">Martial Ranged Weapons:</h3>
                                    {renderItemList([
                                        'Longbow',
                                        'Heavy Crossbow'
                                    ])}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
        } else if (selectedOption === 'armor') {
            return (
                <div>
                    {selectedArmorType && (
                        <div>
                            {selectedArmorType === 'light' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Light Armor:</h2>
                                    {renderItemList([
                                        'Padded Armor',
                                        'Leather Armor',
                                        'Studded Leather Armor'
                                    ])}
                                </div>
                            )}
                            {selectedArmorType === 'medium' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Medium Armor:</h2>
                                    {renderItemList([
                                        'Hide Armor',
                                        'Chain Shirt',
                                        'Scale Mail'
                                    ])}
                                </div>
                            )}
                            {selectedArmorType === 'heavy' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Heavy Armor:</h2>
                                    {renderItemList([
                                        'Ring Mail',
                                        'Chain Mail',
                                        'Splint Armor',
                                        'Plate Armor'
                                    ])}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
        } else if (selectedOption === 'tools') {
            return (
                <div>
                    {selectedToolCategory && (
                        <div>
                            {selectedToolCategory === 'artisan' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Artisan's Tools:</h2>
                                    {renderItemList([
                                        "Alchemist's Supplies",
                                        "Brewer's Supplies",
                                        "Calligrapher's Supplies",
                                        "Carpenter's Tools",
                                        "Cartographer's Tools",
                                        "Cobbler's Tools",
                                        "Cook's Utensils",
                                        "Glassblower's Tools",
                                        "Jeweler's Tools",
                                        "Leatherworker's Tools",
                                        "Mason's Tools",
                                        "Painter's Supplies",
                                        "Potter's Tools",
                                        "Smith's Tools",
                                        "Tinker's Tools",
                                        "Weaver's Tools",
                                        "Woodcarver's Tools"
                                    ])}
                                </div>
                            )}
                            {selectedToolCategory === 'gaming' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Gaming Sets:</h2>
                                    {renderItemList([
                                        "Dice Set",
                                        "Dragonchess Set",
                                        "Playing Card Set",
                                        "Three-Dragon Ante Set"
                                    ])}
                                </div>
                            )}
                            {selectedToolCategory === 'musical' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Musical Instruments:</h2>
                                    {renderItemList([
                                        "Bagpipes",
                                        "Drum",
                                        "Dulcimer",
                                        "Flute",
                                        "Lute",
                                        "Lyre",
                                        "Horn",
                                        "Pan Flute",
                                        "Shawm",
                                        "Viol"
                                    ])}
                                </div>
                            )}
                            {selectedToolCategory === 'other' && (
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Other Tools:</h2>
                                    {renderItemList([
                                        "Navigator's Tools",
                                        "Thieves' Tools",
                                        "Disguise Kit",
                                        "Forgery Kit"
                                    ])}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
        } else {
            return null;
        }
    };

    return (
      <main className="flex flex-col min-h-screen items-center justify-center p-24 bg-black text-white">
        <div>
          <h1 className="text-4xl font-bold text-center mb-12">Select Equipment Type</h1>
          <div className="flex justify-center mb-8">
            {/* Options to click on */}
            <button onClick={() => handleOptionClick('weapons')} className={`mx-2 px-4 py-2 ${selectedOption === 'weapons' && 'bg-blue-500 text-white'}`}>
              <div className="relative">
                <Image src="/equipment/weapons.png" alt="Weapons" width={2500} height={1200} />
                <p className="absolute bottom-0 w-full text-center bg-gray-900 bg-opacity-50 text-white">Click on the picture to select Weapons</p>
              </div>
            </button>
            <button onClick={() => handleOptionClick('armor')} className={`mx-2 px-4 py-2 ${selectedOption === 'armor' && 'bg-blue-500 text-white'}`}>
              <div className="relative">
                <Image src="/equipment/armor.png" alt="Armor" width={2500} height={1200} />
                <p className="absolute bottom-0 w-full text-center bg-gray-900 bg-opacity-50 text-white">Click on the picture to select Armor</p>
              </div>
            </button>
            <button onClick={() => handleOptionClick('tools')} className={`mx-2 px-4 py-2 ${selectedOption === 'tools' && 'bg-blue-500 text-white'}`}>
              <div className="relative">
                <Image src="/equipment/tools.png" alt="Tools" width={2500} height={1200} />
                <p className="absolute bottom-0 w-full text-center bg-gray-900 bg-opacity-50 text-white">Click on the picture to select Tools</p>
              </div>
            </button>
          </div>
        </div>

        {/* Render buttons based on selected option */}
        {selectedOption && renderSelectedButtons()}

        {/* Render items based on selected option */}
        {selectedOption && renderSelectedItems()}

        {/* Render selected items box */}
        {renderSelectedItemsBox()}

        <button onClick={() => router.push('/score')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
        Go to Scores Page
        </button>

      </main>
    );
}
 