var VotingList = React.createClass({
  getInitialState: function () {
    return {
      pubList: []
    };
  },

  componentWillMount: function () {
    var self = this;
    $.get("stub/pubList.json").then(function (pubList) {
      self.setState(_.assign({}, { pubList: pubList }));
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
    return (
      <div id="votingList">
        <h1>Pubs to vote on</h1>
        {pubs}
      </div>
    );
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
