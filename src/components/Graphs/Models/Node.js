const { colors } = require('../../../constants/colors');

const title_to_label = (title) => {
  let label = '';
  const titleArr = title.split(' ');
  titleArr.forEach((element) => {
    if (
      element !== 'DE' &&
      element !== 'E' &&
      element !== 'PARA' &&
      element !== 'COMPUTAÇÃO' &&
      element !== 'ENG'
    ) {
      label += element[0];
    }
  });
  if (label.length === 1) {
    label += title[1] + title[2];
  }
  return label;
};

module.exports = class Node {
  constructor(id, title, label, level) {
    this.id = id;
    this.title = title;
    this.label = title_to_label(title);
    this.level = level;
    this.color = { background: colors[`network_node_${level}`] };
  }
};
