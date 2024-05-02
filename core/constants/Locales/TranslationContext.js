import React, {createContext, useState, useContext} from 'react';
import {en, th, spn} from './Locales';
import {it, gmn} from './Locales2';
import {hbr, fr} from './Locales3';
import {hind} from './locales4';

const translations = {en, th, spn, it, gmn, hbr, fr, hind}; // Add other translations here

const TranslationContext = createContext();

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({
  defaultTranslation = 'en',
  children,
  userTranslation,
}) => {
  const [translation, setTranslation] = useState(
    userTranslation || defaultTranslation,
  );

  return (
    <TranslationContext.Provider
      value={{translation: translations[translation], setTranslation}}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
