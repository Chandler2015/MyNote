import React , {useEffect, useState} from 'react'

const NotesListPage = () => {
    //init the notes = [], use setNotes to update the notes 
    let [notes, setNotes] = useState([])

    //when first get to the state
    useEffect(() => {
        getNotes()
    }, []) 

    let getNotes = async () => {
        console.log("testing the react log")
        let response = await fetch('http://127.0.0.1:8000/api/notes/')
        let data = await response.json()
        
        setNotes(data)
    }

    return (
        <div>
           
            <div className = "notes-list">
                {notes.map((note, index) => (
                    <h3>{note.body}</h3>
                ))
                }
            </div>
        </div>
    )
}

export default NotesListPage
