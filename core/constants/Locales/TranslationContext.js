import React, {createContext, useState, useContext} from 'react';
import {en} from './Locales';
import {th} from './Locales2';
import {hbr, fr} from './Locales3';
import {hind, spn} from './locales4';
import {it} from './Locales6';
import {gmn} from './Locales5';
const translations = {en, th, spn, it, gmn, hbr, fr, hind};

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
