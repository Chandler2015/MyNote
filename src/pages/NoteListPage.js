import React, {useEffect,useState} from 'react'
import {
    useParams
  } from "react-router-dom";

const NoteListPage = ({match}) => {

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
        <div>
            <p>{note?.body}</p>
        </div>
    )
}

export default NoteListPage
