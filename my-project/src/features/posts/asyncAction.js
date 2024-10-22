import { heroService } from "../../services/HeroServices"
import { setPost, setPostById } from "./postSlice"

export const usePostList = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/posts")

            if (response.data !== null) {
                dispatch(setPost(response?.data))
            }
        } catch (error) {
            throw error
        }
    }
}

export const usePostDetailList = (params) => {
    return async (dispatch) => {
        try {
            const response = await heroService.get(`/posts/${params}`)


            if (response.data !== null) {
                dispatch(setPostById(response?.data))
            }
        } catch (error) {
            throw error
        }
    }
}

export const useDeletePost = (params) => {
    return async (dispatch) => {
        try {
            await heroService.delete(`/posts/${params}`)
            dispatch(usePostList())
        } catch (error) {
            throw error
        }
    }
}

