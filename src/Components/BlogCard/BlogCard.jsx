import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WritingPad from '../WritingPad/WritingPad';

function BlogCard({data}) {
    console.log(data);
    
  return (
    <Card style={{ width: '100%' ,height:"18rem"}} className="d-flex">
      <Card.Img variant="left" src={process.env.REACT_APP_API_URL+"/"+data.imagePath} style={{height:"100%" , width:"18rem"}}  />
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