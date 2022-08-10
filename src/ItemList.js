import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map((item) => (
        <li key={item.id} className='item'>
            <input
                onChange={() => handleCheck(item.id)}
                type="checkbox"
                checked={item.checked}
            />
            <label 
                style={(item.checked) ? {textDecoration: "line-through"} : null}
                onDoubleClick={() => handleCheck(item.id)}
            >
                {item.item}
            </label>
            <FaTrashAlt 
                onClick={() => handleDelete(item.id)}
                role="button" 
                tabIndex="0" 
            />
        </li>
    ))}
    </ul>
  )
}

export default ItemList