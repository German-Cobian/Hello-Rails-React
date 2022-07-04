import axios from 'axios';

const GET_GREETINGS = 'hello-rails-react/GET_GREETINGS'

const initialState = [];

export const fetchData = (dispatch) => {
  axios.get('http://localhost:3000/api/greetings')
  .then((response) => {
    dispatch(getGreetings(response.data));
  })
};

const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});


const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS: 
      return [...state, action.payload]
    default:
      return state
  }
}

export default greetingsReducer