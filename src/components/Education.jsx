import '../App.css';

export default function Education({educationType, educationDate, educationPlace, educationCity, description1, description2, description3})
{
    return(
        <div>
        <div className="container">
          <h2 className="leftSideHeader">{educationType}</h2>
          <h2 className="rightSideHeader">{educationDate}</h2>
        </div>
        <div className='container'>
          <h3 className='leftSideSubHeader'>{educationPlace}</h3>
          <h3 className='rightSideSubHeader'>{educationCity}</h3>
        </div>
        <div className='leftSideText'>
          <p>{description1}</p>
          <p>{description2}</p>
          <p>{description3}</p>
        </div>
        </div>
    );
}