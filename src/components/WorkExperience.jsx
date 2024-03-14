import '../App.css';

export default function WorkExperience({workTitle, workDate, workPlace, workCity, description1, description2})
{
    return(
        <div>
        <div className="container">
          <h2 className="leftSideHeader">{workTitle}</h2>
          <h2 className="rightSideHeader">{workDate}</h2>
        </div>
        <div className='container'>
          <h3 className='leftSideSubHeader'>{workPlace}</h3>
          <h3 className='rightSideSubHeader'>{workCity}</h3>
        </div>
        <div className='leftSideText'>
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        </div>
    );
}