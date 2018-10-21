const fs = require('fs');

const getNotes = () => {
    try{
    return JSON.parse(fs.readFileSync('notes.json'));
    }catch(err){
     console.log("There was an error while reading the notes");
     return [];
    }
}

const saveNote = (note) => {
    fs.writeFileSync('notes.json',JSON.stringify(note));
}

const addNote = (title,body) =>{
    var notes = [];
    let inputNote = {
        title,body
    };

    var historicalNotes = getNotes();
    let duplicateNotes = historicalNotes.filter((input) => input.title === title);
    if(duplicateNotes.length > 0){
        return "A note with a similar title already exists";
    }else{
        historicalNotes.push(inputNote);
        saveNote(historicalNotes);
        return inputNote;
    }
}

const removeNote = (title) => {
    let historicalNotes = getNotes();
    let filterFunc = (input) => input.title !== title;
    let remainingNotes = historicalNotes.filter(filterFunc);
    console.log("The notes after removal are -> ", remainingNotes);
    saveNote(remainingNotes);
}

const getOneNote = (title) => {
    var historicalNotes = getNotes();
    let requestedNote =  historicalNotes.filter((note) => note.title === title);
    return requestedNote;
}
const getAll = () => {
    return getNotes();
}

module.exports = {
    addNote,
    removeNote,
    getOneNote,
    getAll
};