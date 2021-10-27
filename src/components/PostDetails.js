import React from "react";


export default function Posts(props){
    
    return(
        <tr>
            <td>{props.post.id}</td>
            <td>{props.post.user.first_name}{props.post.user.last_name}</td>
            <td>{props.post.title}</td>
            <td>{props.post.body}</td>
            <td>{props.post.date_created}</td>
        </tr>
    )
}