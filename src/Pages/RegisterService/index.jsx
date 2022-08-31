import React from "react";
import axios from "axios";

import useForm from "../../hooks/useForm";
import { baseURL, headers } from "../../constants/urls";
import Checkbox from "../../components/Checkbox";

const RegisterService = () => {
  const [select, setSelect] = React.useState([]);
  const { form, onChange, cleanFields,} = useForm({
    title: "",
    description: "",
    price: "",
    paymentMethods: select,
    dueDate: "",
  });

  const paymentMethods = [
    "Cartão de Debito",
    "Cartão de Crédito",
    "Pix",
    "PayPay",
    "Boleto",
    "Dinheiro",
  ];

  const registerService = async (event) => {
    event.preventDefault();
    form.paymentMethods = select;

    console.log(form);
    try {
      await axios.post(`${baseURL}/jobs`, form, headers);
      alert("Job criado!");
    } catch (err) {
      alert(err.response.data.message);
    }

    cleanFields();
    setSelect([]);
  };

  return (
    <main>
      <form onSubmit={registerService}>
        <h1>Cadastre o seu serviço!</h1>

        <input
          placeholder="Título do Anúncio"
          value={form.title}
          type={"text"}
          required
          name="title"
          onChange={onChange}
        />
        <input
          placeholder="Descrição do Serviço Prestado"
          value={form.description}
          type={"text"}
          required
          name="description"
          onChange={onChange}
        />
        <input
          placeholder="Preço"
          value={form.price}
          type={"number"}
          required
          name="price"
          onChange={onChange}
        />

        {paymentMethods.map((payment) => (
          <Checkbox
            key={payment}
            payment={payment}
            select={[select, setSelect, payment]}
          />
        ))}

        <input
          value={form.dueDate}
          type={"date"}
          required
          name="dueDate"
          onChange={onChange}
        />

        <button type="submit">Registrar Serviço</button>
      </form>
    </main>
  );
};

export default RegisterService;
