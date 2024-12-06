import React, { useState } from "react";
import FormContainer from "./formsComponent/formContainer";
import FormText from "./formsComponent/FormText";
import FormButton from "./formsComponent/FormButton";
import FormInput from "./formsComponent/FormInput";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3000/api/registor/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          First_name: "hello",
          Last_name: "hdhiw",
          Email: "hello@gmail.com",
          Password: "123456",
        }),
      });

      // const raw = JSON.stringify({
      //   First_name: "reeo",
      //   Last_name: "hdhiw",
      //   Email: "IAmYu@gmail.com",
      //   Password: "32235",
      // });

      // const requestOptions = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: raw,
      // };

      // let res = await fetch(
      //   "http://localhost:3000/api/registor/create",
      //   requestOptions
      // );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error.message, "error");
      setFormData((prev) => ({ ...prev, ["password"]: "" }));
    }
    setFormData({ firstname: "", secondname: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log(formData);

  return (
    <FormContainer handleSubmit={handleSubmit}>
      <FormText
        formHeading={`REGISTOR`}
        formText={`Please fill in the information below:`}
      />
      <FormInput
        type={`text`}
        value={formData.firstname}
        id={`firstname`}
        placeholder={`First name`}
        handleChange={handleChange}
      />
      <FormInput
        type={`text`}
        value={formData.secondname}
        id={`secondname`}
        placeholder={`Last name`}
        handleChange={handleChange}
      />
      <FormInput
        type={`email`}
        value={formData.email}
        id={`email`}
        placeholder={`Email`}
        handleChange={handleChange}
      />
      <FormInput
        type={`password`}
        value={formData.password}
        id={`password`}
        placeholder={`Password`}
        handleChange={handleChange}
      />

      <FormButton formBtn={`CREATE MY ACCOUNT`} />
    </FormContainer>
  );
};

export default Register;
