(function(exports){
    function testDisplay(){

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

      var notelist = new NoteList()
      notelist.addNote("hello")
      notelist.addNote("bonjour")
      var noteview = new NoteViewDouble(notelist);

      if(noteview.display()!== "<ul><li><div>hello</div></li><li><div>bonjour</div></li></ul>") {
        throw new Error("No notes");
      } // fix test to include ID

      notelist.addNote("abcdefghijklmnopqrstuvwxyz")

      if(noteview.display() == "<ul><li><div>hello</div></li><li><div>bonjour</div></li><li><div>abcdefghijklmnopqrstuvwxyz</div></li></ul>") {
        throw new Error("Should only display first 20 characters of the note!")
      }
    };
  testDisplay()
  })(this);
