import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.background =
    "linear-gradient(80deg, rgba(191,113,209,1) 0%, rgba(224, 134, 207, 0.9) 40%, rgba(255, 152, 216, 0.9) 60%, rgba(255, 152, 216, 1) 100%)";

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <StyledCadastro>
      <div className="imagem-fundo"></div>
      <p>Olá 👋!</p>
      <p className="titulo">Vamos começar</p>

      {/* INPUTS DE ENTRADA */}
      <div className="inputs">
        <input className="entrada" placeholder="Nome" />
        <input className="entrada" type="email" placeholder="E-mail" />
        <input className="entrada" type="password" placeholder="Senha" />
        <button className="botao">CADASTRAR</button>

        <div className="linha-com-texto">
          <hr className="linha-horizontal" />
          <span className="texto-no-meio">Ou</span>
          <hr className="linha-horizontal" />
        </div>
        <button className="botao-criar" onClick={handleLogin}>
          FAZER LOGIN
        </button>
      </div>
    </StyledCadastro>
  );
}

const StyledCadastro = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  img {
    max-width: 100%;
  }
  .imagem-fundo {
    background-image: url("../../images/cadastro.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 368px;
    height: 268px;
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
    border: 1px solid #fff;
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
`;
