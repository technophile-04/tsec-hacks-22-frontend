import React from "react";
import "./VerifyList.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
function VerifyList(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="verify-list">
        <p>{props.name}</p>
        <p>{props.courseName}</p>
        <p>{props.credits}</p>
        <button style={{ color: "#fff" }} onClick={onOpen}>
          Verify
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify the course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Confirm Verifcation Of Course</p>
          </ModalBody>

          <ModalFooter>
            <Button bgColor="white" color="grey">
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default VerifyList;
