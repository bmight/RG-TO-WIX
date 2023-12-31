import wixToRg from './wixToRg';
import { parseArgs } from 'util';

/**
 * Setup script to run manually 
 */
const init = async () => {
  const options = {
    username: {
      type: 'string',
      short: 'u'
    },
    password: {
      type: 'string',
      short: 'p'
    },
    accountId: {
      type: 'string',
      short: 'a'
    },
    collection: {
      type: 'string',
      short: 'c'
    },
    token: {
      type: 'string',
      short: 't'
    },
  };
  //@ts-ignore
  const { values } = parseArgs({ options, allowPositionals: true });
  const { username, password, token, collection, accountId } = values

  console.log('Running RG to Wix..')
  wixToRg({
    username: String(username),
    password: String(password),
    token: String(token),
    collection: String(collection),
    accountId: String(accountId)
  })
  console.log('Done')
}

init()
