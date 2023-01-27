import React from 'react'
import GalleryItem  from './GalleryItem'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

export default function Gallery() {
  //{data} instead of props refactored so Gallery doesn't take props 
    
  return (
    <div>
      <GalleryItem data={data}/>
    </div>
  )
}
