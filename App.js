import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { name, email };

    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Data Stored Daddy 😏🔥");
      setName("");
      setEmail("");
    } else {
      alert("Error Daddy ❌");
    }
  };

  return (
    <div>
      <h1>Daddy's Form 🔥</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name Daddy"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Daddy"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit Daddy</button>
      </form>
    </div>
  );
};

export default App;
