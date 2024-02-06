import { nanoid } from 'nanoid';

const myFirstMiddleware = (store) => (next) => (action) => {
  if (action.type === 'users/addUser') {
    action.payload.id = nanoid();
    action.payload.createdAt = new Date().getTime()
  }
  next(action)
}

const check = (store) => (next) => (action) => {
  if (action.type === 'users/deleteUser') {
    const deleted = action.payload !== 'superAdmin123';
    if (!deleted) {
      return
    }
  };
  next(action)
}

const checkUsers = (store) => (next) => (action) => {
  if (action.type === 'users/addUser') {
    const { users } = store.getState();
    const exist = users.some(user => user.name === action.payload.name);
    if (exist) {
      console.log(`${action.payload.name} is alredy with us`)
      return
    }
  }
  next(action)
}

const myMiddleWariesArray = () => [checkUsers, myFirstMiddleware, check]


export default myMiddleWariesArray