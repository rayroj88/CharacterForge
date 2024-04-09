'use client'

import { useState } from 'react';

// List of equipment options with detailed information
const equipmentOptions = [
  {
    name: 'Backpack',
    description: 'A backpack can hold many items, making it useful for adventurers on the go.',
    cost: '2 gp',
    weight: '5 lb'
  },
  {
    name: 'Bedroll',
    description: 'A bedroll is a simple and portable sleeping mat, providing comfort during long journeys.',
    cost: '1 gp',
    weight: '7 lb'
  },
  // Add more equipment options as needed
];

export default function ChooseEquipment() {
  // State to store selected equipment
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  // Function to handle equipment selection
  const toggleEquipmentSelection = (equipmentName) => {
    if (selectedEquipment.includes(equipmentName)) {
      setSelectedEquipment(selectedEquipment.filter(item => item !== equipmentName));
    } else {
      setSelectedEquipment([...selectedEquipment, equipmentName]);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Choose Your Equipment</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {equipmentOptions.map((equipment, index) => (
          <div key={index} className={`border rounded p-4 ${selectedEquipment.includes(equipment.name) ? 'bg-gray-200' : ''}`}>
            <h2 className="text-xl font-bold mb-2">{equipment.name}</h2>
            <p className="mb-2">{equipment.description}</p>
            <p className="mb-2"><span className="font-semibold">Cost:</span> {equipment.cost}</p>
            <p className="mb-2"><span className="font-semibold">Weight:</span> {equipment.weight}</p>
            <button
              className={`w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700`}
              onClick={() => toggleEquipmentSelection(equipment.name)}
            >
              {selectedEquipment.includes(equipment.name) ? 'Deselect' : 'Select'}
            </button>
          </div>
        ))}
      </div>

      {selectedEquipment.length > 0 && (
        <div className="mt-6 text-center">
          <p className="text-lg font-bold">You have selected:</p>
          <ul className="list-disc ml-6">
            {selectedEquipment.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
          {/* You can add further actions or navigation here, e.g., to proceed to the next step */}
        </div>
      )}
    </main>
  );
}
