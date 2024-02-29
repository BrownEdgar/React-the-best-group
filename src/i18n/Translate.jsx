import { FormattedMessage } from 'react-intl'


const Translate = ({ id, value = {} }) => {
  console.log(id)
  return <FormattedMessage id={id} values={{ ...value }} />
}

export default Translate