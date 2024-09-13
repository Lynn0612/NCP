import React from "react";
import "./style.scss";
import { ProjectBanner } from "./banner/ProjectBanner";
import { ProjectWhydoit } from "./whydoit/ProjectWhydoit";

const ProjectPage = () => {

    return (
        <>
            <ProjectBanner />
            <ProjectWhydoit />
        </>
    );
};
export default ProjectPage;