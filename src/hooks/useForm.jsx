import React from "react";

const useForm = (initialState) => {
  const [form, setForm] = React.useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({ ...form, [name]: name === "price" ? +value : value }));
  };

  const cleanFields = () => {
    setForm(initialState);
  };

  return {
    form,
    onChange,
    cleanFields,
  };
};

export default useForm;
