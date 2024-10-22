import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosInstance } from "../../config/axiosConfig";
import PaginationBox from "../../Components/PaginationBox/PaginationBox";

function Home() {
  const { pageNo } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalCount, settotalCount] = useState(0);
  const perpage = 2;
  useEffect(() => {
    getData(pageNo);
  }, []);
  const nextPage = (newPageNo) => {
    navigate(`/${newPageNo}`);
    getData(newPageNo);
  };
  const getData = (newPageNo=1) => {
    AxiosInstance.get(
      `/posts/getpostData?pageNo=${newPageNo}&perpage=${perpage}`
    )
      .then((res) => {
        setData(res.data[0]?.postData ?? []);
        settotalCount(res.data[0]?.totalCount?.[0]?.totalCount ?? 0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="d-flex flex-wrap gap-2">
        {data.map((post) => (
          <Cards post={post} key={post._id} />
        ))}{" "}
      </div>
      <PaginationBox
        nextPage={nextPage}
        pageNo={parseInt(pageNo) ?? 1}
        maxPageNo={Math.ceil(totalCount / perpage)}
      />
    </>
  );
}

export default Home;
