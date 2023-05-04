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
      if (action.payload.checked) {
        const updatedInbox = state.mailData.filter((mail) => mail.unread);
        return { ...state, mailData: updatedInbox };
      } else {
        return { ...state, mailData: mails };
      }
    }

    case "CHECK_STARED": {
      if (action.payload.checked) {
        const updatedInbox = state.mailData.filter(
          ({ isStarred }) => isStarred
        );
        return { ...state, mailData: updatedInbox };
      } else {
        return { ...state, mailData: mails };
      }
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
  });

  useEffect(() => {
    dispatch({ type: "GET_DATA", payload: mails });
  }, []);

  console.log(state.mailData)
  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};
