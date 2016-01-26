var React = require('react');
var DOM = React.DOM, script = DOM.script;

var DefaultLayout = React.createClass({
  render: function() {
      var myScript = script({dangerouslySetInnerHTML: {__html:
        'var APP_PROPS = {items:' + safeStringify(this.props.items) + '};'
      }});
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
        </head>
        <body>
        {this.props.children}
        {myScript}
        {script({src: '//fb.me/react-0.14.6.min.js'})}
        {script({src: '//fb.me/react-dom-0.14.6.min.js'})}
        {script({src: '/bundle.js'})}
        </body>
      </html>
    );
  }
});

function safeStringify(obj) {
    return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = DefaultLayout;
