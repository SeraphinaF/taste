import { useState } from 'react'
import './searchbar.css'
import

function Searchbar() {

    const [input, setInput] = useState('');
    const submitHandler = (e) => {

    e.preventDefault();
    }

    return (
        <form className='search-form' onSubmit={submitHandler}>
            <input
                onChange={(e)=> setInput(e.target.value)}
                type="text"
                placeholder='Search...'
                value={input}
            />
            <span className='search-icon'><img src="search_icon.png"></img></span>
        </form>
    )
}

export default Searchbar
