(function(exports) {
  function NoteView(notelist) {
    this.notelist = notelist;
  };


  NoteView.prototype.display = function() {
   var array = this.notelist.list.map(note => note.text)
   var substring = array.map(note => note.substring(0,20)).join("</div></li><li><div>")
   var html = "<ul><li><div>" + substring + "</div></li></ul>"
   return html
  };

exports.NoteView = NoteView;
})(this);
