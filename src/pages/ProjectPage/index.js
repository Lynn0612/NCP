import React from "react";
import "./style.scss";
import { ProjectBanner } from "./banner/ProjectBanner";
import { ProjectWhydoit } from "./whydoit/ProjectWhydoit";
import { ProjectIntro } from "./intro/ProjectIntro";
import { ProjectContent } from "./content/ProjectContent";
import { ProjectCard } from "./card/ProjectCard";

const ProjectPage = () => {

    return (
        <>
            <ProjectBanner />
            <ProjectIntro />
            <ProjectContent />
            <ProjectWhydoit />
            <ProjectCard />
        </>
    );
};
export default ProjectPage;