import './Users.scss'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from 'yup'
import { nanoid } from 'nanoid'


const initialValues = {
  username: '',
  password: '',
}

const validationSchema = object({
  username: string().min(3).max(15).required(),
  password: string().min(8).matches(/(?=.*[0-9])/, 'Password must contain at least one number')
})

export default function Users() {

  const [users, setUsers] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    const user = {
      id: nanoid(6),
      ...values
    }

    setUsers([...users, user])

    resetForm();
  }

  return (
    <div className="Users">
      <h1>Log In</h1>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className="Users__formik">
          <Field type="text" name="username" placeholder="Your Username" required />
          <ErrorMessage name="username" component="p" className='errorMessage' />
          <Field type="password" name="password" placeholder="Your Password" required />
          <ErrorMessage name="password" component="p" className='errorMessage' />
          <a href="#">Forgot Your Password?</a>
          <div className="Users__buttons">
            <Field type="submit" name="submit" value="Sign In" />
            <button>Sign Up</button>
          </div>
        </Form>
      </Formik>

      <div className="Users__box">
        <h1>User List</h1>
        {
          users.map(user => {
            return (<ul key={user.id} className="Users__list" >
              <li><span>Username: </span> {user.username}</li>
              <li><span>Password: </span> {user.password}</li>
            </ul>)
          })
        }
      </div>

    </div>
  )

}