import * as React from "react";
import moment from "moment";
import Accordion from "@mui/material/Accordion";

import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CommentType } from "types";
import { Avatar } from "@mui/material";
import { Author, Summary, SummaryStack, When } from "./styled";
import { grey } from "@mui/material/colors";

interface Props {
    comment: CommentType;
}
export const CommentComponent = (props: Props) => {
    const { comment } = props;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };
    return (
        <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            sx={{
                "& .MuiAccordion-region": { height: expanded ? "auto" : 0, backgroundColor: grey[200] },
                "& .MuiAccordionDetails-root": { display: expanded ? "block" : "none" },
                "& .MuiAccordionSummary-root": {
                    backgroundColor: grey[200],
                },
            }}
        >
            <Summary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                <SummaryStack spacing={1} direction="row">
                    <Avatar id="Avatar" alt={comment.author} src={comment.authorImage} />
                    <Author id="Author">{comment.author}</Author>
                    <When id="When">{moment(comment.created).fromNow()}</When>
                </SummaryStack>
            </Summary>
            <AccordionDetails>
                <Typography>{comment.content}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CommentComponent;
