import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const appUrl = 'http://brandontruong.me/wp-json/wp/v2/';
const getPages = `${appUrl}pages`;
const Navigation = () => {
  const [nav, setNav] = useState();
  useEffect(() => {
    fetch(getPages)
      .then((data) => data.json())
      .then((data) => {
        setNav(data.map((item) => ({ title: item.title.rendered, id: item.id, slug: item.slug })));
      });
  }, []);

  if (!nav) return null;
  return (
    <>
      <ul>
        { nav.map((navItem) => (
          <li key={`nav-${navItem.slug}`}>
            <Link href={`posts/${navItem.id}`}>
              <a>{ navItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
