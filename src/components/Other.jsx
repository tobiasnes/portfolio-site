import '../App.css';

export default function Other({title, description1, description2, description3})
{
    return(
        <div>
          <h2 className="leftSideHeader2">{title}</h2>
        <div className='leftSideText'>
          <p>{description1}</p>
          <p>{description2}</p>
          <p>{description3}</p>
        </div>
        </div>
    );
}