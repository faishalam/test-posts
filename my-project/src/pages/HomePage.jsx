import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDeletePost, usePostList } from "../features/posts/asyncAction"
import LoadingComponents from "../components/LoadingComponent"

export default function HomePage() {
    const dispatch = useDispatch()
    const postsData = useSelector((state) => state.posts.posts)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getDataPosts = async () => {
            try {
                await dispatch(usePostList())
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        getDataPosts()
    }, [])

    const handleDeletePosts = (id) => {
        dispatch(useDeletePost(id))
    }

    return (

        <>
            <div className="min-h-screen bg-gray-200 max-w-full w-full py-10">
                {isLoading ? (
                    <LoadingComponents />
                ) : (
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="px-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full max-w-full gap-6">
                            {postsData?.map((item, i) => (
                                <>
                                    <div className="max-w-full w-full flex flex-col justify-between gap-10 border bg-white rounded-md shadow p-6 cursor-pointer" key={i}>
                                        <Link to={`/detail/${item?.id}`}>
                                            <p className="text-green-600">{item?.title}</p>
                                            <p className="text-black text-xs">{item?.body}</p>
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => handleDeletePosts(item?.id)}
                                            className="flex p-2 bg-red-500 rounded text-white text-xs justify-center items-center hover:bg-red-700 transition-all">
                                            Delete
                                        </button>
                                    </div>
                                </>
                            ))}
                        </div>

                    </div>
                )}
            </div>

        </>
    )
}