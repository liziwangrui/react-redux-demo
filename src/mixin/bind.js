import {bindActionCreators} from 'redux';
import actions from '../action/root_action';

const mapStateToProps = (state) => ({
  number: state.number,
  practice: state.practice
});

const mapDispatchToProps = (dispatch) => ({
  numberActions: bindActionCreators(actions.number, dispatch),
  practiceActions: bindActionCreators(actions.practice, dispatch)
});

module.exports = {
  mapStateToProps,
  mapDispatchToProps
};