// This is the Link API
import Link from 'next/link';

const About = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>About page hello</p>
  </div>
);

export default About;