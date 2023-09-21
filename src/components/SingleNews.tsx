import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SingleNewsProps {
  news: {
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
  };
}

class SingleNews extends Component<SingleNewsProps> {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.news.image_url} />
        <Card.Body>
          <Card.Title>{this.props.news.title}</Card.Title>
          <Card.Text>{this.props.news.published_at}</Card.Text>
          <Link to={"/NewsDettails/" + this.props.news.id}>
            <Button variant="primary">Show dettails</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleNews;
