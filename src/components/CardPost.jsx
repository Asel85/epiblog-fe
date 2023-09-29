
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const CardPost = ({title, content, author, image, id}) => {
  console.log(id)
  return (
    <>
     <Card style={{ width: '18rem' }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='d-flex flex-column justify-content-around'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Card.Text>
          {author}
        </Card.Text>
        <Link to={`/posts/${id}`}>
        <Button variant="primary">Go to detail</Button>
        </Link>
        </Card.Body>
        </Card>
         </>
    
  )
}

export default CardPost

