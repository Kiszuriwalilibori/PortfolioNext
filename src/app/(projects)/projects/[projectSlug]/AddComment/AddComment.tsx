// import Button from "@mui/material/Button";

// import { useCallback } from "react";
// import { useSpeechRecognition } from "react-speech-kit";

// import Modal from "../../../../modal";
// import addComments from "fbase/firestore/addComments";

// import { ModalProps, CommentType } from "types";
// import { ButtonsStack, CommentTextField, MicrophoneButton, listeningMicrophoneSx } from "./AddComment.style";
// import { useComment, useMessage, useVoice } from "hooks";
// import { Icons } from "components/common";
// import { processComment } from "./utils";

// interface Props extends Omit<ModalProps, "title"> {
//     author: string;
//     project: string;
//     authorEmail: string;
//     ID: string;
// }

// const INITIAL_COMMENT = "" as string;
// export const AddComment = (props: Props) => {
//     const { isOpen, onClose, author, authorEmail, project, ID } = props;
//     const { comment, createComment, clearComment } = useComment();
//     const { handleClickMicrophone, isMicrophoneDisabled, listening } = useVoice(createComment);
//     const showMessage = useMessage();

//     const handleError = useCallback((message: string) => {
//         showMessage.error("Error: " + message);
//     }, []);

//     const handleSuccess = useCallback((message: string) => {}, []);

//     const handleInvalidComment = () => {
//         showMessage.warning("Your comment is invalid and will be not published  due to toxic or abusive content");
//     };

//     const sendComment = useCallback(async () => {
//         const commentToBeStored: CommentType = {
//             author,
//             active: true,
//             content: comment,
//             created: Date.now(),
//             authorEmail,
//             ID: "",
//             project,
//             projectID: ID,
//         };
//         addComments(commentToBeStored, handleSuccess, handleError);
//         clearComment();
//         onClose();
//     }, [comment]);

//     return (
//         <Modal
//             title="Comment"
//             subtitle="Type your comments in form below:"
//             isOpen={isOpen}
//             onClose={onClose}
//             content={
//                 <CommentTextField
//                     id="Comment text field"
//                     label="Comment"
//                     multiline
//                     rows={8}
//                     value={comment}
//                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                         createComment(event.target.value);
//                     }}
//                 />
//             }
//             actions={
//                 <ButtonsStack direction="row" spacing={2} id="Buttons stack">
//                     <Button
//                         disabled={comment === INITIAL_COMMENT}
//                         color="success"
//                         variant="contained"
//                         onClick={() => processComment(comment, sendComment, handleInvalidComment)}
//                         id="Log in button"
//                     >
//                         Accept
//                     </Button>
//                     <Button
//                         disabled={comment === INITIAL_COMMENT}
//                         variant="contained"
//                         color="warning"
//                         onClick={clearComment}
//                         id="Log out button"
//                     >
//                         Clear
//                     </Button>
//                     <MicrophoneButton
//                         sx={{ ...listeningMicrophoneSx(listening) }}
//                         className="with-tooltip"
//                         data-tooltip={"Switch microphone"}
//                         aria-label="Search by voice"
//                         disabled={isMicrophoneDisabled}
//                         onClick={handleClickMicrophone}
//                     >
//                         {Icons.microphone}
//                     </MicrophoneButton>
//                 </ButtonsStack>
//             }
//         ></Modal>
//     );
// };

// export default AddComment;
export default {};
