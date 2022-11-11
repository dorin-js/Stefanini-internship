import React, { useState } from "react";
import Button from "../components/Button/Button";
import CreateForm from "../components/CreateForm/CreateForm";
import Modal from "../components/Modal/Modal";
import Portal from "../components/Portal";

const CreateUser = ({ setUsers }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  return (
    <>
      <Button value="New user" onClick={toggle} />
      {on && (
        <Portal>
          <Modal onClose={toggle}>
            <CreateForm setOn={setOn} setUsers={setUsers} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default CreateUser;
