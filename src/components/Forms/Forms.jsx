import './Forms.scss'
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { date, number, object, string } from 'yup';

const initialValues = {
  title: '',
  price: '',
  category: '',
  expiration: ''
}

const validationSchema = object({
  title: string().required(),
  price: number().required(),
  expiration: date().required()
})


export default function Forms() {
  const [products, setProducts] = useState([
    {
      id: nanoid(6),
      title: 'Milk',
      price: 1200,
      category: 'Dairy',
      expiration: '2024-01-28'
    },
    {
      id: nanoid(6),
      title: 'Bread',
      price: 180,
      category: 'Baking',
      expiration: '2024-01-23'
    },
    {
      id: nanoid(6),
      title: 'Chocolate',
      price: 600,
      category: 'Candies',
      expiration: '2024-02-01'
    }
  ]);

  const handleSubmit = (values, { resetForm }) => {
    const expirationDate = new Date(values.expiration);
    expirationDate.setDate(expirationDate.getDate() + 5);

    console.log(expirationDate.toISOString());

    const product = {
      id: nanoid(6),
      ...values,
      expiration: expirationDate.toISOString().split('T')[0]
    };

    setProducts([...products, product]);
    resetForm();
  };

  return (
    <div className="Forms">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className='Forms__form'>
          <h1>Product Registration</h1>
          <Field type="text" name="title" placeholder="Product Title" />
          <Field type="number" name="price" placeholder="Price" />
          <Field as="select" name="category">
            <option value="dairy">Dairy</option>
            <option value="bakery">Candies</option>
            <option value="drinks">Baking</option>
            <option value="drinks">Drinks</option>
          </Field>
          <Field type="date" name="expiration" />
          <Field type="submit" name="submit" />
        </Form>
      </Formik>

      <div className="Forms__products">
        {
          products.map(product => {
            return <div className="Forms__box" key={product.id}>
              <h3>Expiration Date: {product.expiration}</h3>
              <h2>Title: {product.title}</h2>
              <h3>Price: ֏{product.price}</h3>
              <h3>Category: {product.category}</h3>
            </div>
          })
        }
      </div>

    </div>

  );
}

