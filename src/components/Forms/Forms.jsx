import React from 'react'
import './Forms.scss'
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'
import { useState } from 'react';
const initialValues = {
  title: '',
  price: '',
  category: '',
  expiration: ''
}
export default function Forms() {
  const [products, setProducts] = useState([
    {
      id: nanoid(6),
      title: 'Wine',
      price: 1200,
      category: 'Alcohol',
      expiration: '2024-01-28'
    },
    {
      id: nanoid(6),
      title: 'Milk',
      price: 1200,
      category: 'Alcohol',
      expiration: '2024-01-28'
    }
  ]);
  const handleSubmit = (values, { resetForm }) => {
    const expirationDate = new Date(values.expiration);
    expirationDate.setDate(expirationDate.getDate() + 5);
    const product = {
      id: nanoid(6),
      ...values,
      expiration: expirationDate.toISOString().split('T')[0]
    }
    setProducts([...products, product])
    resetForm();
  }
  return (
    <div className='Forms'>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className='Forms__Form'>
          <Field type="text" name="title" placeholder="enter product title" />
          <Field type="number" name="price" placeholder="enter price" />
          <Field as="select" name="category">
            <option value="Fruits">Fruits</option>
            <option value="Meat">Meat</option>
            <option value="Alcohol">Alcohol</option>
          </Field>
          <Field type="date" name="expiration" />
          <Field className="submit" type="submit" name="submit" />
        </Form>
      </Formik>
      <div className="Forms__Products">
      {products.map(product =>{
        return(
          <div className="Forms__content" key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.expiration}</p>
          </div>
        )
      }) }       
      </div>
    </div>
  )
  
}
