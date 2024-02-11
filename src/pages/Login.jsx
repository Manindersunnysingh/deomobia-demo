import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Wrapper from "../assets/wrappers/RegisterAndLogin";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import { FormRow, SubmitBtn, Logo, BackLink } from "../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    toast.success("Login successful");
    return redirect("/");
  } catch (error) {
    toast.error(`Error while login...`);
    console.log(error);
    return error;
  }
};
const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <SubmitBtn />

        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
        <BackLink linkText="back to home" link={"/"} color="accent" />
      </Form>
    </Wrapper>
  );
};
export default Login;
