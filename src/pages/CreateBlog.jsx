import { db } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Wrapper from "../assets/wrappers/RegisterAndLogin";
import { Form, redirect } from "react-router-dom";
import { FormRow, SubmitBtn, Logo, FormTextAreaRow } from "../components";
import { toast } from "react-toastify";
import BackLink from "../components/BackLink";
import JoditEditor from "jodit-react";

import { useState } from "react";

export const action = async ({ request }) => {
  const docRef = collection(db, "blog");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await addDoc(docRef, {
      title: data.title,
      description: data.description,
      createdAt: serverTimestamp(),
    });
    toast.success("Blog created successfully");
    return redirect("/blog");
  } catch (error) {
    console.log(error);
    toast.error("Error creating blog...");
    return error;
  }
};

const CreateBlog = () => {
  const [description, setDescription] = useState("");
  const handleChange = (newDescription) => {
    console.log(newDescription);
    setDescription(newDescription);
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Add Blog</h4>
        <FormRow type="text" name="title" />

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
export default CreateBlog;
