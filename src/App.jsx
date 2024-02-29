import React, { useState } from 'react'
import LANGUAGES from './i18n/locale'
import Provider from './i18n/Provider';
import Translate from './i18n/Translate';

import './App.scss'

export default function App() {
  const [locale, setLocale] = useState(LANGUAGES.ENGLISH);


  const handleChange = (e) => {
    const { value } = e.target;
    setLocale(value)
  }


  return (
    <Provider locale={locale}>
      <div className='App'>
        <select name="languages" id="languages" onChange={handleChange}>
          <option value="en-us">en</option>
          <option value="ru-ru">ru</option>
          <option value="am-am">arm</option>
        </select>
        <h1>
          <Translate id='title' value={
            {
              pathen: 'secret word for english',
              patham: 'գաղտնաբառ բղդո5400',
            }
          } />
        </h1>
        <p>
          <Translate id='description' />
        </p>
      </div>
    </Provider>

  )
}
