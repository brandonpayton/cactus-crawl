var EmailPrompt = React.createClass({
  submit: function () {
    var emailInput = React.findDOMNode(this.refs.emailAddress);
    this.props.submit(emailInput.value);
  },

  render: function () {
    return (
      <div id="emailPromt">
        <h2>What's your email?</h2>
        <input id="emailInput" type="email" ref="emailAddress" />
        <input id="emailSubmit" type="button" value="Submit email" onClick={this.submit} />
      </div>
    );
  }
});
