// (function(exports){
//   function testNote(){
//     var note = new Note("hello");
//
//     if (note.text !== "hello") {
//     throw new Error("No note")
//     };
//   };
//   testNote();
// })(this)

function testNote() {
  var note = new Note("hello");
  assert.isTrue(note.text === "hello");
};
testNote()
