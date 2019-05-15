// Tests to Write

// 1. A note controller can be instantiated.

// 2. The innerHTML property of the app element contains HTML somewhat similar to: <ul><li><div>Favourite food: pesto</div></li></ul>.
// (You'll need to mock some stuff to achieve this.)

(function(exports){
  function testNoteControllerCanBeInstantiated(){
    var notelist = new Notelist()
    var controller = new NoteController(notelist)

    if (!controller instanceof NoteController){
      throw new Error("Controller not instantiated properly")
    }
  }
  testNoteControllerCanBeInstantiated()
})(this);
