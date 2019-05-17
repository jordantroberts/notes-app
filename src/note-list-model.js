(function(exports) {
  function NoteList() {
    this.list = [ ];
  };

NoteList.prototype.setID = function(note) {
  note.id = this.list.indexOf(note)
}

NoteList.prototype.addNote = function(text) {
  note = new Note(text)
  this.list.push(note)
  this.setID(note)
}

NoteList.prototype.getNotes = function() {
  return this.list;
}

  exports.NoteList = NoteList;
})(this);
