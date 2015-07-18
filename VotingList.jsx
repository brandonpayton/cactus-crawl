var VotingList = React.createClass({
  getInitialState: function () {
    return {
      pubList: [],
      emailAddress: "",
      addVote: this.addVote
    };
  },

  componentWillMount: function () {
    var self = this;
    $.get("stub/pubList.json").then(function (pubList) {
      self.setState({ pubList: pubList });
    });
  },

  render: function () {
    var state = this.state;
    var pubList = state.pubList;
    var pubs = pubList.map(function(pub) {
      return (
        <PubListing name={pub.name} description={pub.description} />
      )
    })
    if (this.state.emailAddress) {
      return (
        <div id="votingList">
          <h1>Pubs to vote on</h1>
          {pubs}
        </div>
      );
    }
    else {
      return (
        <EmailPrompt submit={this.saveEmailAddress}/>
      );
    }
  },

  addVote: function (pubId) {
    console.log("Add vote for " + pubId + " from " + this.emailAddress);
  },

  saveEmailAddress: function (emailAddress) {
    this.setState({ emailAddress: emailAddress });
  }
});

var PubListing = React.createClass({
  render: function () {
    return (
      <div className="pubListing">
        <h3 className="pubListingName">
          {this.props.name}
        </h3>
        <p className="pubDescription">
          {this.props.description}
        </p>
        <input type="submit" className="pubVote" value="Vote" />
      </div>
    )
  }
});
