import React from 'react'
import { SafeAreaView } from 'react-native'
import * as yup from 'yup'

import Form from './Form'
import Input from './Input'
import Submit from './Submit'

function App() {
  return (
    <SafeAreaView>
      <Form
        initialValues={{
          username: '',
          email: 'a@a.com',
        }}
        schema={yup.object().shape({
          username: yup.string().required(),
          email: yup
            .string()
            .email('อีแมววว')
            .required('ใส่มาดิ'),
        })}
        onSubmit={value => console.log(value)}>
        <Input name="username" />
        <Input name="email" />
        <Submit>Submit</Submit>
      </Form>
    </SafeAreaView>
  )
}

export default App
