import { useState } from "react";
import { db, storage } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { FormRow } from "../components";
import { toast } from "react-toastify";
import { useSidebarModalContext } from "../context/SidebarModalContext";
import Modal from "./Modal";

const ResourceItemModal = ({ image }) => {
  const { closeModal } = useSidebarModalContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClick = async (e, image) => {
    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }
    const validEmail = validateEmail(formData.email);
    if (!validEmail) {
      return;
    }
    e.preventDefault();
    const docRef = collection(db, "download_users");
    const storageRef = ref(storage, `Templates/${image}`);

    try {
      await addDoc(docRef, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        createdAt: serverTimestamp(),
      });

      // Get the download URL for the specified image
      const downloadURL = await getDownloadURL(storageRef);
      // Fetch the file as a Blob
      const response = await fetch(downloadURL);
      const blob = await response.blob();

      // Create a Blob URL
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger the download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = image; // Set the desired filename

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the Blob URL after the download
      URL.revokeObjectURL(blobUrl);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });

      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Error downloading. Please try again...");
    }
  };

  return (
    <Modal>
      <form className="form">
        <h3>Please enter the details to download the template</h3>
        <FormRow
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormRow
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormRow
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-block btn-primary"
          onClick={(e) => handleClick(e, image)}
        >
          Download
        </button>
      </form>
    </Modal>
  );
};
export default ResourceItemModal;
