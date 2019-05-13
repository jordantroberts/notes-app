(function(exports) {
  function testAddItem() {
    var note = new NoteList();
    note.addItem("hello")
    note.addItem("bonjour")

    if(note.list.join() !== "hello,bonjour") {
      throw new Error("Note not added");
      } else {
      console.log("Note added successfully")
    };
  };
  testAddItem();
})(this);
