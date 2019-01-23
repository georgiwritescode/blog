import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// without memoize, the app makes request for each post to get a user
// Network would make constant calls for the user data
// with memoize the app calls the "backend" only once per unique id
// and the makes a memo on the record, hense MEMOize
// https://lodash.com/docs/#memoize for documentation
const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
});

