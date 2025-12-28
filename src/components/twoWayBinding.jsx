import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = () => {
    setSubmittedName(name);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <p>Your name is: {submittedName}</p>
    </div>
  );
}

export default Form;
