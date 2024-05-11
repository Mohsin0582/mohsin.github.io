import { useState } from 'react';
import { ContactContext } from './Contexts';

const ContactContextProvider = ({ children }) => {
  const [close, setClose] = useState<boolean>(false);

  const handleContact = () => {
    setClose((prevClose) => !prevClose);
  };
  return (
    <ContactContext.Provider value={{ close, setClose, handleContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContextProvider };
