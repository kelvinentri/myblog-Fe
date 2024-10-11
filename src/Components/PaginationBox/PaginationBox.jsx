import Pagination from 'react-bootstrap/Pagination';

function PaginationBox({nextPage, pageNo,maxPageNo}) {
  console.log(maxPageNo);

  return (
    <Pagination>
      <Pagination.First onClick={()=>nextPage(1)} />
      <Pagination.Prev onClick={()=>nextPage(pageNo-1)} />
      <Pagination.Ellipsis />

  {  pageNo>=3 &&  <Pagination.Item onClick={()=>nextPage(pageNo-2)}>{pageNo-2}</Pagination.Item>}
    {  pageNo>=2 && <Pagination.Item onClick={()=>nextPage(pageNo-1)}>{pageNo-1}</Pagination.Item>}
      <Pagination.Item onClick={()=>nextPage(pageNo)} active>{pageNo}</Pagination.Item>
    { pageNo < maxPageNo && <Pagination.Item onClick={()=>nextPage(pageNo+1)}>{pageNo+1}</Pagination.Item>}
{     pageNo< maxPageNo &&  <Pagination.Item onClick={()=>nextPage(pageNo+2)} >{pageNo+2}</Pagination.Item>}

      <Pagination.Ellipsis />
      <Pagination.Next onClick={()=>{pageNo < maxPageNo &&  nextPage(pageNo+1)}}  />
      <Pagination.Last  onClick={()=>nextPage(maxPageNo)} />
    </Pagination>
  );
}

export default PaginationBox;