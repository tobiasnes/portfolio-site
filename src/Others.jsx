import './App.css';
import { OTHER } from "./Data";
import Likes from './components/Likes.jsx';
import Other from './components/Other';

export default function Others() {
    return(<section id="others">
        <div className='card2'>
        <div>
            {OTHER.map((otherItem) => <Other key={otherItem.title} {...otherItem}/>)}
        </div>
        <Likes/>
        </div>
    </section>);
}
