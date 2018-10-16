import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <p>Hey!</p>
      <Link href="/sell">Sell</Link>
    </div>
  );
};

export default Home;
