/*-----------------------------------------------------------------------------


@author:        Marc Pérez Castells
@contact:       marc.perez@whads.com
@organization:  Whads Accent SL
@since:         January 2016
-----------------------------------------------------------------------------*/

var React = require('react');
var classNames = require('classnames');

var Components = {
    Button: React.createClass({
        render: function() {
            var cssClastList = ["button"];
            var buttonStyle = {
                color: '#333'
            };
            if( this.props.classNames )
                cssClastList.push(this.props.classNames);
            var btnClass = classNames(cssClastList);
            return <button style={buttonStyle} className={btnClass}>{this.props.label}</button>;
        }
    }),
    Label: React.createClass({
        render: function() {
            return <label htmlFor={this.props.labelFor}>{this.props.name}</label>;
        }
    })
}

module.exports = Components;
