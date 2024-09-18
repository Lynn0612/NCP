import React from "react";
import "./style.scss";
import { ProjectBanner } from "./banner/ProjectBanner";
import { ProjectWhydoit } from "./whydoit/ProjectWhydoit";
import { ProjectIntro } from "./intro/ProjectIntro";

const ProjectPage = () => {

    return (
        <>
            <ProjectBanner />
            <ProjectIntro />
            <ProjectWhydoit />
        </>
    );
};
export default ProjectPage;