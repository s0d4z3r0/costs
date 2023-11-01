import { useEffect, useState } from "react";

const Message = ({
  type,
  msg,
  time,
  setMessage,
  setProjectMessage,
  setTextMessage,
}) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (msg) {
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
        {
          setTextMessage && setTextMessage("");
        }
        {
          setMessage && setMessage("");
        }
        {
          setProjectMessage && setProjectMessage("");
        }
      }, `${time}`);

      return () => clearTimeout(timer);
    }
  }, [msg, time, setTextMessage, setMessage, setProjectMessage]);

  return (
    <>
      {showMessage && (
        <div className="message_bg">
          <div className={`${type} message`}>
            <p>{msg}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
