import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface news {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [];
  events: [];
}

const DetailsPage = () => {
  const params = useParams();
  const [News, setNews] = useState<news>();

  const baseEndpoint = "https://api.spaceflightnewsapi.net/v4/articles/";

  const fetchSingleNews = async () => {
    try {
      const resp = await fetch(baseEndpoint + params.newsId, { method: "GET" });
      if (resp.ok) {
        const newsObjFetch = await resp.json();
        setNews(newsObjFetch);
        console.log(newsObjFetch);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleNews();
  }, []);

  return (
    <Container className="backgroundContainer" style={{ minHeight: "100%" }}>
      <h1>{News ? News.title : "Loading..."}</h1>
      <p>{News?.published_at}</p>
      <img src={News?.image_url} alt="News" className="w-50 mb-5" />
      <h3 className="mb-5">{News?.summary}</h3>
      <p>
        more dettails: <a href={News?.url}> {News?.url}</a>
      </p>
    </Container>
  );
};
export default DetailsPage;
