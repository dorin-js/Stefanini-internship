import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { UserForm } from '../components/UserForm';
import Portal from '../components/Portal';

const CreateUser = ({ onCreateUser }) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible((currentState) => !currentState);
  return (
    <>
      <Button value="New user" onClick={toggle} />
      {visible && (
        <Portal>
          <Modal title="Add new user" onClose={toggle}>
            <UserForm setVisible={setVisible} onCreateUser={onCreateUser} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

CreateUser.propTypes = {
  onCreateUser: PropTypes.func.isRequired,
};

export default CreateUser;
