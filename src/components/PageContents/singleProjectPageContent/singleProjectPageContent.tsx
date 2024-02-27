import React, { useCallback, useEffect, useId } from "react";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import uuid from "react-uuid";

import {
    ButtonsStack,
    CommentsStack,
    SingleProjectInformations,
    SingleProjectInformationsColumn,
    StackDivider,
} from "./styled";

import { ChipsContainer } from "../projectsPageContent/styled";
import { CommentType, Project, ProjectNav } from "types";
import { useBoolean, useMessage } from "hooks";
import CommentComponent from "./Comment";

import getComments from "fbase/firestore/getComments";

import { requestLogin } from "fbase/index";
import { useAuthContext } from "contexts";
import { CommentModal, Links, LoggedUser } from "./parts";
import { createProjectNav } from "./utils";
import { Features } from "./parts/Features";
import { ToNext } from "./parts/ToNext";
import ToPrevious from "./parts/ToPrevious";

interface Props {
    data: Project;
    comments: CommentType[];
    titles: string[];
}

function SingleProjectPageContent(props: Props) {
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const showMessage = useMessage();
    const { data, comments, titles } = props;

    const { projectNext, projectPrevious } = createProjectNav(data.title, titles);

    const { title, description, story, live, github, longDescription, features } = data;
    const ID = useId();

    const { user, isLogged } = useAuthContext();

    const handleSuccess = () => {};

    const handleError = useCallback((message: string) => {
        showMessage.error("Login attempt failure: " + message);
    }, []);

    // const xxx = getComments("comments");

    // useEffect(() => {
    //     if (aaa && (aaa as any).displayName) {
    //         const xxx = getComments("comments");
    //         console.log("xxx", xxx);
    //     }
    // }, [aaa]);

    const handleLeaveACommentClick = useCallback(() => {
        if (isLogged) {
            openModal();
        } else {
            requestLogin(handleSuccess, handleError);
        }
    }, [isLogged, handleError]);

    useEffect(() => {
        isLogged && user && process.env.NEXT_PUBLIC_ADMIN_DATA === user.name && openModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged, user]);

    useEffect(() => {
        closeModal();
    }, []);

    return (
        <>
            {projectNext && <ToNext target={projectNext} />}
            {projectPrevious && <ToPrevious target={projectPrevious} />}
            <header className={`top-section top-section--${title.toLowerCase().split(" ").join("-")}`}>
                <div className="project-screen"></div>
                <div className="project-container">
                    <div className="header">
                        <h1 className="header__title">{title}</h1>
                        <h2 className="header__subtitle">{description}</h2>
                    </div>
                </div>
            </header>
            {isLogged && user && isModalOpen && (
                <CommentModal
                    isOpen={isLogged}
                    onClose={closeModal}
                    author={user.name}
                    authorImage={user.picture}
                    project={title}
                />
            )}

            <SingleProjectInformations direction={{ md: "row" }} divider={<StackDivider />}>
                <SingleProjectInformationsColumn>
                    <Links github={github} live={live} />
                    {/* <ButtonsStack direction="column" spacing={2} id="Buttons stack">
                        <Button variant="contained" onClick={handleLeaveACommentClick} id="Log in button">
                            Leave a comment
                        </Button>
                    </ButtonsStack> */}
                    {/* <h2>Comments</h2>
                    <CommentsStack spacing={1}>
                        {comments.map(comment => {
                            return <CommentComponent comment={comment} key={uuid()} />;
                        })}
                    </CommentsStack> */}
                </SingleProjectInformationsColumn>
                <SingleProjectInformationsColumn>
                    <h2>Story</h2>
                    {story}
                </SingleProjectInformationsColumn>
                <SingleProjectInformationsColumn>
                    <h2>Tech</h2>
                    {longDescription &&
                        longDescription.map((item: string) => {
                            return <p key={`${ID}-${item}`}>{item}</p>;
                        })}
                    <Features features={features} />
                </SingleProjectInformationsColumn>
            </SingleProjectInformations>
        </>
    );
}

export default SingleProjectPageContent;
