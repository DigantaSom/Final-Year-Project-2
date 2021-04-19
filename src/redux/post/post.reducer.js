import PostActionTypes from './post.types';

const INITIAL_STATE = {
  post: null,
  posts: [],
  loading: false,
  error: ''
};

const postReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case PostActionTypes.FETCH_POSTS_START:
    case PostActionTypes.CREATE_POST_START:
      return {
        ...state,
        loading: true
      };

    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
        error: ''
      };

    case PostActionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
        error: ''
      };

    case PostActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
        loading: false,
        error: ''
      };

    case PostActionTypes.CREATE_POST_FAILURE:
    case PostActionTypes.DELETE_POST_FAILURE:
      return {
        ...state,
        post: null,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default postReducer;
