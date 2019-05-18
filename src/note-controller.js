function changeGreeting(greeting) {
  var element = document.getElementById("app");
  greeting = " "
  element.innerHTML = greeting
}

function NoteController(notelist, noteview) {
    this.notelist = notelist;
    this.noteview = noteview;
};

NoteController.prototype.updateDOM = function(){
  return document.getElementById('app').innerHTML = this.noteview.display()
};
