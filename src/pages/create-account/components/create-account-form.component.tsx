import React from "react";

interface Account {
  type: string;
  name: string;
}

export const CreateAccountFormComponent: React.FC = () => {
  const [dataForm, setDataForm] = React.useState<Account>({
    name: "",
    type: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ dataForm });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <select name="type" onChange={handleChange}>
            <option selected disabled>
              Seleccionar
            </option>
            <option value="1">Cuenta Corriente</option>
            <option value="2">Cuenta de Ahorro</option>
            <option value="3">Cuenta de Nómina</option>
          </select>
        </div>
        <div>
          <label id="alias">Alias: </label>
          <input type="text" name="name" id="alias" onChange={handleChange} />
        </div>
        <button>GUARDAR</button>
      </form>
    </div>
  );
};
