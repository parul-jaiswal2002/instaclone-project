import { useEffect, useState } from "react"
import { getuserposts } from "../utills/apiutils"
import Post from "./Post"


export default function Postview(){
    const[userposts,setUserposts] = useState([ {name:"Siva",
    location:"Bengaluru",
    likes:64,
    description: "Kick start your career",
    PostImage: "relative path from local",
    date: new Date(),
    },
    {name:"Neeraj",
    location:"Pune",
    likes:30,
    description: "Sample Description",
    PostImage: "relative path from local",
    date: new Date(),
    },
    {name:"Rahul",
    location:"Hyderabad",
    likes:30,
    description: "Sample Description for Post",
    PostImage: "relative path from local",
    date: new Date(),
    }])

    useEffect(() => {
       getuserposts()
       .then(data => {
        setUserposts(data) //to fetch data
       })
       .catch(err => {
          console.log(err.message)
       })
    }, [])
    return (
       <div id="posts-container">
        {
            userposts.map(post => <Post key={post.id} post={post}/>)
        }
       </div>
    )
}