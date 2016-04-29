import React from 'react';
import PureRenderMixin from 'react-pure-render/mixin';

var RoundedToggle = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    active: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
  },
  render() {
    let { options, active } = this.props;
    return (<div className='rounded-toggle inline short'>
      {options.map(option =>
        <RoundedToggleOption
          key={option}
          option={option}
          onClick={this.props.onChange}
          className={`strong ${option === active ? 'active': ''}`} />)}
    </div>);
  }
});

var RoundedToggleOption = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    option: React.PropTypes.string.isRequired,
    className: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },
  onClick() {
    this.props.onClick(this.props.option);
  },
  render() {
    let { className, option } = this.props;
    return (<a
      onClick={this.onClick}
      className={className}>{option}</a>);
  }
});

module.exports = RoundedToggle;
