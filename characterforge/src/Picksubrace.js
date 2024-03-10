import './Picksubrace.css';

const Picksubrace = (race) => {

    return (
      <div className="Subracepage">
        <h3>Select a Sub-Race</h3>
        {race === 'elf' && (
            <>
                <button className='subrace-button' id='wood-elf'>Wood-Elf</button>
                <button className='subrace-button' id='high-elf'>High-Elf</button>
                <button className='subrace-button' id='drow'>Drow (Dark Elf)</button>
            </>
        )}
        {race === 'dwarf' && (
            <>
                <button className='subrace-button' id='hill-dwarf'>Hill Dwarf</button>
                <button className='subrace-button' id='mountain-dwarf'>Mountain Dwarf</button>
            </>
        )}
        {race === 'halfling' && (
            <>
                <button className='subrace-button' id='lightfoot'>Lightfoot</button>
                <button className='subrace-button' id='stout'>Stout</button>
            </>
        )}
      </div>
    );
}

export default Picksubrace;