import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import * as types from './constants';


const initialState = {
  song: {
    title: "Nocturne In A Minor",
    artist: "Unknown",
    link: "https://www.dl.dropboxusercontent.com/s/edek16sfvwl4jsh/NocturneInAMinor.mp3?dl=0",
  }
};


const GlobalContext = createContext(initialState);


const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetTitle = (title) => {
    dispatch({
      type: types.SET_TITLE,
      payload: title,
    });
  };

  const handleSetArtist = (artist) => {
    dispatch({
      type: types.SET_ARTIST,
      payload: artist,
    });
  };

  const handleSetLink = (link) => {
    dispatch({
      type: types.SET_LINK,
      payload: link,
    });
  };


  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setTitle: handleSetTitle,
        setArtist: handleSetArtist,
        setLink: handleSetLink,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext, GlobalProvider, useGlobalContext };