// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { usePostList } from "./features/posts/asyncAction"
// import { Link } from "react-router-dom"

// export default function App() {
//   const dispatch = useDispatch()
//   const postsData = useSelector((state) => state.posts.posts)

//   useEffect(() => {
//     const getDataPosts = async () => {
//       try {
//         await dispatch(usePostList())
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     getDataPosts()
//   }, [])


//   return (
//     <div className="min-h-screen bg-gray-200 max-w-full w-full py-10">
//       <div className="w-full max-w-7xl mx-auto">

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full max-w-full gap-6">
//           {postsData?.slice(0, 20).map((item) => (
//             <>
//               <Link to={`/detail/${item?.id}`} className="max-w-full w-full flex flex-col border bg-white rounded shadow p-6 cursor-pointer">
//                 <div>
//                   <p className="text-green-600">{item?.title}</p>
//                   <p className="text-black text-xs">{item?.body}</p>
//                 </div>
//                 <div>
//                   <button className="flex w-12 bg-red-500 rounded text-white text-xs justify-center items-center hover:bg-red-700 transition-all">
//                     Delete
//                   </button>
//                 </div>
//               </Link>
//             </>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }