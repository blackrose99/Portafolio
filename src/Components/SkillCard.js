import React from 'react';
import "./SkillCard.css";

const SkillCard = ({ name, level }) => {
    // Define el nombre del icono de Material Icons correspondiente a cada habilidad
    const iconMap = {
        HTML: 'code',
        CSS: 'style',
        JavaScript: 'code',
        React: 'web',
        Bootstrap: 'web',
        Java: 'developer_board',
        PHP: 'code',
        Laravel: 'code',
        SpringBoot: 'developer_board',
        NodeJS: 'developer_board',
    };

    return (
        <div className='col-6'>
            <div className="skill">
                <div className={`skill-icon`}><i className="material-icons">{iconMap[name]}</i></div>
                <div className={`skill-name ${name.toLowerCase()}`}>{name}</div>
                <div className="skill-level">
                    <div style={{ width: `${level}%` }} className="skill-percent"></div>
                </div>
                <div className="skill-percent-number">{`${level}%`}</div>
            </div>
        </div>
    );
};

const SkillCategory = ({ title, skills }) => {
    return (
        <div className="mt-5">
            <h2 className="text-center mb-4">{title}</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} level={skill.level} />
                ))}
            </div>
        </div>
    );
};

const FrontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Bootstrap', level: 78 },
];

const BackendSkills = [
    { name: 'Java', level: 85 },
    { name: 'PHP', level: 70 },
    { name: 'Laravel', level: 75 },
    { name: 'SpringBoot', level: 65 },
    { name: 'NodeJS', level: 60 },
    { name: 'Laravel', level: 60 },
];

const App = () => {
    return (
        <div className="">
            <div className="row">
                <div className="col-md-6">
                    <SkillCategory title="Frontend Skills" skills={FrontendSkills} />
                </div>
                <div className="col-md-6">
                    <SkillCategory title="Backend Skills" skills={BackendSkills} />
                </div>
            </div>
        </div>
    );
};

export default App;
