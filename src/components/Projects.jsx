/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'motion/react';

export default function Projects() {

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
        <div id="projects" className="my-15 px-5 lg:px-20 py-0">
            <div className="flex flex-col items-center justify-center project-section">
                <h1 className="primary-heading">Projects & Experiences</h1>
                <p className="primary-text">
                    Some of my main projects and experiences I've worked on.
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
                {projectInfoData.map((data) => (
                    <motion.div className="flex flex-col justify-center items-center text-center w-[290px] min-h-[380px] bg-white px-4 py-8 rounded-2xl text-gray-600 mx-4 my-8" key={data.title}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 2 }}>
                        <div className="info-boxes-img-container">
                            {/* <img src={data.image} alt="" /> */}
                        </div>
                        <h2 className='text-2xl font-bold my-4'>{data.title}</h2>
                        <p className='flex flex-1 items-center text-justify font-semibold px-4'>{data.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
