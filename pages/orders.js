import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

const OrdersPage = () => {
  return (
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  );
};

export default OrdersPage;
