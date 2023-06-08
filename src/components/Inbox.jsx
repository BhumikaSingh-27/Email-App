import React, { useContext } from "react";
import { MailContext } from "../context/MailContext";
import { Link } from "react-router-dom";

const Inbox = () => {
  const { state, dispatch } = useContext(MailContext);

  const unreadMails = state.mailData.filter(({ unread }) => unread);

  const filterUnread = state.isUnread
    ? state.mailData.filter(({ unread }) => unread)
    : [...state.mailData];
  const filterStarr = state.isStarred
    ? filterUnread.filter(({ isStarred }) => isStarred)
    : [...filterUnread];

  //   if (s) {
  //     const updatedInbox = state.mailData.filter((mail) => mail.unread);
  //     return { ...state, mailData: updatedInbox, filterData: updatedInbox };
  //   } else {
  //     return { ...state, mailData: mails };
  //   }
  // if (action.payload.checked) {
  //     const updatedInbox = state.filterData.filter(
  //       ({ isStarred }) => isStarred
  //     );

  //     return { ...state, mailData: updatedInbox };
  //   } else {
  //     return { ...state, mailData: state.filterData };
  //   }

  return (
    <div className="email-container">
      <div>
        <fieldset>
          <legend>Filters</legend>
          <input
            type="checkbox"
            value="unread"
            checked={state.isUnread}
            onChange={(e) =>
              dispatch({ type: "CHECK_UNREAD", payload: e.target.checked })
            }
          />
          Show Unread Mails
          <input
            type="checkbox"
            value="isStarred"
            checked={state.isStarred}
            onChange={(e) =>
              dispatch({ type: "CHECK_STARED", payload: e.target.checked })
            }
          />
          Show Starred mails
        </fieldset>
        <h2>Unread:{unreadMails.length}</h2>

        {filterStarr.map((mail) => {
          const { mId, unread, isStarred, subject, content } = mail;

          return (
            <div className="inbox-div" key={mId}>
              <h3>{subject}</h3>
              <p>{content}</p>
              <div className="inner-div">
                <Link to={`/inbox/${mId}`}>View Details</Link>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_MAIL", payload: mail })
                  }
                >
                  Delete
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "MARK_AS_READ", payload: mail })
                  }
                >
                  {unread ? "Mark as Read" : "Mark as Unread"}
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "REPORT_SPAM", payload: mail })
                  }
                >
                  Report Spam
                </button>
                <span
                  onClick={() => dispatch({ type: "STAR_EMAIL", payload: mId })}
                >
                  {isStarred ? "⭐Starred" : "Star ⭐"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
