const { colors } = require('../../../constants/colors');

const title_to_label = (title) => {
  let label = '';
  const titleArr = title.split(' ');
  titleArr.forEach((element) => {
    if (
      element !== 'DE' &&
      element !== 'E' &&
      element !== 'PARA' &&
      //element !== 'COMPUTAÇÃO' &&
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
  constructor(id, title, level) {
    this.id = id;
    this.title = title;
    this.label = title_to_label(title);
    this.level = level;
    this.group = level;
    this.color = { background: colors[`network_node_${level}`] };
    this.prerequisites = [];
    this.corequisites = [];
  }

  addPrerequisite = (prerequisite) => {
    this.prerequisites.push(prerequisite);
  };
  addCorequisite = (corequisite) => {
    this.corequisites.push(corequisite);
  };
};
