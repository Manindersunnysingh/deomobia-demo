import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ formBtn, onClick }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className={`btn btn-block btn-primary ${formBtn && "form-btn"} `}
      disabled={isSubmitting}
      onClick={onClick}
    >
      {isSubmitting ? "submitting..." : "submit"}
    </button>
  );
};
export default SubmitBtn;
