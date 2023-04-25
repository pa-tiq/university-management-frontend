module.exports = class Annotation {
  constructor(id, note) {
    this.type = 'circle';
    this.match = { id: id };
    this.note = note;
    this.noteX = 30;
    this.noteY = 0;
    this.offset = 0;
    this.noteTextOffset = 4;
  }
};
