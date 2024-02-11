import { db } from "../config/firebase";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import Wrapper from "../assets/wrappers/RegisterAndLogin";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { FormRow, SubmitBtn, Logo, BackLink } from "../components";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { useState } from "react";

export const loader = async ({ params }) => {
  const id = params.id;
  const docRef = doc(db, "blog", id);
  try {
    const data = await getDoc(docRef);
    const actualData = data.data();
    return actualData;
  } catch (error) {
    console.log(error);
    toast.error(`Error getting blog...`);
    return error;
  }
};

export const action = async ({ request, params }) => {
  const id = params.id;
  const docRef = doc(db, "blog", id);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await updateDoc(docRef, {
      title: data.title,
      description: data.description,
      updatedAt: serverTimestamp(),
    });
    toast.success("Blog updated successfully");
    return redirect("/blog");
  } catch (error) {
    console.log(error);
    toast.error("Error updating blog...");
    return error;
  }
};

const EditBlog = () => {
  const data = useLoaderData();
  console.log(data);
  const [description, setDescription] = useState(data.description);
  const handleChange = (newDescription) => {
    console.log(newDescription);
    setDescription(newDescription);
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Edit Blog</h4>
        <FormRow type="text" name="title" defaultValue={data.title} />
        <JoditEditor
          name="description"
          value={description}
          onChange={handleChange}
        />

        <SubmitBtn />
        <BackLink linkText="back to blog" link={"/blog"} />
      </Form>
    </Wrapper>
  );
};
export default EditBlog;
