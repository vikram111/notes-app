const notes = require('./notes.js');
const utils = require('./utils.js')
const argv = require('yargs');
const titleOptions = {
    describe: "Title of the note",
    demand: true,
    alias: "t"
};
const bodyOptions = {
    describe: "Body of the note",
    demand: true,
    alias: "b"
};
let command = argv.
                command("add","Add a note",{
                    title: titleOptions,
                    body: bodyOptions
                })
                .command("list", "List all notes" )
                .command("remove", "Remove a note",{
                    title:titleOptions
                })
                .command("find", "Find a note",{
                    title:titleOptions
                }).
                help().
                argv.
                _[0];
let title = argv.argv.title;
let note = argv.argv.body;

switch(command){
    case "add":
        let newNote = notes.addNote(title,note);
        if(typeof newNote === "string"){
            console.log(newNote);
        }else{
            utils.logNote(newNote);
        }
    break;
    case "remove":
        notes.removeNote(title);
    break;
    case "find":
        let returnedNote = notes.getOneNote(title);
        if (returnedNote.length > 0){
            utils.logNote(returnedNote[0]);
        }else{
            console.log("The note with the requested title does not exist");
        }
    break;
    case "list":
        let allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(element => {
            utils.logNote(element);
        });
    break;
    default:
    console.log("The specified command does not exist");
    break;

}