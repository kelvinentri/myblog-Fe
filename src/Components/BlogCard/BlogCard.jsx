import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WritingPad from '../WritingPad/WritingPad';
import './BlogCard.css'
import dummyImage from '../../assets/images.png'

function BlogCard({data}) {
    console.log(data);
    
  return (
    <Card style={{ width: '100%'}} className="cardStyle">
      <Card.Img variant="left" src={data.imagePath? process.env.REACT_APP_API_URL+"/"+data.imagePath:dummyImage} style={{height:"100%" , width:"18rem"}}  />
      <Card.Body>

        <Card.Text>
        <WritingPad
        readOnly={true}
        theme={"bubble"}
        value={data.content}
      />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;