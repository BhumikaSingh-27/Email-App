import { createContext, useEffect, useReducer } from "react";
import mails from "../data/mail";

export const MailContext = createContext();

const reducerFn = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return { ...state, mailData: action.payload };
    }
    case "DELETE_MAIL": {
      const updatedInbox = state.mailData.filter(
        ({ mId }) => mId !== action.payload.mId
      );
      console.log(updatedInbox);
      return {
        ...state,
        mailData: updatedInbox,
        trash: [...state.trash, action.payload],
      };
    }
    case "MARK_AS_READ": {
      const updatedInbox = state.mailData.map((mail) =>
        mail.mId === action.payload.mId
          ? { ...mail, unread: !mail.unread }
          : mail
      );
      return { ...state, mailData: updatedInbox };
    }
    case "REPORT_SPAM": {
      const updatedInbox = state.mailData.filter(
        (mail) => mail.mId !== action.payload.mId
      );
      return {
        ...state,
        mailData: updatedInbox,
        spam: [...state.spam, action.payload],
      };
    }
    case "STAR_EMAIL": {
      const updatedInbox = state.mailData.map((mail) =>
        mail.mId === action.payload
          ? { ...mail, isStarred: !mail.isStarred }
          : mail
      );

      return { ...state, mailData: updatedInbox };
    }

    case "CHECK_UNREAD": {
      return { ...state, isUnread: action.payload };
    }

    case "CHECK_STARED": {
      return { ...state, isStarred: action.payload };
    }
    default:
      return state;
  }
};
export const MailContextPrivider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, {
    mailData: [],
    spam: [],
    trash: [],
    isUnread: false,
    isStarred: false,
  });

  useEffect(() => {
    dispatch({ type: "GET_DATA", payload: mails });
  }, []);

  console.log(state.mailData);
  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};
