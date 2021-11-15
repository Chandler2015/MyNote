import React, {useEffect,useState} from 'react'
import {
    useParams,useNavigate
  } from "react-router-dom";


const NoteListPage = () => {

    //const is variable never be reassigned, let is something can be reassigned
    const {id} = useParams() 

    let navigate = useNavigate()

    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    },[id]) 
    
    let getNote = async () =>{
        if (id === 'new') return 
        let response =  await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    } 

    let updateNote = async () =>{
        fetch(`/api/notes/${id}/update/`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        }
        )
    } 


    let deleteNote = async () =>{
        fetch(`/api/notes/${id}/delete/`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },      
        })
        navigate("/")
    } 

    let createNote = async () =>{
        fetch(`/api/notes/create/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },      
            body:JSON.stringify(note)
        })
       
    } 




    let handdleSubmit =  () => {
        if (id !== 'new' && note.body == '') {deleteNote()}
        else if(id !== 'new') {updateNote()}
        else if (id === 'new' && note != null) {createNote()}
        navigate("/")
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
       
    }

    
    return (
        <div className = "note">
            <div className = "note-header">
                 <h3 className = "arrow">
                   
                         <img  onClick = {handdleSubmit}  style={{ color: 'yellow',backgroundColor: '#f68657' , fill:'#f68657' }} src={require('../assets/leftarrow.svg').default} alt='leftarrow' />
                        
                </h3>
                {id  !== 'new'? (
                    <button onClick = {deleteNote}>Delete</button>
                ): (
                    <button onClick = {handdleSubmit}>Done</button>    
                )
            }
                
            
            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NoteListPage
