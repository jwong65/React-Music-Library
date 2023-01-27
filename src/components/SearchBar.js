import React, {useState} from 'react'


export default function SearchBar(props) {
let [input, setInput] = useState('')
// Destructured it to put it as props

  return (
    <form onSubmit={(e)=> props.handleSearch(e, setInput)}>
        <input type='text' placeholder='Search Term here' 
        onChange={(e)=>{setInput(e.target.value)}}/>
        <input type ='submit' />
    </form>
  )
}
