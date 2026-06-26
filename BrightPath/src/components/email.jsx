import { useState } from "react";

const Email = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const sendEmail = () => {
        const subject = `New Message from ${name}`;

        const body = 
        `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
        `;

        const mailto = `mailto:brightpathtechontario@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailto, "_blank", "noopener,noreferrer");

        setStatus("> message_sent");
    }

  return (
    <div className="contact-card">

      <div className="terminal-bar">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>

        <p>contact_protocol.exe</p>
      </div>


      <div className="terminal-content">

        <p>$ load_profile</p>
        <p className="greenText">$ connection_initialised</p>

        <p>
          NAME: <input className="emailInput" type="text" placeholder="enter_name" onChange={(e) => setName(e.target.value)} />
        </p>

        <p>
          EMAIL: <input type="email" className="emailInput" placeholder="enter_email" onChange={ (e) => setEmail(e.target.value)} />
        </p>

        <p>
          Message: <textarea className="emailInput" placeholder="enter_message" onChange={ (e) => setMessage(e.target.value)} />
        </p>

        <button className="sendEmail" onClick={sendEmail}>$ send_email</button>

        <p className="greenText">{status}</p>

      </div>

    </div>
  );
}

export default Email;