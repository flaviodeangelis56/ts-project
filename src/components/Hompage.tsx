import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleNews from "./SingleNews";

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

const Hompage = () => {
  const [newsArry, setNewsArry] = useState<news[]>([]);

  const baseEndpoint = "https://api.spaceflightnewsapi.net/v4/articles";

  const fetchNews = async () => {
    try {
      const resp = await fetch(baseEndpoint, { method: "GET" });
      if (resp.ok) {
        const newsArryFetch = await resp.json();
        setNewsArry(newsArryFetch.results);
        console.log(newsArryFetch.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Container className="backgroundContainer">
        <h1 className="titleFont mb-4">Spaceflight News</h1>
        <Row>
          {newsArry.map((news, i) => {
            return (
              <Col xs={6} className="mb-4">
                <SingleNews news={news} key={`index-${i}`} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Hompage;
