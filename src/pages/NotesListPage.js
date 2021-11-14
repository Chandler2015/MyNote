import React , {useEffect, useState} from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {
    //init the notes = [], use setNotes to update the notes 
    let [notes, setNotes] = useState([])

    //when first get to the state
    useEffect(() => {
        getNotes()
    }, []) 

    let getNotes = async () => {
        console.log("testing the react log")
        let response = await fetch('/api/notes/')
        let data = await response.json()
        
        setNotes(data)
    }

    return (
        <div>
           
            <div className = "notes-list">
                {notes.map((note, index) => (
                   <ListItem key = {index} note = {note} />
                ))
                }
            </div>
        </div>
    )
}

export default NotesListPage
