(function(exports) {
  function NoteView(notelist) {
    this.notelist = notelist;
  };

  var html = ""
  NoteView.prototype.display = function() {
    this.notelist.list.map(function(note) {
      html += `<li><div><a href="${note.getID()}">${note.text.substring(0,20)}</a></div></li>`
    });
    return `<ul>${html}</ul>`
  };



 // NoteListView.prototype.render = function() {
 //   return [
 //     "<form>",
 //       "<input id='text'></input>",
 //       "<input type='submit'></input>",
 //     "</form>",
 //     `${this.htmlString}`
 //   ].join("")
 // };

exports.NoteView = NoteView;
})(this);
