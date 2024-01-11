import { Field, Form, Formik } from 'formik'
import React from 'react'
import { number, object, string } from 'yup'

export default function App() {


  const handleSubmit = (values, formik) => {
    console.log(values)
  }

  const validationSchema = object({
    username: string().required()
  })

  return (
    <div>
      <Formik
        initialValues={{ username: '' }}
        onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={false}
        validationSchema={validationSchema}
      >
        <Form>
          <Field type="text" name="username" />
          <input type="submit" />
        </Form>
      </Formik>
    </div>
  )
}
