import React from 'react'

function Projects() {
    const projectInfoData = [
        {
            // image: PickMeals,
            title: "Banklink - Banco da Amazonia",
            text: "Banking automation product responsible for all communication and financial transactions. This project was built using Java 6 and 7, JBoss EAP, Spring Framework and Oracle Database.",
        },
        {
            // image: ChooseMeals,
            title: "Consulta Armas Sigma/Sinarm",
            text: "Integration API between Sigma (Brazilian Army) and Sinarm (Federal Police) to perform searches for individuals and their registered CAC firearms. This project was built using JAVA 8, WildFly, SpringBoot, PostgreSql Database, Openshift and RedHat FUSE.",
        },
        {
            // image: DeliveryMeals,
            title: "Siscaer Armas",
            text: "This project was developed for Federal Police to perform control weapons in departure and arrivals of airport flights in Brazil. This Project was built using Java 8, WildFly, SpringBoot, Angular, Oracle Databse, Openshift and RedHat Fuse.",
        },
        {
            // image: DeliveryMeals,
            title: "Antecedentes Criminais",
            text: "Federal Police System for Searching and Issuing Criminal Record Checks. This Project using Angular, Java 8, Mainframe, PostgreSql Database.",
        },
        {
            // image: DeliveryMeals,
            title: "Sinarm",
            text: "Federal Police System to perform register control weapons civilians in Brazil. This project was built using Java 7, richfaces, Spring, JBoss EAP, openshift, RedHat Fuse.",
        },
        {
            // image: DeliveryMeals,
            title: "Corporativo Policia Federal",
            text: "Automation product responsible for all communication/integration of systems Federal Police. This Project was built using Java 8, SpringBoot, WildFly, Oracle Database, Openshift and RedHat Fuse.",
        },
        {
            // image: DeliveryMeals,
            title: "Siconarm - Sistema de Controle de Armas CBMDF",
            text: "This Project was developed for Firefighter Military Corps of Distrito Federal to perfom register control weapons of your militaries. This project was built using Node.js, React.js.",
        },
    ];
    return (
        <div id="projects" className="project-section-wrapper">
            <div className="project-section-top">
                <h1 className="primary-heading">Projects & Experiences</h1>
                <p className="primary-text">
                    Some of my main projects and experiences I've worked on.
                </p>
            </div>
            <div className="project-section-bottom">
                {projectInfoData.map((data) => (
                    <div className="project-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            {/* <img src={data.image} alt="" /> */}
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;