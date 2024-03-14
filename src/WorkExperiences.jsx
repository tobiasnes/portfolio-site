import './App.css';
import { WORK_EXPERIENCE } from './Data.js';
import Likes from './components/Likes.jsx';
import WorkExperience from './components/WorkExperience.jsx';

export default function WorkExperiences() {
    return(<section id="work-experiences">
        <div className='card2'>
        <h1 className='name'>Work Experience</h1>
        <div>
            {WORK_EXPERIENCE.map((experienceItem) => <WorkExperience key={experienceItem.workTitle} {...experienceItem}/>)}
        </div>
        <Likes/>
        </div>
    </section>);
}
