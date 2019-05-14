function testNote() {
  var note = new Note("hello");
  assert.isTrue(note.text === "hello");
};
testNote()
