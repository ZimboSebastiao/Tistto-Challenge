import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import handleLogin from "../components/Login";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("Tentando logar com:", { username, password });
    const success = await handleLogin(username, password);
    if (success) {
      console.log("Login bem-sucedido!");
      navigate("/home");
    } else {
      console.log("Falha no login");
      setError("Falha no login. Por favor, verifique suas credenciais.");
    }
  };

  const handleCriarConta = () => {
    navigate("/cadastro");
  };

  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.background =
    "linear-gradient(80deg, rgba(191,113,209,1) 0%, rgba(255, 152, 216, 0.9) 60%, rgba(255, 152, 216, 1) 100%)";

  return (
    <StyledLogin>
      <div className="imagem-fundo"></div>
      <p>Bem-vindo de Volta!</p>
      <p className="titulo">Por Favor, Faça o Login.</p>

      {/* INPUTS DE ENTRADA */}
      <form className="inputs" onSubmit={onLoginSubmit}>
        <input
          className="entrada"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="entrada"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="botao">
          ENTRAR
        </button>
        {error && <p className="error">{error}</p>}
        <div className="linha-com-texto">
          <hr className="linha-horizontal" />
          <span className="texto-no-meio">Ou</span>
          <hr className="linha-horizontal" />
        </div>
        <button className="botao-criar" onClick={handleCriarConta}>
          CRIAR UMA CONTA
        </button>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  img {
    max-width: 100%;
  }
  .imagem-fundo {
    background-image: url("../../images/pc.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 368px;
    height: 506px;
  }
  .titulo {
    font-size: 21px;
    font-weight: bold;
    padding: 0%;
    margin: 0%;
    padding-bottom: 15px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 400px;
  }
  .entrada {
    margin-bottom: 50px;
    padding: 20px;
    border: 1px solid #fff;
    border-radius: 25px;
    background: #fff;
    font-size: 16px;
    outline: none;
  }

  .entrada:focus {
    border: 1px solid #fff; /* Mantém a cor da borda ao focar */
    box-shadow: none;
  }

  .botao {
    background-color: #b64ccf;
    padding: 15px;
    border: 1px solid #b64ccf;
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
    border-radius: 25px;
    outline: none;
    margin-bottom: 40px;
  }
  .botao-criar {
    background-color: rgba(221, 220, 221, 0.5);
    padding: 15px;
    border: 1px solid rgba(221, 220, 221, 0.5);
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
    border-radius: 25px;
    outline: none;
    margin-bottom: 40px;
  }
  .linha-com-texto {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }

  .linha-horizontal {
    flex: 1;
    border: 0;
    border-top: 1px dashed #fff;
    margin: 0 10px;
  }

  .texto-no-meio {
    white-space: nowrap;
    color: #fff;
    font-size: 16px;
  }
  .error {
    color: #bd3030;
    margin-top: 10px;
    background-color: #ffff;
    padding: 15px;
    border-radius: 15px;
  }
`;
