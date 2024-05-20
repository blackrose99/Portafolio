import React from 'react';
import "./SkillCard.css";

const SkillCard = ({ name, level }) => {
    return (
        <div className='col-3 col-md-3 col-lg-3 col-xl-3'>
            <div className="skill">
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
        <div className="container">
            <div className="mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="header mb-3">{title}</div>
                        <div className="row d-flex flex-wrap">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                </div>
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
        <div>
            <SkillCategory title="Frontend Skills" skills={FrontendSkills} />
            <SkillCategory title="Backend Skills" skills={BackendSkills} />
        </div>
    );
};

export default App;
