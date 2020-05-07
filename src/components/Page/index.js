
import React, { useEffect, useState } from 'react';
import appUrl from '../../config';

const Page = ({ id }) => {
  const getPage = `${appUrl}pages/${id}`;
  const [page, setPage] = useState();
  useEffect(() => {
    fetch(getPage)
      .then((data) => data.json())
      .then((data) => {
        setPage(data);
      });
  }, [getPage]);
  if (!page || !page.content) return null;
  return (
    <p dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
  );
};

export default Page;

