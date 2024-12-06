import React, { useState } from "react";
import FormContainer from "./formsComponent/formContainer";
import FormText from "./formsComponent/FormText";
import FormInput from "./formsComponent/FormInput";
import FormButton from "./formsComponent/FormButton";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const intial = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(intial);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      setFormData((pre) => ({ ...pre, [password]: "" }));
    }
    setFormData({ email: "", password: "" });
  };

  const handleChange = (event) => {
    setFormData((pre) => ({ ...pre, [event.target.id]: event.target.value }));
  };

  console.log(formData);

  const navigate = useNavigate();

  const forgetUseNavigate = () => {
    navigate("/forget-password");
  };

  const CreateOneNavigate = () => {
    navigate("/register");
  };
  return (
    <FormContainer handleSubmit={handleSubmit}>
      <FormText
        formHeading={`LOGIN`}
        formText={`Please Enter your e-mail and password`}
      />
      <FormInput
        type={`email`}
        id={`email`}
        placeholder={`Email`}
        handleChange={handleChange}
        value={formData.email}
      />

      <FormInput
        type={`password`}
        id={`password`}
        placeholder={`Password`}
        handleChange={handleChange}
        value={formData.password}
      />
      <p
        className="text-right my-[5px]  font-thin cursor-pointer hover:text-blue-400"
        onClick={forgetUseNavigate}
      >
        Forget Password
      </p>

      <FormButton formBtn={`LOGIN`} />

      <p className="py-[20px]">
        Dont Have an account?{" "}
        <a
          className="text-black hover:text-blue-400 cursor-pointer"
          onClick={CreateOneNavigate}
        >
          Create One
        </a>
      </p>
    </FormContainer>
  );
};

export default SignIn;
