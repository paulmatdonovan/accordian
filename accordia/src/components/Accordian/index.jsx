import './styles.css'
import { useState } from 'react';
import data from './data';

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleMultiSelection(currentId) {
        let copyMultiple = [...multiple];
        // multiple.indexOf(dataItem.id) !== -1 is a way to check if dataItem.id is one of the selected items in the multiple array.
        const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
        if (findIndexOfCurrentId === -1) copyMultiple.push(currentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(copyMultiple)
    }

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
    }

    return <div className='wrapper'>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi-Selection</button>
        <div className="accordian">
            {data && data.length > 0 ?
                data.map(dataItem => <div className='item'>
                    <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>

                    {enableMultiSelection
                        ?
                        // this checks if something exists in the array
                        multiple.indexOf(dataItem.id) !== -1 &&
                        (
                            <div className="content"> {dataItem.answer}</div>
                        ) : selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)
                    }


                </div>)
                : <div>No data found!</div>}
        </div>
    </div>


}
export default Accordian;