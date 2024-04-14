'use client'

import { useEffect, useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const CharacterSheetPage = () => {
  const [characterData, setCharacterData] = useState<any>({});
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);

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
    // Load the PDF template from the public folder
    const loadPdfTemplate = async () => {
      const pdfTemplateBytes = await fetch('/DnD_5E_CharacterSheet_FormFillable.pdf').then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfTemplateBytes);

      const form = pdfDoc.getForm();

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

      const raceField = form.getTextField('Race ');
      const subraceField = form.getTextField('Features and Traits');
      const characterClassField = form.getTextField('ClassLevel');
      const strField = form.getTextField('STR');
      const dexField = form.getTextField('DEX');
      const conField = form.getTextField('CON');
      const intField = form.getTextField('INT');
      const wisField = form.getTextField('WIS');
      const chaField = form.getTextField('CHA');
      const backgroundField = form.getTextField('Background');

      raceField.setText(race);
      subraceField.setText(subrace);
      characterClassField.setText(characterClass);
      strField.setText(strength);
      dexField.setText(dexterity);
      conField.setText(constitution);
      intField.setText(intelligence);
      wisField.setText(wisdom);
      chaField.setText(charisma);
      backgroundField.setText(background);

      const modifiedPdfBytes = await pdfDoc.save();
      setPdfBytes(modifiedPdfBytes);
    };

    loadPdfTemplate();
  }, []);

  const downloadPdf = () => {
    if (!pdfBytes) return;

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'filled_character_sheet.pdf';
    link.click();
  };

  return (
    <div>
      {/* Render your character sheet content here */}
      {pdfBytes && <button onClick={downloadPdf}>Download PDF</button>}
    </div>
  );
};

export default CharacterSheetPage;