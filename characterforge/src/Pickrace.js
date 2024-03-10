import './Pickrace.css';

const Pickrace = () => {

    return (
      <div className="Racepage">
      <h3>Select a Race</h3>
        <button className='race-button' id='human'>Human</button>
        <button className='race-button' id='half-orc'>Half-Orc</button>
        <button className='race-button' id='elf'>Elf</button>
        <button className='race-button' id='half-elf'>Half-Elf</button>
        <button className='race-button' id='dwarf'>Dwarf</button>
        <button className='race-button' id='gnome'>Gnome</button>
        <button className='race-button' id='halfling'>Halfling</button>
        <button className='race-button' id='dragonborn'>Dragonborn</button>
        <button className='race-button' id='tiefling'>Tiefling</button>
      </div>
    );
}

export default Pickrace;