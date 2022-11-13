import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, CreateForm, Modal, Portal,
} from '../components';

const CreateUser = ({ onCreateUser }) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible((currentState) => !currentState);
  return (
    <>
      <Button value="New user" onClick={toggle} />
      {visible && (
        <Portal>
          <Modal title="Add new user" onClose={toggle}>
            <CreateForm setVisible={setVisible} onCreateUser={onCreateUser} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

CreateUser.propTypes = {
  onCreateUser: PropTypes.func,
};
CreateUser.defaultProps = {
  onCreateUser: () => {},
};

export default CreateUser;
