import React from 'react';
import One from './One.js'
import Two from './Two'
import Three from './Three'

var PanelHolder = React.createClass({
  render: function() {
    return (
      <div>
        <One />
        <Two />
        <Three />
      </div>
    )
  }
});

export default PanelHolder;