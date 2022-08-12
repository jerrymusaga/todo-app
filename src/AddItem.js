import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleNewItemSubmit}) => {
  
  return (
    <form className='addForm' onSubmit={handleNewItemSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            
            onChange={(e) => setNewItem(e.target.value)}
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            value={newItem}
            required
        />
        <button
            type='submit'
            aria-label='Add Item'
            
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem