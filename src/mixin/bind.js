import {bindActionCreators} from 'redux';
import actions from '../action/root_action';

const mapStateToProps = (state) => ({
  number: state.number
});

const mapDispatchToProps = (dispatch) => ({
  numberActions: bindActionCreators(actions.number, dispatch)
});

module.exports = {
  mapStateToProps,
  mapDispatchToProps
};