(function(exports) {
  function NoteView(notelist) {
    this.notelist = notelist;
  };

  var html = ""
  NoteView.prototype.display = function(notelist) {
    this.notelist.list.map(function(note) {
      html += `<li><div><a href="${note.id}">${note.text.substring(0,20)}</a></div></li>`
    });
    return `<h2><ul>${html}</ul></h2>`
  };

exports.NoteView = NoteView;
})(this);
