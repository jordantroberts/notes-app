(function(exports){
  function testNoteControllerCanBeInstantiated(){
    var notelist = new NoteList()
    var controller = new NoteController(notelist)

    if (!controller instanceof NoteController){
      throw new Error("Controller not instantiated properly")
    }
  }
  testNoteControllerCanBeInstantiated()
})(this);


(function(exports){
  function testInnerHTML(){

    function NoteViewDouble(notelist) {
      this.notelist = notelist;
    }

    NoteViewDouble.prototype.display = function() {
      var array = this.notelist.list.map(note => note.text).join("</div></li><li><div>")
      var html = "<ul><li><div>" + array + "</div></li></ul>"
      return html
    };

    function NoteControllerDouble(notelist, noteview) {
      this.notelist = notelist;
      this.noteview = noteview;
    };

    NoteControllerDouble.prototype.updateDOM = function() {
      return document.getElementById('app').innerHTML = this.noteview.display()
    };

    var notelist = new NoteList()
    notelist.addNote('test')
    var noteview = new NoteViewDouble(notelist)
    var controller = new NoteControllerDouble(notelist, noteview)

    if (controller.updateDOM() !== "<ul><li><div>test</div></li></ul>") {
      throw new Error("HTML does not match the list!")
    }
  }
testInnerHTML()
})(this);

// mocking the controller because otherwise you'd actually be updating the view which we don't want
