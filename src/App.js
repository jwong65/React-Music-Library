
import './App.css';
import { useState, useEffect, useRef } from 'react'
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery/Gallery';

import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

function App() {
 let [search, setSearch] = useState('')
 let [data, setData] = useState([])
 let [message, setMessage] = useState('')

 let searchInput = useRef('')


 //API isn't working so going to apply what the assignment is using
 
useEffect(() => {
  if(search){
  const fetchData = async () => {
      const response = await fetch(`https://itunes.apple.com/search?term=${search}`)
      // temporat literal `$results
      // `https://itunes.apple.com/search?term=${searc
      const resData = await response.json()
     if (resData.results.length >0){
      setData(resData.results)
     } else {
      setMessage('Not Found')
     }
    }
  fetchData()
}
}, [search])


  const handleInput = (e, term)=>{
    e.preventDefault()
    setSearch(term)
  }
 return (
 <>
  <SearchContext.Provider value = {{
    input: searchInput,
    handleInput: handleInput
  }}>
    <SearchBar/>
  </SearchContext.Provider>
  {/* <SearchBar search= {search} setSearch={setSearch} /> */}
  {message}
  {/* <Gallery data={data}/> */}
  <DataContext.Provider value = {data}>
    <Gallery />
  </DataContext.Provider>
 </>
)}

export default App;
