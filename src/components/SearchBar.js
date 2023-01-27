import React, {useState} from 'react'


export default function SearchBar({search, setSearch}) {
let [input, setInput] = useState('')
// Destructured it to put it as props

const handleSearch = (e)=>{
  e.preventDefault()
  setSearch(input)
}

  return (
    <form onSubmit={handleSearch}>
        <input type='text' placeholder='Search Term here' 
        onChange={(e)=>{setInput(e.target.value)}}/>
        <input type ='submit' />
    </form>
  )
}
