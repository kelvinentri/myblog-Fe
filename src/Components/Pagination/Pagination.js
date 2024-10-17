import Pagination from 'react-bootstrap/Pagination';


export default function PaginationComp({items,number}){
    let active = 2;
    for (let number = 10; number <= 20; number++) {
      items.push(
        
      );
    }
    return (
        <div>
              <Pagination size="sm">
                
              {<Pagination.Item key={number} active={number === active}>
  <span>{number}</span>
        </Pagination.Item>}
              </Pagination>
        </div>
    )
}
