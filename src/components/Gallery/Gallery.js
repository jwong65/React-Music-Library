import React from 'react'
import GalleryItem  from './GalleryItem'

export default function Gallery({data}) {
  //{data} instead of props
    
  return (
    <div>
      <GalleryItem data={data}/>
    </div>
  )
}
