import React, { useContext } from "react";
import { MailContext } from "../context/MailContext";
import { Link } from "react-router-dom";

const Inbox = () => {
  const { state, dispatch } = useContext(MailContext);

  const unreadMails = state.mailData.filter(({ unread }) => unread);

  return (
    <div>
      <h1>Bhumika's mail Box</h1>

      <fieldset>
        <legend>Filters</legend>
        <input
          type="checkbox"
          value="unread"
          onChange={(e) =>
            dispatch({ type: "CHECK_UNREAD", payload: e.target })
          }
        />
        Unread Mails
        <input
          type="checkbox"
          value="isStarred"
          onChange={(e) =>
            dispatch({ type: "CHECK_STARED", payload: e.target })
          }
        />
        Starred mails
      </fieldset>
      <h2>Unread:{unreadMails.length}</h2>
      {state.mailData.map((mail) => {
        const { mId, unread, isStarred, subject, content } = mail;

        return (
          <div className="inbox-div" key={mId}>
            <h3>{subject}</h3>
            <p>{content}</p>
            <Link to={`/inbox/${mId}`}>View Details</Link>
            <button
              onClick={() => dispatch({ type: "DELETE_MAIL", payload: mail })}
            >
              Delete
            </button>
            <button
              onClick={() => dispatch({ type: "MARK_AS_READ", payload: mail })}
            >
              {unread ? "Mark as Read" : "Mark as Unread"}
            </button>
            <button
              onClick={() => dispatch({ type: "REPORT_SPAM", payload: mail })}
            >
              Report Spam
            </button>
            <span
              onClick={() => dispatch({ type: "STAR_EMAIL", payload: mId })}
            >
              {isStarred ? "Star ⭐" : "⭐Starred"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Inbox;
