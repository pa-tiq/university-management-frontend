const { colors } = require('../../../constants/colors');

export default class Node {
  constructor(id, height, size, level) {
    this.id = id;
    this.height = height;
    this.size = size;
    this.color = colors[`network_node_${level}`];
  }
}
