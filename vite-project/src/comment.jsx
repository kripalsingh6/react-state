import { useState } from "react";
import "./comment.css";
import CommentForm from "./commentForm";

export default function Comment(){

    let [comments, setComments] = useState([
        {
            username: "@sk",
            remarks: "great job",
            rating: 5
        }
    ]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
    };

    return(
        <div>
            <h3>All Comments</h3>

            {comments.map((comment, idx)=>(
                <div className="comment" key={idx}>
                    <span> remarks: {comment.remarks}</span>
                    &nbsp;&nbsp;&nbsp;
                    <span>(ratings:{comment.rating})</span>
                    <p>{comment.username}</p>
                </div>
            ))}

            <hr />
            <CommentForm addNewComment={addNewComment} />
        </div>
    );
}