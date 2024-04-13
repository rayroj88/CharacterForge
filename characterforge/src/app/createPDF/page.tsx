'use client'

import { useEffect, useState } from 'react';
import { PDFDocument, PDFName, PDFWidgetAnnotation, rgb } from 'pdf-lib';

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
      // Add other character data properties here
    };
    setCharacterData(data);
  }, []);

  useEffect(() => {
    // Load the PDF template and fill in the values
    const loadPdfTemplate = async () => {
      const pdfTemplateBytes = await fetch('../DnD_5E_CharacterSheet_FormFillable.pdf').then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfTemplateBytes);

      const form = pdfDoc.getForm();

      const nameField = form.getTextField('CharacterName 2');
      const ageField = form.getTextField('Age')
      const heightField = form.getTextField('Height')
      const weightField = form.getTextField('Weight')
      const eyesField = form.getTextField('Eyes')
      const skinField = form.getTextField('Skin')
      const hairField = form.getTextField('Hair')

      const alliesField = form.getTextField('Allies')
      const factionField = form.getTextField('FactionName')
      const backstoryField = form.getTextField('Backstory')
      const traitsField = form.getTextField('Feat+Traits')
      const treasureField = form.getTextField('Treasure')

      nameField.setText('Mario')
      ageField.setText('24 years')
      heightField.setText(`5' 1"`)
      weightField.setText('196 lbs')
      eyesField.setText('blue')
      skinField.setText('white')
      hairField.setText('brown')

      const modifiedPdfBytes = await pdfDoc.save();
      setPdfBytes(modifiedPdfBytes);
    };

    loadPdfTemplate();
  }, [characterData]);

  const downloadPdf = () => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'filled_character_sheet.pdf';
    link.click();
  };

  return (
    <div>
      {/* Render your character sheet content here */}
      <button onClick={downloadPdf}>Download PDF</button>
    </div>
  );
};

export default CharacterSheetPage;