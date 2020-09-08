import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dashboard from './dashboard';

function mapStateToProps() {
  return {};
}
export default withRouter(connect(mapStateToProps)(Dashboard));
