// import uuid from "react-uuid";

// import Comment from "../Comment";

// import { useMessage, useSubscribeComments } from "hooks";
// import { CommentsStack } from "./Comments.style";

// interface Props {
//     ID: string;
// }

// export function Comments(props: Props) {
//     const { ID } = props;
//     const { comments, error } = useSubscribeComments(ID);
//     const showMessage = useMessage();

//     if (error) {
//         showMessage.error(error.message || JSON.stringify(error));
//     }

//     if (!comments || !comments.length) return null;

//     return (
//         <>
//             <h2>Comments</h2>
//             <CommentsStack spacing={1}>
//                 {comments.map(comment => {
//                     return <Comment comment={comment as any} key={uuid()} />;
//                 })}
//             </CommentsStack>
//         </>
//     );
// }

// export default Comments;
export default {};
