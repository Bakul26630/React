import React, { useState } from "react";
import './App.css';
import logo from './Images/b-logo.png';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddButton from './AddIcon'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteButton from "./DeleteIcon";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const App = () => {
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [note, setNote] = useState({ Title: "", Note: "" });
  const [notes, setNotes] = useState([]);
  const year = new Date().getFullYear();
  const Delete = (index) => {
    setNotes(notes.filter((val, note_index) => {
      return index !== note_index
    }))
  }

  const setTitle = (e) => {
    setNote(prev => {
      return ({
        Title: e.target.value,
        Note: prev.Note
      })
    })
  }
  const setContent = (e) => {
    setNote(prev => {
      return ({
        Title: prev.Title,
        Note: e.target.value
      })
    })
  }
  return (<>
    <nav class="navbar bg-body-tertiary ">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="/">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          Bakul-Keep
        </a>
      </div>
    </nav>
    <div className="container align-content-center note-container w-50 mt-5" onDoubleClick={() => { setDisplay1("none"); setDisplay2("none") }}>
      <input className="m-3" type="text" id="title" placeholder="Title" style={{ display: display1 }} onChange={setTitle} value={note.Title}></input>
      <textarea className="m-3" id="content" placeholder="Write a Note.." onClick={() => {
        setDisplay1("block")
        setDisplay2("flex")
      }} onChange={setContent} value={note.Note}></textarea>
      <div className="add" style={{ display: display2 }}>
        <AddButton onSelect={() => {
          setNotes(prev => {
            return [...prev, note]
          })
          setNote({ Title: "", Note: "" })
        }} />
      </div>
    </div>
    <div className="container mt-5 w-100">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {
            notes.map((val, index) => {
              return (
                <Grid item xs={3} className='notes' key={index}>
                  <Item>
                    <h3 className="note-head">{val.Title}</h3>
                    <p className="note-data">
                      {val.Note}
                    </p>
                    <div className="delete">
                      <DeleteButton
                        onSelect={() => {
                          Delete(index)
                        }}
                      />
                    </div>
                  </Item>
                </Grid>
              );
            })
          }
        </Grid>
      </Box>
    </div>
    <footer className="container text-center mt-5 mb-5" >copyright © {year}</footer>
  </>);
}

export default App