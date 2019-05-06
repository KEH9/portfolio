/* eslint-disable import/no-duplicates */
import { connect } from 'react-redux';
import { decreaseDifficultyLevel } from '../../actions/actionCeator';
import { setRabbitsToWin } from '../../actions/actionCeator';
import { newbie, veteran, ace } from '../../constants/difficultyLevels';


export default function decreaseDifficultyLevelfunction(props) {
  console.log('blahblah');
  props.decreaseDifficultyLevel();
  if (props.difficultyLevel === newbie) {
    props.setRabbitsToWin(65);
  } else if (props.difficultyLevel === veteran) {
    props.setRabbitsToWin(100);
  } else if (props.difficultyLevel === ace) {
    props.setRabbitsToWin(120);
  }
}

const mapStateToProps = state => ({
  difficultyLevel: state.difficultyLevel,
});

const mapDispatchToProps = dispatch => ({
  setRabbitsToWin: (rabbitsToWin) => { dispatch(setRabbitsToWin(rabbitsToWin)); },
  decreaseDifficultyLevel: () => { dispatch(decreaseDifficultyLevel()); },
});

connect(
  mapStateToProps,
  mapDispatchToProps,
)(decreaseDifficultyLevelfunction);
