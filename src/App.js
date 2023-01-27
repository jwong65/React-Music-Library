
import './App.css';
import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery/Gallery';

function App() {
 let [search, setSearch] = useState('')
 let [data, setData] = useState([])
 let [message, setMessage] = useState('')

 
useEffect(() => {
  const fetchData = async () => {
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
      // temporat literal `$results
      const resData = await response.json()
     if (resData.results.length >0){
      setData(resData.results)
     } else {
      // setMessage('Not Found')
     }
    }
  fetchData()
}, [search])

const handleSearch = (e, term)=>{
  e.preventDefault()
  setSearch(term)
}
 return (
 <>
  <SearchBar search={search} handleSearch={handleSearch}/>
  {message}
  <Gallery data={data}/>
 </>
)}

export default App;
