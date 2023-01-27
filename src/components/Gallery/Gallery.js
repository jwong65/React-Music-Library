import React from 'react'
import GalleryItem  from './GalleryItem'

export default function Gallery({data}) {
  return (
    <div>
      <GalleryItem  data={data}/>
    </div>
  )
}
