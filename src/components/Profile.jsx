import '../App.css';
import Likes from './Likes.jsx';

export default function Profile()
{
    return(
        <p className='card2'>
        <h1 className='name'>Profile</h1>
        I am a recently graduated software engineer with a passion for technology and creating 
great products. 
I enjoy working in a team environment and find that the best products and experiences are 
created when several disciplines and professions work together to achieve a common goal.
My favorite languages and frameworks are JavaScript, C++ and React, and I believe myself 
to be a quick learner and hard worker when it comes to exploring and learning new 
technologies, frameworks and languages. I have an intermediate knowledge of C# and Java, 
both of which I am actively learning. 
In addition to programming and software development, I have a passion for video game
development and design, and how these can promote learning and exploration.
        <Likes/>
    </p>
    );
}