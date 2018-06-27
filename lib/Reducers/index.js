import {combineReducers} from 'redux';
import errors from './errors';
import inputForm from './inputForm';
import app from './app';

export default combineReducers({
  errors: errors,
  inputForm: inputForm,
  app: app
});
