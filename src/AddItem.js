import React, {useRef} from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleNewItemSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleNewItemSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
            ref={inputRef}
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
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem