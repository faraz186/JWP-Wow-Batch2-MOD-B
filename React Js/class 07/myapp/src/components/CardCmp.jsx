import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardCmp({ image, title, desc, id }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{desc?.slice(0, 50)}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/productdetails/${id}`);
          }}
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardCmp;
