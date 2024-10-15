import React from 'react';
import styles from './AboutUs.module.css';
import NewsFeed from './../../component/NewsBar/NewsBar'

const AboutUs = () => {
  return (
    <div className={styles['about-page-wrapper']}>
      <NewsFeed />
      <div className={styles['about-us-container']}>
        <div className={styles['header-section']}>
          
          <h1>About Us</h1>
          <hr />
          <p>Computer Science & Engineering Department, NIT Durgapur</p>
        </div>

        <section>
          <h2>Introduction</h2>
          <p>
            The Department of Computer Science and Engineering at NIT Durgapur is one of the most prestigious departments in the institute. We provide top-quality education in the field of computer science with a strong emphasis on research, innovation, and industry collaboration.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Our mission is to cultivate a learning environment that fosters the development of future leaders in computer science and engineering. We aim to provide students with the tools and knowledge to excel in their professional careers and contribute to the advancement of technology.
          </p>
        </section>

        <section>
          <h2>History</h2>
          <p>
            Established in 1990, the Computer Science and Engineering department has been a leading department in NIT Durgapur, shaping the careers of thousands of students and contributing to various research fields globally.
          </p>
        </section>

        <section>
          <h2>Our Facilities</h2>
          <ul>
            <li>State-of-the-art computer labs.</li>
            <li>High-performance computing resources.</li>
            <li>Extensive digital library.</li>
            <li>Collaboration with leading tech companies.</li>
          </ul>
        </section>
      </div>

      {/* News Feed Sidebar */}
      {/* <div className={styles['news-feed']}>
        <h2>Latest News</h2>
        <ul>
          {newsFeed.map((news, index) => (
            <li key={index}>
              <a href={news.link} target="_blank" rel="noopener noreferrer">
                {news.title}
              </a>
              <p>{news.date}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default AboutUs;
