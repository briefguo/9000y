import { combineReducers } from 'redux'
import { ADD_TODO, GET_NEWS, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './Action'
import $ from 'jquery'

var host = 'http://localhost';
var path = '/9000y/api/Phalapi/Public/';

const { SHOW_ALL } = VisibilityFilters

function query(callback) {
  $.ajax({
    url: host + path + '?service=' + "News.getAllInfo",
    cache: false,
    success: function(r) {
      callback(r.data.info);
    },
    error: function(xhr, status, err) {
      console.error(status, err.toString());
    }
  });
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case GET_NEWS:
      query((data) => {

      })
      console.log(state, action, state.map((todo, data) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      }));
      return [
        ...state, {
          text: action.text,
          completed: false
        }
      ]
    case ADD_TODO:
      return [
        ...state, {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
