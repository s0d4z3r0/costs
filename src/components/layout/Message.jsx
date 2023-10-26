import { useEffect, useState } from "react";

const Message = ({ type, msg }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if(msg){
    setShowMessage(true);

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
    }
  }, [msg]);

  return (
    <>
      {showMessage && (
        <div className={`${type} message`}>
          <p>{msg}</p>
        </div>
      )}
    </>
  );
};

export default Message;
