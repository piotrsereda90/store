import React,{useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useFormik  } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components'

const Form =  styled.form`
display:flex;
flex-direction: column;
border: 1px solid azure;
`
const iconUser =<FontAwesomeIcon icon={faUserCircle}/>

const validationSchema = yup.object().shape({
  firstName: yup.string()
  .required('Imię jest wymagane')
  .min(3, 'Za krótkie imię, minimum 3 znaki')
  .max(10, 'Imie może mieć maksymalnie 10 znaków'),
  lastName: yup.string()
  .required('Nazwisko jest wymagane')
  .min(3, 'Za krótkie nazwisko, minimum 2 znaki'),
  email: yup.string()
  .required('email jest wymagane')
  .email('Nie prawidłowy adres email')
});

const LoginForm = () => {
  
  // function useInput(initialValue=''){
  //   const [value, setValue] = useState('')

  //   const handelChange = e => {
  //     setValue(
  //       e.target.type==='checkbox'? e.target.checked: e.target.value
  //     );
  //   }
  //   return[value, handelChange]
  // }
  // const [firstName , handelChangeName] = useInput('')
  // const [lastName, handelChangeLastName] = useInput('')
  
 const formik = useFormik({
   initialValues:{
     firstName:'',
     lastName: '',
     email:''
   },
   validationSchema,
   onSubmit: values => {
     alert(JSON.stringify(values, null,2))
   },
 });
 const firstNameError = formik.errors.firstName? (
   <p>{formik.errors.firstName}</p>
 ):null
 const lastNameError = formik.errors.lastName? (
  <p>{formik.errors.lastName}</p>
):null
const emailError = formik.errors.email? (
  <p>{formik.errors.email}</p>
):null
return (
  <section>
  <div><span>{iconUser}</span></div>
  <Form action="" onSubmit={formik.handleSubmit}>
    <label htmlFor='firstName'></label>
    <input
      id = 'firstName'
      name='firstName'
      type='text'
      placeholder='Imię'
      onChange ={formik.handleChange}
      value = {formik.values.firstName}
    />
      {firstNameError}
       <input
      id = 'LastName'
      name='lastName'
      type='text'
      placeholder='Nazwisko'
      onChange ={formik.handleChange}
      value = {formik.lastName}
    />
      {lastNameError}
     <input
      id = 'email'
      name='email'
      type='email'
      placeholder='email'
      onChange ={formik.handleChange}
      value = {formik.email}
    />
      {emailError}
     <button type="submit">Submit</button>
  </Form>
  </section>
)
};


export default LoginForm;