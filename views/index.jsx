var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DefaultLayout = require('./layouts/default');
var moment = require('moment');
var Button = require('./components/global').Button;

var HelloMessage = React.createClass({
    render: function() {
        var buttonLabel = "I'm a button";
        var b = React.createFactory(require('./components/button'));
        return (
            <DefaultLayout title={this.props.title} items={this.props.items}>
                <div>
                    <p>Hello {this.props.title}</p>
                    <Button label={buttonLabel}></Button>
                    <Button label="I'm another button" classNames="selected yellow"></Button>
                    <div id="content">
                    {b(this.props)}
                    </div>
                </div>
            </DefaultLayout>
        );
    }
});

module.exports = HelloMessage;
