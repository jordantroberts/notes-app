(function(exports) {
  function testNoteList() {
    var note = new NoteList();
    note.addItem("hello")
    note.addItem("bonjour")
    note.addItem("hola")
    if(note.getItem() !== ["hello", "bonjour", "hola"]) {
    throw new Error("No list");
    };
  };
  testNoteList();
})(this);
