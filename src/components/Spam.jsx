import React, { useContext } from "react";
import { MailContext } from "../context/MailContext";

const Spam = () => {
  const { state } = useContext(MailContext);
  return (
    <div>
      {state.spam.map(({ mId, subject, content }) => (
        <div className="inbox-div" key={mId}>
          <h1>{subject}</h1>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Spam;
