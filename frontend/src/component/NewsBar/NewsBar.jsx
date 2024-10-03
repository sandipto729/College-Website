import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import 'swiper/css/autoplay';

import styles from './NewsBar.module.css';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import SummaryApi from '../../common/index';

export default function NewsBar() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);    

    // Fetch news data from JSON
    const fetchNews = async () => {
        try {
            const response = await fetch(SummaryApi.GetCseNews.url, {
                method: SummaryApi.GetCseNews.method,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            // console.log("Faulty Check News : ",data);
            setNews(data.slice(-20).reverse());  
            setLoading(false);  
        } catch (error) {
            setError('Failed to load news.');
            setLoading(false);  
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
            
            {/* Loading or error message */}
            {loading && <p>Loading news...</p>}
            {error && <p className={styles.error}>{error}</p>}

            {!loading && !error && (
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
            )}
        </div>
    );
}
