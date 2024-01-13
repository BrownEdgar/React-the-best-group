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
  username: string().min(3, 'Пользователь должен содержать хотя бы 3 символов').max(15).required('Обязательное поле'),
  password: string().min(8, 'Пароль должен содержать хотя бы 8 символов').matches(/(?=.*[0-9])/, 'Пароль должен содержать хотя бы одну цифру')
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
      <h1>Вход</h1>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className="Users__formik">
          <Field type="text" name="username" placeholder="Имя пользователя или Email" required />
          <ErrorMessage name="username" component="p" className='errorMessage' />
          <Field type="password" name="password" placeholder="Пароль" required />
          <ErrorMessage name="password" component="p" className='errorMessage' />
          <a href="#">Забыли пароль?</a>
          <div className="Users__buttons">
            <Field type="submit" name="submit" value="Войти" />
            <button>Регистрация</button>
          </div>
        </Form>
      </Formik>

      <div className="Users__box">
        <h1>Пользователи</h1>
        {
          users.map(user => {
            return (<ul key={user.id} className="Users__list" >
              <li><span>Пользователь: </span> {user.username}</li>
              <li><span>Пароль: </span> {user.password}</li>
            </ul>)
          })
        }
      </div>

    </div>
  )

}



