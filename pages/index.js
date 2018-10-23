import Items from '../components/Items';

const Home = props => {
  return <Items page={parseFloat(props.query.page) || 1} />;
};

export default Home;
