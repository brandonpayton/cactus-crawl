var EmailPrompt = React.createClass({
  render: function () {
    return (
			<div id="emailPromt">
				<h2>What's your email?</h2>
				<input id="emailInput" type="email"/>
				<input id="emailSubmit" type="submit" value="Submit email"/>
			</div>
		);
  }
});
