import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  const id = params.id;
  const docRef = doc(db, "blog", id);
  try {
    await deleteDoc(docRef);
    toast.success("Blog deleted successfully");
  } catch (error) {
    toast.error("Error deleting blog...");
    return error;
  }
  return redirect("/blog");
};
