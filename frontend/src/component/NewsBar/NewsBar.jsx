import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation CSS
import 'swiper/css/autoplay';

import styles from './NewsBar.module.css';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Import Pagination, Autoplay, and Navigation

export default function NewsBar() {
    const [news, setNews] = useState([]);

    // Fetch news data from JSON
    const fetchNews = async () => {
        try {
            const response = await fetch('./CseNews.json');
            const data = await response.json();
            setNews(data.news.slice(-20).reverse()); 
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    // Group news into sets of 4
    const groupNews = () => {
        const groupedNews = [];
        for (let i = 0; i < news.length; i += 4) {
            groupedNews.push(news.slice(i, i + 4));
        }
        return groupedNews;
    };

    return (
        <div className={styles.newsBarContainer}>
            <h2 className={styles.newsBarHeader}>NewsBar</h2>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    clickable: true, 
                }}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false,
                }}
                navigation={true} 
                modules={[Pagination, Autoplay, Navigation]} 
                className={styles.mySwiper}
            >
                {groupNews().map((group, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.newsSlide}>
                            {group.map((newsItem, idx) => (
                                <div key={idx} className={styles.newsItem}>
                                    <p>{newsItem.date}</p>

                                    <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
                                        {newsItem.title}
                                    </a>
                                    
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
