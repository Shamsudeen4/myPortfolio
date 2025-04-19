import React from 'react';
import SkillBar from './SkillsBar';
import './SkillBar.css'
import { FaGraduationCap } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
const skills = [
  { skill: 'HTML', percentage: 90 },
  { skill: 'CSS', percentage: 85 },
  { skill: 'JavaScript', percentage: 80 },
  { skill: 'React', percentage: 75 },
  { skill: 'Next.js', percentage: 65 },
  { skill: 'Tailwindcss', percentage: 85 },
];

const Skills = () => {
  return (
    <section id='skills' className='skil' >
      <main className='third'>
        <h2>My Skills</h2>
        <div className='skillss'>
            <div className='technical'>
                <h3>Technical Skills</h3>
                <div className='tech'>
                    {skills.map((item, i) => (<SkillBar key={i} skill={item.skill} percentage={item.percentage} />))}
                </div>            
            </div>
            <div className='sof'>
                <div className='soft'>
                <h3>Soft Skills</h3>
                <div className='sosk'>
                   <div className='tag'><FaRegCircleCheck /><p> Communication</p></div> 
                    <div className='tag'><FaRegCircleCheck /><p>Problem-solving</p></div>
                    <div className='tag'><FaRegCircleCheck /><p>Team collaboration</p></div>
                    <div className='tag'><FaRegCircleCheck /><p>Adaptability</p></div>
                    
                    <div className='tag'><FaRegCircleCheck /><p>Time management</p></div>
                </div>
                </div>
                <div className='sofg'>
                    <h3>Certifications or Courses</h3>
                    <div className='list'>
                    <div className='bsc'>
                        <h4><FaGraduationCap />BSc in Computer Science </h4>
                        <div>
                            <p>Kwara State University</p>
                            <p>2024</p>
                        </div>
                    </div>
                    <div className='fron'>
                        <h4><FaGraduationCap />Frontend Development </h4>
                        <div>
                            <p>ToshConsult Inc.</p>
                            <p>2023</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </section>
  );
};

export default Skills;
