import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

class TakeMyMoney extends React.Component {
  totalItems = cart =>
    cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);

  onToken = (res, createOrder) => {
    // call the mutation when we have the stripe token
    createOrder({
      variables: {
        token: res.id,
      },
    }).catch(err => alert(err.message));
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => (
              <StripeCheckout
                amount={calcTotalPrice(me.cart)}
                name="Sick Fits"
                description={`Order of ${this.totalItems(me.cart)} items`}
                image={me.cart[0].item && me.cart[0].item.image}
                stripeKey="pk_test_vEUJuHeLkIRSm3ktW74w0wYr"
                currency="CAD"
                email={me.email}
                token={res => this.onToken(res, createOrder)}
              >
                {this.props.children}
              </StripeCheckout>
            )}
          </Mutation>
        )}
      </User>
    );
  }
}

export default TakeMyMoney;
