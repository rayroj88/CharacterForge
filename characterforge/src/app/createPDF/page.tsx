'use client'

import { useEffect, useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const calculateStartingHealth = (characterClass, constitutionModifier) => {
  const classHitDie = {
    barbarian: 12, // d12
    fighter: 10, // d10
    paladin: 10, // d10
    ranger: 10, // d10
    bard: 8, // d8
    cleric: 8, // d8
    druid: 8, // d8
    monk: 8, // d8
    rogue: 8, // d8
    warlock: 8, // d8
    sorcerer: 6, // d6
    wizard: 6, // d6
  };

  const hitDie = classHitDie[characterClass.toLowerCase()];
  if (!hitDie) {
    throw new Error('Invalid character class for starting health calculation.');
  }

  // Constitution modifier calculation as per D&D rules
  const modifier = Math.floor((parseInt(constitutionModifier, 10) - 10) / 2);

  return hitDie + modifier; // Max hit die value + CON modifier
};

const clsHitDie = {
  Barbarian: 'd12',
  Fighter: 'd10',
  Paladin: 'd10',
  Ranger: 'd10',
  Bard: 'd8',
  Cleric: 'd8',
  Druid: 'd8',
  Monk: 'd8',
  Rogue: 'd8',
  Warlock: 'd8',
  Sorcerer: 'd6',
  Wizard: 'd6',
};

const raceToSpeed = {
  'Human': '30ft',
  'Hill Dwarf': '25ft',
  'Mountain Dwarf': '25ft',
  'High Elf': '30ft',
  'Wood Elf': '35ft',
  'Dark Elf': '30ft', // Drow
  'Lightfoot Halfling': '25ft',
  'Stout Halfling': '25ft',
  'Forest Gnome': '25ft',
  'Rock Gnome': '25ft',
  'Half-Elf': '30ft',
  'Half-Orc': '30ft',
  'Dragonborn': '30ft',
  'Tiefling': '30ft',
  // Add other subraces if necessary
};

const classSavingThrowProficiencies = {
  Barbarian: ['strength', 'constitution'],
  bard: ['dexterity', 'charisma'],
  Cleric: ['wisdom', 'charisma'],
  Druid: ['intelligence', 'wisdom'],
  Fighter: ['strength', 'constitution'],
  Monk: ['strength', 'dexterity'],
  Paladin: ['wisdom', 'charisma'],
  Ranger: ['strength', 'dexterity'],
  Rogue: ['dexterity', 'intelligence'],
  Sorcerer: ['constitution', 'charisma'],
  Warlock: ['wisdom', 'charisma'],
  Wizard: ['intelligence', 'wisdom'],
};

const CharacterSheetPage = () => {
  const [characterData, setCharacterData] = useState<any>({});
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [characterName, setCharacterName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [skinColor, setSkinColor] = useState('');
  const [hairColor, setHairColor] = useState('');
  const [focused, setFocused] = useState('');

  useEffect(() => {
    // Retrieve character data from localStorage
    const data = {
      race: localStorage.getItem('selectedRace'),
      subrace: localStorage.getItem('selectedSubrace'),
      class: localStorage.getItem('selectedClass'),
      strength: localStorage.getItem('strength'),
      dexterity: localStorage.getItem('dexterity'),
      constitution: localStorage.getItem('constitution'),
      intelligence: localStorage.getItem('intelligence'),
      wisdom: localStorage.getItem('wisdom'),
      charisma: localStorage.getItem('charisma'),
      background: localStorage.getItem('background'),
      // Add other character data properties here
    };
    setCharacterData(data);
  }, []);

  useEffect(() => {
    // Function to calculate ability modifier
    const calculateModifier = (abilityScore) => {
      const score = parseInt(abilityScore, 10); // Ensure the ability score is an integer
      const modifier = Math.floor((score - 10) / 2); // Calculate and round down the modifier
    
      // Prepend "+" only if the modifier is strictly positive
      return modifier > 0 ? `+${modifier}` : modifier.toString();
    };

    const calculateModifierAsNumber = (abilityScore) => {
      const score = parseInt(abilityScore, 10); // Ensure the ability score is an integer
      return Math.floor((score - 10) / 2); // Calculate and round down the modifier
    };

    // Load the PDF template from the public folder
    const loadPdfTemplate = async () => {
      const pdfTemplateBytes = await fetch('/DnD_5E_CharacterSheet_FormFillable.pdf').then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfTemplateBytes);

      const form = pdfDoc.getForm();

      const bonus = "+2"
      const race = localStorage.getItem('selectedRace');
      const subrace = localStorage.getItem('selectedSubrace');
      const characterClass = localStorage.getItem('selectedClass');
      const strength = localStorage.getItem('strength');
      const dexterity = localStorage.getItem('dexterity');
      const constitution = localStorage.getItem('constitution');
      const intelligence = localStorage.getItem('intelligence');
      const wisdom = localStorage.getItem('wisdom');
      const charisma = localStorage.getItem('charisma');
      const background = localStorage.getItem('background');
      const startingHealth = calculateStartingHealth(characterClass, constitution);
      const passiveWisdom = 10 + calculateModifierAsNumber(wisdom);
      const hitDie = clsHitDie[characterClass];

      const name2Field = form.getTextField('CharacterName 2');
      const ageField = form.getTextField('Age');
      const heightField = form.getTextField('Height');
      const weightField = form.getTextField('Weight');
      const eyeField = form.getTextField('Eyes');
      const skinField = form.getTextField('Skin');
      const hairField = form.getTextField('Hair');
      const speedField = form.getTextField('Speed');
      const nameField = form.getTextField('CharacterName');
      const hdField = form.getTextField('HD');
      const pasField = form.getTextField('Passive');
      const hpField = form.getTextField('HPCurrent');
      const maxHPField = form.getTextField('HPMax');
      const initField = form.getTextField('Initiative');
      const raceField = form.getTextField('Race ');
      const characterClassField = form.getTextField('ClassLevel');
      const strField = form.getTextField('STR');
      const dexField = form.getTextField('DEX');
      const conField = form.getTextField('CON');
      const intField = form.getTextField('INT');
      const wisField = form.getTextField('WIS');
      const chaField = form.getTextField('CHA');
      const backgroundField = form.getTextField('Background');
      const strMod = form.getTextField('STRmod');
      const dexMod = form.getTextField('DEXmod ')
      const conMod = form.getTextField('CONmod')
      const intMod = form.getTextField('INTmod')
      const wisMod = form.getTextField('WISmod')
      const chaMod = form.getTextField('CHamod')
      const proMod = form.getTextField('ProfBonus')
      const strST = form.getTextField('ST Strength')
      const dexST = form.getTextField('ST Dexterity')
      const conST = form.getTextField('ST Constitution')
      const intST = form.getTextField('ST Intelligence')
      const wisST = form.getTextField('ST Wisdom')
      const chaST = form.getTextField('ST Charisma')
      
      nameField.setText(characterName);
      name2Field.setText(characterName);
      ageField.setText(age);
      heightField.setText(height);
      weightField.setText(weight);
      eyeField.setText(eyeColor);
      skinField.setText(skinColor);
      hairField.setText(hairColor);

      if (subrace != null ) {
        raceField.setText(subrace); 
      } 
      else {
        raceField.setText(race); 
      }
      characterClassField.setText(characterClass);
      strField.setText(strength);
      dexField.setText(dexterity);
      conField.setText(constitution);
      intField.setText(intelligence);
      wisField.setText(wisdom);
      chaField.setText(charisma);
      backgroundField.setText(background);
      proMod.setText(bonus);
      initField.setText(calculateModifier(dexterity).toString());
       // Calculate and set ability modifiers
      strMod.setText(calculateModifier(strength).toString());
      dexMod.setText(calculateModifier(dexterity).toString());
      conMod.setText(calculateModifier(constitution).toString());
      intMod.setText(calculateModifier(intelligence).toString());
      wisMod.setText(calculateModifier(wisdom).toString());
      chaMod.setText(calculateModifier(charisma).toString());
      hpField.setText(startingHealth.toString());
      maxHPField.setText(startingHealth.toString());
      pasField.setText(passiveWisdom.toString());
      hdField.setText(hitDie);

      const actualRace = (subrace || race); // Use subrace if available, otherwise use race
      const speed = raceToSpeed[actualRace];
      
      speedField.setText(speed);
 
      const modifiedPdfBytes = await pdfDoc.save();
      setPdfBytes(modifiedPdfBytes);
    };

    loadPdfTemplate();
  }, [characterName, age, height, weight, eyeColor, skinColor, hairColor]);

  const downloadPdf = () => {
    if (!pdfBytes) return;

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'filled_character_sheet.pdf';
    link.click();
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '20px',
      background: 'black',
      color: 'white',
    },
    input: {
      background: 'black',
      color: 'white',
      border: '1px solid white',
      margin: '10px',
      padding: '10px',
      width: '200px',
      borderRadius: '5px',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    inputFocus: {
      borderColor: '#6200ee',
      boxShadow: '0 0 5px #6200ee',
    },
    button: {
      fontSize: 'inherit',
      marginTop: '20px',
      padding: '10px 20px',
      background: 'transparent',
      color: 'white',
      border: '1px solid white',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    }
  };

  // Function to generate input fields
  const createInput = (placeholder, value, setValue) => (
    <input 
      style={{...styles.input, ...(focused === placeholder && styles.inputFocus)}} 
      type="text" 
      placeholder={placeholder} 
      value={value} 
      onChange={e => setValue(e.target.value)} 
      onFocus={() => setFocused(placeholder)}
      onBlur={() => setFocused('')}
    />
  );

  return (
    <div style={styles.container}>
      {createInput("Character Name", characterName, setCharacterName)}
      {createInput("Age", age, setAge)}
      {createInput("Height", height, setHeight)}
      {createInput("Weight", weight, setWeight)}
      {createInput("Eye Color", eyeColor, setEyeColor)}
      {createInput("Skin Tone", skinColor, setSkinColor)}
      {createInput("Hair Color", hairColor, setHairColor)}
      
      <button style={styles.button} onClick={() => downloadPdf()}>Download PDF</button>
    </div>
  );
};

export default CharacterSheetPage;