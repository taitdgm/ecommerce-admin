"use client";

import { useCreateStoreModal } from "@/hooks/useCreateStoreModal";
import Modal from "../ui/modal";
import CreateStoreForm from "../forms/CreateStoreForm";

const CreateStoreModal = () => {
  const { isOpen, onClose } = useCreateStoreModal();
  return (
    <Modal
      title="Create new store"
      description="Add a new store to manage products and categories."
      isOpen={isOpen}
      onClose={onClose}
    >
      <CreateStoreForm />
    </Modal>
  );
};

export default CreateStoreModal;
