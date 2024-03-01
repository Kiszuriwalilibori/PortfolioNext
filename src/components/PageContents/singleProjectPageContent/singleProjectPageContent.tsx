import React, { useCallback, useEffect, useId } from "react";

import uuid from "react-uuid";

import { CommentsButton, SingleProjectInformations, SingleProjectInformationsColumn, StackDivider } from "./styled";
import { Project } from "types";
import { useBoolean, useMessage } from "hooks";
import { requestLogin } from "fbase";
import { useAuthContext } from "contexts";
import { createProjectNav } from "./utils";
import { AddComment, Comments, Description, Features, Header, Links, ToNext, ToPrevious } from "./parts";

interface Props {
    data: Project;
    titles: string[];
}

function SingleProjectPageContent(props: Props) {
    const { data, titles } = props;
    const showMessage = useMessage();
    const [isModalOpen, openModal, closeModal] = useBoolean(false);
    const ID = useId();
    const { projectNext, projectPrevious } = createProjectNav(data.title, titles);

    const { title, description, story, live, github, longDescription, features } = data;

    const { user, isLogged } = useAuthContext();

    const handleSuccess = () => {};

    const handleError = useCallback((message: string) => {
        showMessage.error("Login attempt failure: " + message);
    }, []);

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
            <Header title={title} description={description} />
            {isLogged && user && isModalOpen && (
                <AddComment
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
                    <CommentsButton variant="contained" onClick={handleLeaveACommentClick} id="Log in button">
                        Leave a comment
                    </CommentsButton>
                    <Comments project={title} />
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Story</h2>
                    {story}
                </SingleProjectInformationsColumn>

                <SingleProjectInformationsColumn>
                    <h2>Tech</h2>
                    <Description longDescription={longDescription} />
                    <Features features={features} />
                </SingleProjectInformationsColumn>
            </SingleProjectInformations>
        </>
    );
}

export default SingleProjectPageContent;
