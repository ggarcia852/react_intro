import React, { useState, useEffect } from 'react'
import Posts from '../components/PostDetails';




export default function UserPosts() { 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            
    })

        return (
        <div>
            <h1>User Posts: </h1>
            {posts.length ? (
                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <td>Post Id </td>
                            <td>User </td>
                            <td>Title </td>
                            <td>Content </td>
                            <td>Date Created </td>
                        </tr>
                    </thead>    
                    <tbody>
                        {posts.map((p, i) => <Posts key={i} post={p} /> )}
                    </tbody>
                </table>
            ): null}
        </div>
    )
}        