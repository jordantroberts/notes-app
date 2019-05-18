(function(exports) {
  function Note(text){
    this.text = text;
    this.id = 0
  };

  Note.prototype.getText = function() {
    return this.text;
  };

  Note.prototype.getID = function() {
    return this.id;
  };
  exports.Note = Note;
})(this);
