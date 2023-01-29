import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function ArtistView() {
    const [artistData, setArtistData] = useState([])
    const id = useParams()
  return (
    <div>
        <p>Artist passed was {id}</p>
    </div>
  )
}
