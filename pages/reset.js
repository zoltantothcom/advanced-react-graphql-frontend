import Reset from '../components/Reset';

const ResetPassword = props => {
  return <Reset resetToken={props.query.resetToken} />;
};

export default ResetPassword;
