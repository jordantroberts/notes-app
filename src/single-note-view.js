(function(exports) {
  function SingleNote(note) {
    this.note = note;
  };

  SingleNote.prototype.viewNote = function() {
    return `<div>${note.text}</div>`
  };

exports.SingleNote = SingleNote;
})(this);
