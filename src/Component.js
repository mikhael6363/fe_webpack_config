class Component {
  constructor(props) {
    this.props = props;
  }
  render(what, where) {
    return document.createElement(what);
  }
}

module.exports = Component;