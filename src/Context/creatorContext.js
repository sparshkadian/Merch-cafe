import { createContext, useState, useEffect } from 'react';

const CreatorContexts = createContext();

export const CreatorProvider = ({ children }) => {
  const [creatorData, setCreatorData] = useState([]);
  const [creatorPhoto, setCreatorPhoto] = useState();

  useEffect(() => {
    getCreators();
  }, []);

  const getCreators = async () => {
    const res = await fetch('http://localhost:7000/api/creators');
    const {
      data: { creators },
    } = await res.json();
    setCreatorData(creators);
  };

  const getCreatorPhoto = (photoUrl) => {
    setCreatorPhoto(photoUrl);
  };

  return (
    <CreatorContexts.Provider
      value={{ creatorData, creatorPhoto, getCreatorPhoto }}
    >
      {children}
    </CreatorContexts.Provider>
  );
};

export default CreatorContexts;
