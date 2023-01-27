import React, {useState} from 'react'


export default function GalleryItem(props) {
let [view, setView] =useState(false)
const musicView = () =>{
    return(
        <div>
            <h3>{props.item.trackCensoredName} by {props.item.artistName}</h3>

        </div>
    )
}
return (
    <div onClick={()=> setView(!view)}>
        {/* <p>One Gallery Item</p>
        {props.map((item)=>{
            <li> {item.trackCensoredName} by {item.artistName}</li>
        })} */}
        ItemOne
    </div>
  )
}

