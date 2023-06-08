import React, { useContext } from "react";
import { useParams } from "react-router";
import { MailContext } from "../context/MailContext";

const EmailPage = () => {
  const { mailId } = useParams();
  const { state } = useContext(MailContext);

  const mailInfo = state.mailData.find(({ mId }) => mId.toString() === mailId);
  return (
    <div>
      {
        <div className="inbox-div">
          <h1>{mailInfo?.subject}</h1>
          <p>{mailInfo?.content}</p>
        </div>
      }
    </div>
  );
};

export default EmailPage;
