import { useState } from "react";
import { useSidebarModalContext } from "../context/SidebarModalContext";
import { resourceData } from "../utils/data";
import { FaArrowDownLong } from "react-icons/fa6";
import ResourceItemModal from "./ResourceItemModal";

const ResourceItem = () => {
  const [selectedImage, setSelectedImage] = useState();
  const { openModal } = useSidebarModalContext();

  const handleOpenModal = (image) => {
    openModal();
    setSelectedImage(image);
  };

  return (
    <>
      {resourceData.map((data) => {
        const { title, description, image } = data;
        return (
          <div className="resource-item-container" key={title}>
            <div className="resource-item-info">
              <h4 className="resource-item-title">{title}</h4>
              <p className="resource-item-description">{description}</p>
            </div>

            <button
              className="btn btn-accent pdf-btn"
              onClick={() => handleOpenModal(image)}
            >
              Download PDF <FaArrowDownLong className="arrow-down" />
            </button>
            <ResourceItemModal image={selectedImage} />
          </div>
        );
      })}
    </>
  );
};
export default ResourceItem;
