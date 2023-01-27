import React, {useState} from 'react'


export default function GalleryItem(props) {
let [view, setView] =useState(false)
return (
    <div onClick={()=> setView(!view)}>
        <p>One Gallery Item</p>
        {props.map((item)=>{
            <li> {item.trackCensoredName} by {item.artistName}</li>
        })}
    </div>
  )
}

