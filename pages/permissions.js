import Permissions from '../components/Permissions';
import PleaseSignIn from '../components/PleaseSignIn';

const PermissionsPage = props => {
  return (
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  );
};

export default PermissionsPage;
