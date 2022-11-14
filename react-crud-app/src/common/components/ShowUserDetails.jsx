import React from 'react';
import PropTypes from 'prop-types';

const ShowUserDetails = ({ user }) => <h3>{user?.name}</h3>;

ShowUserDetails.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    birth: PropTypes.string,
  }),
};
ShowUserDetails.defaultProps = {
  user: [],
};

export default ShowUserDetails;
