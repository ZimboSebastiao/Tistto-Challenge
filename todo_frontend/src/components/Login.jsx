const handleLogin = async (username, password) => {
  try {
    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default handleLogin;
