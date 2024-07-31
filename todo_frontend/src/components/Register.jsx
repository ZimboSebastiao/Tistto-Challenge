// components/Register.jsx

const handleRegister = async (nome, email, senha) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: nome, email: email, password: senha }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Cadastro falhou");
    }

    return true;
  } catch (error) {
    console.error("Erro ao fazer o cadastro:", error);
    return false;
  }
};

export default handleRegister;
