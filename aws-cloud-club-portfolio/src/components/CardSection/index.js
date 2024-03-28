import React from 'react';
import ReactDOM from 'react-dom';
import './CardSection.css';

const CardSection = () => {
  const cardsData = [
    {
      title: 'AWS Club First Speaker Event',
      description: "Hosted our inaugural event introducing members to AWS Club @ Wayne State, featuring valuable insights from guest Raghav Kulkarni.",
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7114598802690375680?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7114598802690375680%29'
    },
    {
      title: "Valentine's' Social Mixer",
      description: 'We gather for social events where we play games and socialize together.',
      link: 'https://www.linkedin.com/posts/aws-cloud-club-wayne-state-university_get-ready-for-a-tech-tastic-time-aws-cloud-activity-7161922613668143104-9TVf?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'Lambda Workshop',
      description: 'Taught cloud integration, customize alerts, and boost your resume with AWS Lambda.',
      link: 'https://www.linkedin.com/posts/aws-cloud-club-wayne-state-university_awsworkshop-cloudintegration-techskills-activity-7135137551236960258-5geD?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'Cyber Security Event',
      description: 'An Exclusive Cybersecurity Event! AWS Cloud Club @ WSU presents upcoming workshop with Cyber Defense club.',
      link: 'https://www.linkedin.com/posts/aws-cloud-club-wayne-state-university_join-us-for-an-exclusive-cybersecurity-event-activity-7176616504967196675-lLUj?utm_source=share&utm_medium=member_desktop'
    },
    {
      title: 'Detroit Lions x AWS',
      description: `Two guests from the Detroit Lions come over to teach us how big data is utilized with AWS.`,
      link: 'https://www.linkedin.com/posts/aws-cloud-club-wayne-state-university_aws-waynestateuniversity-cloudcomputing-activity-7156290274271367169-2_2V?utm_source=share&utm_medium=member_desktop'
    }
  ];

  return (
    <div className="card-section">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          {card.link && (
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <button className="green-button">Learn More</button>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<CardSection />, document.getElementById('root'));

export default CardSection;
