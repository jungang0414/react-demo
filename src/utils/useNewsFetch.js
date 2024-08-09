import { useState } from "react";


export function useNewsFetch() {

    const [news, setNews] = useState([]);

    //載入狀態
    const [loading, setLoading] = useState(false);

    const apikey = import.meta.env.VITE_NEWS_API_KEY;

    const fetchNews = async (country) => {
        setLoading(true);

        try {
            fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`)
                .then((response) => response.json())
                .then((data) => setNews(data))
        }
        catch (error) {
            console.error("Error : ", error);
        }
        finally {
            setLoading(false);
        }
    };

    return { loading, news, fetchNews };
}