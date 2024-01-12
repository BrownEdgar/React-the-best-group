import React from "react";
import "./Formik.css";
import { useState } from "react";
import {Field, Form, Formik} from "formik";


export default function FormikTest() {
    const handleSubmit = (values) => {
        console.log(values);
    }

  return (
    <div className="container">
        <Formik initialValues={{
            username: "",
            password: ""
        }}
        onSubmit={handleSubmit}
        >
            <Form>
                <h2>Вход</h2>
                <Field type="text" name="username" placeholder="Имя пользователя email"/>
                <Field type="password" name="password" placeholder="Пароль"/>
                <p>
                    Забыли пароль?
                </p>
                <div className="buttons">
                    <Field type="submit" name="submit" value="Войти"/>
                    <a href="">Регистрация</a>
                </div>
            </Form>
        </Formik>
    </div>
  )
}
