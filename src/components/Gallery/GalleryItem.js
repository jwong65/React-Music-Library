import React, {useState} from 'react'

// Importing UUID package
import { v4 as uuidv4 } from 'uuid'

export default function GalleryItem(props) {
let [view, setView] =useState(false)
const multipleSearches ={
    'width': '30vw',
    'border': '1em solid black',
    'text-align': 'center'

}
const detailedStyle ={
    'width': '100vw',
    'height': '25vh',
    'border': '1px solid black',
    'text-align': 'center'
}
const simpleView = () => {
    return (
        <div style = {multipleSearches}>
            <h3>{props.item.trackName}</h3>
            <h4>{props.item.collectionName}</h4>
        </div>
    )
}

const detailView = () => {
    return (
        <div style={detailedStyle}>
            <h2>{props.item.trackName}</h2>
            <h3>{props.item.collectionName}</h3>
            <h4>{props.item.primaryGenreName}</h4>
            <h4>{props.item.releaseDate}</h4>
        </div>
    )
}
return (


    <div onClick={() =>setView(!view)} style={{'display': 'inline-block'}}>
        {view ? detailView() : simpleView()}
    </div>    
        
)

}

