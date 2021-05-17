import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
  const artiList = [
    { cid: 123, title: 'hsq的个人博客-1' },
    { cid: 456, title: 'hsq的个人博客-2' },
    { cid: 789, title: 'hsq的个人博客-3' },
  ]
  const [artList, setArtList] = useState(artiList);
  console.log(artList);

  const artiListNodes = artList.map((item, index) => {
    return (
      <li key= {index} >
        <Link to={'/Home/' + item.uid}>{item.title} </Link>
      </li>
    )
  })
  return (
    <div>
      {
        artiListNodes
      }
    </div>
  );
}

export default Index;
