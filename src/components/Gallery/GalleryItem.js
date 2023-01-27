import React, {useState} from 'react'


export default function GalleryItem({data}) {
let [view, setView] =useState(false)
return (
    <div onClick={()=> setView(!view)}
    style ={{'display':'inline-block'}}>
        {/* <p>One Gallery Item</p>
        {props.map((item)=>{
            <li> {item.trackCensoredName} by {item.artistName}</li>
        })} */}
        {/* Data is props destructed */}
        {data.map((item)=>(
        <li>{item.trackCensoredName} by {item.artistName}</li>))}
    </div>)

}

