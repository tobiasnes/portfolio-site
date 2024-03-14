import { useState } from 'react';
import '../App.css';

export default function Likes() {
    const [count, setCount] = useState(0)
    return (
        <div className='card'>
        <button className='button' onClick={() => setCount((count) => count + 1)}>
          Likes: {count}
        </button>
      </div>
    );
};