import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
            'id': 1,
            'item': "This is the first item",
            'checked': false
        },
        {
            'id': 2,
            'item': "This is the second item",
            'checked': true
        },
        {
            'id': 3,
            'item': "This is the third item",
            'checked': true 
        }
    ]);

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className='item'>
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>
                            {item.item}
                        </label>
                        <FaTrashAlt 
                            role="button" 
                            tabIndex="0" 
                        />
                    </li>
                ))}
            </ul>
        </main>

    )
}

export default Content