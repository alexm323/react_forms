import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Item from './Item'
import NewItemForm from './NewItemForm'


const ShoppingList = () => {
    const initialState = [
        { id: uuid(), name: 'Peanut butter', qty: 2 },
        { id: uuid(), name: 'Whole Milk', qty: 1 }
    ]
    const [items, setItems] = useState(initialState);
    const addItem = (newItem) => {
        // adding this in to a new array, not mutating the original array
        // add in the new product and new item 

        setItems(items => [...items, { ...newItem, id: uuid() }])
    }

    return (
        <div>
            <h3>Shopping List</h3>
            <NewItemForm addItem={addItem} />
            <div>
                {items.map(item => <Item id={item.id} name={item.name} qty={item.qty} key={item.id} />)}
            </div>
        </div>
    )
}

export default ShoppingList;