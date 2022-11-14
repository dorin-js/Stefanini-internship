import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const UserRow = ({
  user, onDelete, deleteUser, setDisplayedUser, setLoading,
}) => {
  const {
    _uuid ???, name, lastname, email, birth,
  } = user;

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
            onClick={() => setDisplayedUser(user)}
          />
          <Button
            value="Delete"
            onClick={() => {
              setLoading(true); 
              deleteUser(_uuid).then(() => setLoading(false)); // Error
            }}
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
  deleteUser: PropTypes.func,
  setDisplayedUser: PropTypes.func,
  setLoading: PropTypes.func,
};
UserRow.defaultProps = {
  user: {},
  setLoading: () => undefined,
  setDisplayedUser: () => undefined,
  deleteUser: () => undefined,
};

export default UserRow;
