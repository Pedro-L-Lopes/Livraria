// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Alert from "../components/Alert";

const Contato = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [typeFeedback, setTypeFeedback] = useState();
  const [alert, setAlert] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 3000);
    }
  };

  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl mt-10">Deixe seu feedback</h1>

      <form
        onSubmit={handleSubmit}
        className={`bg-slate-100 p-8 rounded-lg shadow-lg max-w-lg w-full mt-5 ${
          alert && "border border-red-600"
        } ${success && "border border-green-600"}`}
      >
        {alert && (
          <Alert text={"Por favor preencha todos os campos"} type={false} />
        )}

        {success && (
          <Alert
            text={`Muito obrigado pelo feedback :)`}
            text2={"Redirecionando para a pagina inicial..."}
            type={true}
          />
        )}

        <label htmlFor="nome" className="block mb-2">
          Nome
          <input
            type="text"
            className="form-input mt-1 block w-full border-2 rounded-md p-2"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label htmlFor="email" className="block mb-2">
          Email
          <input
            type="email"
            className="form-input mt-1 block w-full border-2 rounded-md p-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <fieldset className="mb-4">
          <legend className="block mb-2">Tipo de feedback:</legend>
          <div className="flex flex-wrap">
            <label htmlFor="elogio" className="flex items-center mr-4">
              <input
                type="radio"
                name="opcao"
                value="elogio"
                className="mr-2"
                checked
                onChange={() => setTypeFeedback("elogio")}
              />
              Elogio
            </label>

            <label htmlFor="critica" className="flex items-center mr-4">
              <input
                type="radio"
                name="opcao"
                value="critica"
                className="mr-2"
                onChange={() => setTypeFeedback("critica")}
              />
              Crítica
            </label>

            <label htmlFor="sugestao" className="flex items-center mr-4">
              <input
                type="radio"
                name="opcao"
                value="sugestao"
                className="mr-2"
                onChange={() => setTypeFeedback("sugestao")}
              />
              Sugestão
            </label>

            <label htmlFor="outro" className="flex items-center">
              <input
                type="radio"
                name="opcao"
                value="outro"
                className="mr-2"
                onChange={() => setTypeFeedback("outro")}
              />
              Outro
            </label>
          </div>
        </fieldset>

        <label htmlFor="mensagem" className="block mb-2">
          Mensagem
          <textarea
            id="mensagem"
            cols="30"
            rows="5"
            className="mt-1 block w-full border-2 rounded-md p-2"
            placeholder="Deixe sua mensagem aqui..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};

export default Contato;
