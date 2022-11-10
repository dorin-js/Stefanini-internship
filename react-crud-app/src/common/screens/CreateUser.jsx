import React, { useState } from "react";
import Button from "../components/Button/Button";
import CreateForm from "../components/CreateForm/CreateForm";
import Modal from "../components/Modal";
import Portal from "../components/Portal";

const CreateUser = () => {
  const [on, setOn] = useState(false);
  const openForm = () => setOn(true);
  return (
    <>
      <Button content="New user" onClick={openForm} />
      {on && (
        <Portal>
          <Modal setOn={setOn}>
            <CreateForm setOn={setOn} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default CreateUser;
