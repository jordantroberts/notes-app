(function(exports) {
  function NoteList() {
    this.list = [ ];
  };


NoteList.prototype.addNote = function(text) {
  return this.list.push(new Note(text))
}

NoteList.prototype.getNotes = function() {
  return this.list;
}
  exports.NoteList = NoteList;
})(this);
