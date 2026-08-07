import Typography from "@mui/material/Typography";

import { CommentsEmptyStateBox, CommentsEmptyStateIcon } from "./Comments.style";

export default function CommentsEmptyState() {
    return (
        <CommentsEmptyStateBox>
            <CommentsEmptyStateIcon aria-hidden="true" />

            <Typography variant="h6">No comments yet</Typography>

            <Typography variant="body2">Be the first to leave a comment!</Typography>
        </CommentsEmptyStateBox>
    );
}
