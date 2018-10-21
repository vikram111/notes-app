let logNote = (note) => {
    console.log("Note");
    console.log("-------");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body} \n`);
};

module.exports = {logNote};