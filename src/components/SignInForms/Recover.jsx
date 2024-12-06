import React, { useState } from "react";
import FormContainer from "./formsComponent/formContainer";
import FormText from "./formsComponent/FormText";
import FormInput from "./formsComponent/FormInput";
import FormButton from "./formsComponent/FormButton";

const Recover = () => {
  const initial = {
    email: "",
  };
  const [fromData, setFormData] = useState(initial);

  const handleChange = (event) => {
    setFormData({ [event.target.id]: event.target.value });
  };

  const handleBtn = () => {
    setFormData({
      email: "",
    });
  };

  console.log(fromData);

  return (
    <FormContainer handleSubmit={handleBtn}>
      <FormText
        formHeading={`RECOVER PASSWORD`}
        formText={`Please enter your email:`}
      />
      <FormInput
        type={`email`}
        id={`email`}
        placeholder={`Email`}
        value={fromData.email}
        handleChange={handleChange}
      />
      <FormButton formBtn={`RECOVER`} />
    </FormContainer>
  );
};

export default Recover;
