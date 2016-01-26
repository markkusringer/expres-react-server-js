var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
      console.log(this.props.items);
      console.log(JSON.stringify(this.props.items));
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
        </head>
        <body>
        {this.props.children}
        {React.createElement('script', {type: 'text/javascript'}, 'var APP_PROPS = ' + this.props.items + ';')}
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
