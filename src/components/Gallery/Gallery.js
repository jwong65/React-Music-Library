import React from 'react'
import GalleryItem  from './GalleryItem'

export default function Gallery(props) {
  //{data} instead of props
  const display = props.data.map((item, index)=>{
    return(
      <GalleryItem  item={item} key={index}/>
    )
  })
    
  return (
    <>
      {display}
    </>
  )
}
