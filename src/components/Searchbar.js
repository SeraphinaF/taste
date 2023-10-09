import { useState } from 'react'
import './searchbar.css'
import { useNavigate } from 'react-router-dom';

function Searchbar() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {


        e.preventDefault();
        navigate('/searched/' + input)
    }

    return (
        <form className='search-form' onSubmit={submitHandler}>
            <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder='Search...'
                value={input}
            />
            <span className='search-icon'><img src="search_icon.png"></img></span>
        </form>
    )
}

export default Searchbar
