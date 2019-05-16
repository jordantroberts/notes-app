(function(exports){
  function testSingleNote(){
    var note = new Note('text')
    var singlenote = new SingleNote(note)
    singlenote.viewNote()
    if (singlenote.viewNote() !== "<div>text</div>") {
      throw new Error("Can't find the particular note you're looking for")
    }
  }
  testSingleNote()
})(this);
