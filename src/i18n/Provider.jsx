

import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import messages from './messages'
import LANGUAGES from './locale'

// locale = 'en-us'
export default function Provider({ children, locale = LANGUAGES.ENGLISH }) {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}
