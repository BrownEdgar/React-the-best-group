import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'
import './Form.scss'
import axios from 'axios'

const initialValues = {
  email: '',
  password: ''
}

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const SIGN_UP_URL = import.meta.env.VITE_SIGN_UP_URL?.replace('[API_KEY]', API_KEY);
const SIGN_IN_URL = import.meta.env.VITE_SIGN_IN_URL?.replace('[API_KEY]', API_KEY);

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().matches(/^[A-Z]/, 'must by start with upperCase').min(8).max(20).required(),
})

export default function MainForm() {



  const handleSubmit = (values, formik) => {
    const data = {
      ...values,
      returnSecureToken: true,
    }
    axios.post(SIGN_UP_URL, data)
      .then(res => console.log(res))
      .then(() => formik.resetForm())
      .catch(err => {
        const { message } = err.response.data.error
        formik.setFieldError('email', message.toLowerCase())
      })


  }

  const login = (formik) => {
    const data = {
      ...formik.values,
      returnSecureToken: true,
    }
    axios.post(SIGN_IN_URL, data)
      .then(res => console.log(res))
      .then(() => formik.resetForm())
      .catch(console.log)
  }

  return (
    <div className='Form'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={validationSchema}
      >
        {
          (formik) => {
            return (
              <Form>
                <div>
                  <Field type='email' name='email' placeholder='email' />
                  <ErrorMessage name='email' component='p' className='error' />
                </div>
                <div>
                  <Field type='password' name='password' placeholder='password' />
                  <ErrorMessage name='password' component='p' className='error' />
                </div>
                <div className='buttons'>
                  <input type="submit" value="Register" />
                  <input type="button" value="login" onClick={() => login(formik)} />
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}
