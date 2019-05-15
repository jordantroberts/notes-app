  function testDisplay() {
    var notelist = new NoteList()
    notelist.addNote("hello")
    notelist.addNote("bonjour")
    var noteview = new NoteView(notelist);

    if(noteview.display()!== "<ul><li><div>hello</div></li><li><div>bonjour</div></li></ul>") {
      throw new Error("No notes");
    }
  };

  testDisplay();
