(function(exports) {
  function NoteView(notelist) {
    this.notelist = notelist;
  };

NoteView.prototype.display = function() {
 var array = this.notelist.list.map(note => note.text).join("</div></li><li><div>")
 var html = "<ul><li><div>" + array + "</div></li></ul>"
 return html
};

exports.NoteView = NoteView;
})(this);
