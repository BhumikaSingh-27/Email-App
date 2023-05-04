import React, { useContext } from "react";
import { MailContext } from "../context/MailContext";

const Trash = () => {
  const { state } = useContext(MailContext);
  return (
    <div>
      {state.trash.map(({ mId, subject, content }) => (
        <div className="inbox-div" key={mId}>
          <h1>{subject}</h1>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default Trash;
