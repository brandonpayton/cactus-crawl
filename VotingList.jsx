var VotingList = React.createClass({
  getInitialState: function () {
    return {
      pubList: [],
      emailAddress: ""
    };
  },

  componentWillMount: function () {
    var self = this;
    $.getJSON(
      'http://myoblique.com/cactushack/getPubs.php'
    ).then(function (pubList) {
      self.setState({ pubList: pubList });
    });
  },

  render: function () {
    var state = this.state;
    var pubList = state.pubList;
    var pubs = pubList.map(function(pub) {
      return (
        <PubListing data={pub}  addVote={this.addVote} />
      )
    }, this);
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
    return $.get('http://myoblique.com/cactushack/submitVote.php', {
      email: this.state.emailAddress,
      vote: pubId
    }).then(function () {
      console.log("great success");
    }, function (error) {
      console.error("catastrophic failure", error)
    });
  },

  saveEmailAddress: function (emailAddress) {
    console.log("Email address", emailAddress);
    this.setState({ emailAddress: emailAddress });
  }
});

var PubListing = React.createClass({
  vote: function () {
    var voteButtonNode = React.findDOMNode(this.refs.voteButton);
    voteButtonNode.disabled = true;
    this.props.addVote(this.props.data.id).then(function () {
      // Do nothing
    }, function () {
      voteButtonNode.disabled = false;
    });
  },

  render: function () {
    return (
      <div className="pubListing">
        <h3 className="pubListingName">
          {this.props.data.name}
        </h3>
        <img className="pubImg" src={"images/" + this.props.data.fileName} />
        <br/>
        <a className="pubLink" href={this.props.data.website}>Website</a>
        <p className="pubDescription">
          {this.props.data.description}
        </p>
        <input ref="voteButton" type="button" className="pubVote" value="Vote" onClick={this.vote} />
      </div>
    )
  }
});
