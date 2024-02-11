import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Wrapper from "../assets/wrappers/RegisterAndLogin";
import { Link, Form, redirect } from "react-router-dom";
import { FormRow, SubmitBtn, Logo, BackLink } from "../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const docRef = collection(db, "user");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    if (user) {
      await addDoc(docRef, {
        uid: user?.user?.uid,
        role: "user",
        email: user?.user?.email,
        createdAt: serverTimestamp(),
      });
    }
    toast.success("Registration successful");
    return redirect("/");
  } catch (error) {
    toast.error(`${error}`);
    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
        <BackLink linkText="back to home" link={"/"} color="accent" />
      </Form>
    </Wrapper>
  );
};
export default Register;
