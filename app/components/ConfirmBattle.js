var React = require('react');
var PropTypes = React.PropTypes;

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> CONFIRM BATTLE! </p>
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;
