import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    postsById: {}
}

export const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload
        },
        setPostById: (state, action) => {
            state.postsById = action.payload
        }

    }
})

export const { setPost, setPostById } = postSlice.actions

export default postSlice.reducer