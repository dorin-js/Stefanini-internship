import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import userApi from '../../services/usersApi';

const UserRow = ({
  user, onDelete,
}) => {
  const [loading, setLoading] = useState(false);

  const {
    _uuid: id, name, lastname, email, birth,
  } = user;

  const deleteUser = async () => {
    setLoading(true);
    try {
      await userApi.deleteUserById(id);
      onDelete(id);
    } catch (e) {
      // handle error locally
    }
    setLoading(false);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{birth}</td>
      <td>
        <div className="buttonsContainer">
          <Button
            value="Show Details"
          // onClick={() => setDisplayedUser(user)}
          />
          <Button
            value={loading ? 'Deleting...' : 'Delete'}
            onClick={deleteUser}
          />
        </div>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  user: PropTypes.PropTypes.shape({
    _uuid: PropTypes.string,
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    birth: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};
UserRow.defaultProps = {
  user: {},
  onDelete: null,
};

export default UserRow;
