import * as api from '../api';

// Create actions using action creators
// adding async (dispatch) func from redux-thunk to return the data, as it takes time for the payload to fetch the data.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(); // data in response
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}