function changeGreeting(greeting) {
  var element = document.getElementById("app");
  greeting = "howdy"
  element.innerHTML = greeting
}

function NoteController(notelist, noteview) {
    this.notelist = notelist;
    this.noteview = noteview
};

NoteController.prototype.updateDOM = function(){
  document.getElementById('app').innerHTML = this.noteview.display()
}; // fix this
