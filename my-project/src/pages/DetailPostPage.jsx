import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { usePostDetailList } from "../features/posts/asyncAction"
import LoadingComponents from "../components/LoadingComponent"

export default function DetailPostPage() {
    const postsDataById = useSelector((state) => state.posts.postsById)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        const getDataById = async () => {
            try {
                await dispatch(usePostDetailList(id))
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            } finally {
                setIsLoading(false)
            }
        }
        getDataById()
    }, [id])

    return (
        <>
            <div className="min-h-screen bg-gray-200 max-w-full w-full py-10">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="max-w-full w-full px-5">
                        <div className="max-w-full w-fullflex flex-col gap-10 border bg-white rounded shadow p-6 cursor-pointer">
                            {isLoading ? (
                                <LoadingComponents />
                            ) : (
                                <>
                                    <div>
                                        <p className="text-green-600">{postsDataById?.title}</p>
                                        <p className="text-black text-xs">{postsDataById?.body}</p>
                                    </div>

                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}