import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { EliminarProducto } from "./EliminarProducto";
const ProductoCard = ({ producto }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>
          <Link to={`/producto/${producto.idProducto}`}>{producto.titulo}</Link>
        </Card.Title>
        <Card.Title>${producto.precio} COP</Card.Title>
      </Card.Body>
      
    </Card>
  );
};
export { ProductoCard };
