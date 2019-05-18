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

    var html = ""
    NoteViewDouble.prototype.display = function() {
      this.notelist.list.map(function(note) {
        html += `<li><div><a href="${note.getID()}">${note.text.substring(0,20)}</a></div></li>`
      });
      return `<ul>${html}</ul>`
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
