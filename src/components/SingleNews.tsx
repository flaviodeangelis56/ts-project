import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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

class SingleNews extends Component<news> {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Link to={"/NewsDettails/" + this.props.id}>
            <Button variant="primary">Show dettails</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleNews;
