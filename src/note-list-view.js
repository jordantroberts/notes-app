(function(exports) {
  function NoteView(notelist) {
    this.notelist = notelist;
  };

  var html = ""
  NoteView.prototype.display = function() {
    this.notelist.list.map(function(note) {
      html += `<li><div><a href="${window.location.href}#notes/${note.getID()}">${note.text.substring(0,20)}</a></div></li>`
    });
    return `<ul>${html}</ul>`
  };

exports.NoteView = NoteView;
})(this);
