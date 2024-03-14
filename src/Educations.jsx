import './App.css';
import { EDUCATION } from './Data.js';
import Education from './components/Education.jsx';
import Likes from './components/Likes.jsx';

export default function Educations() {
    return(<section id="education">
        <div className='card2'>
        <h1 className='name'>Education</h1>
        <div>
            {EDUCATION.map((educationItem) => <Education key={educationItem.educationType} {...educationItem}/>)}
        </div>
        <Likes/>
        </div>
    </section>);
}
