import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { locationData, sourceOfReferralData } from "../utils/data";
import Wrapper from "../assets/wrappers/ContactUs";
import { Form, redirect, useSubmit } from "react-router-dom";
import {
  FormRow,
  SubmitBtn,
  FormTextAreaRow,
  FormRowSelect,
} from "../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const docRef = collection(db, "contact_requests");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await addDoc(docRef, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      course: data.course,
      location: `${
        data.location === "Other (Specify)" ? data.otherLocation : data.location
      }`,
      source_of_referral: `${
        data.sourceOfReferral === "Other (Specify)"
          ? data.otherSourceOfReferral
          : data.sourceOfReferral
      }`,
      message: data.message,
      createdAt: serverTimestamp(),
    });
    toast.success(
      "Thank you for reaching out to us. You can expect to receive a response shortly.",
    );
    return redirect("/");
  } catch (error) {
    toast.error("Error creating contact...");
    return error;
  }
};

const ContactUs = () => {
  const submit = useSubmit();
  const [location, setLocation] = useState("");
  const [sourceOfReferral, setSourceOfReferral] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(e.currentTarget.form);
    e.currentTarget.form?.reset();
  };

  return (
    <Wrapper id="contact-us">
      <Form method="post" className="form">
        <h4 className="form-title">Contact Us</h4>
        <div className="form-center">
          <FormRow type="text" name="name" labelText="Full Name" />
          <FormRow type="email" name="email" />
          <FormRow type="text" name="phone" />
          <FormRow type="text" name="course" />
          <FormRowSelect
            name="location"
            defaultValue={locationData.ACT}
            list={Object.values(locationData)}
            onChange={(e) => setLocation(e.target.value)}
          />
          {location === "Other (Specify)" && (
            <FormRow
              type="text"
              name="otherLocation"
              labelText="other location (please specify): "
            />
          )}
          <FormRowSelect
            name="sourceOfReferral"
            labelText="How did you hear from us: "
            defaultValue={sourceOfReferralData.online_search}
            list={Object.values(sourceOfReferralData)}
            onChange={(e) => setSourceOfReferral(e.target.value)}
          />

          {sourceOfReferral === "Other (Specify)" && (
            <FormRow
              type="text"
              name="otherSourceOfReferral"
              labelText="other source of referal (please specify): "
            />
          )}
          <div className="span-full-row">
            <FormTextAreaRow name="message" />
            <div className="submit-btn">
              <SubmitBtn onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
export default ContactUs;
