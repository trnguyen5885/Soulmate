import { createContext, useReducer, useState } from "react";
import { POSTS } from '../data/dummy-data'


export const PostContext = createContext({
    posts: [],
    addPost: ({id, name, avatar, status , date, image , like}) => {},
    deletePost: (id) => {}
})

function postReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            return [action.payload, ...state];
        case 'DELETE':
            return state.filter((post) => post.id != action.payload)
        default:
            return state
    }
}



function PostContextProvider({children}) {

   const [postsState, dispatch] = useReducer(postReducer, POSTS);

   function addPost(postData) {
        dispatch({type: 'ADD', payload: postData})
   }

   function deletePost(id) {
    dispatch({type: 'DELETE', payload: id})
   }

   const value = {
    posts: postsState,
    addPost: addPost,
    deletePost: deletePost
   }
    

    return <PostContext.Provider value={value}>
            {children}
         </PostContext.Provider>
}

export default PostContextProvider;