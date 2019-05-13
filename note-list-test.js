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


(function(exports) {
  function testGetItem() {
    var note = new NoteList();
    note.addItem("hello")
    note.addItem("bonjour")
    if(note.getItem() !== note.list) {
      throw new Error("Cannot find note");
    } else {
      console.log(note.getItem().join(', '))
    };
  };
  testGetItem();
})(this);
