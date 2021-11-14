import React, {useEffect,useState} from 'react'
import {
    useParams, Link
  } from "react-router-dom";
// import right from '../assets/right.svg'

const NoteListPage = () => {

    //const is variable never be reassigned, let is something can be reassigned
    const {id} = useParams() 

    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    },[id]) 
    
    let getNote = async () =>{
        let response =  await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    } 
    
    return (
        <div className = "note">
            <div className = "note-header">
                <h3>
                    <Link to = "/">
                         <img src={require('../assets/leftarrow.svg').default} alt='leftarrow' />
                    </Link>
                </h3>
            
            </div>
            <textarea defaultValue={note?.body}></textarea>
        </div>
    )
}

export default NoteListPage
