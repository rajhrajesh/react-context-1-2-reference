import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'TA',
  changeLanguage: () => {},
})

export default LanguageContext
