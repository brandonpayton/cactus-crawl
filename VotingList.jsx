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
    return (<h1>Pub List {pubList.length}</h1>);
  }
});
