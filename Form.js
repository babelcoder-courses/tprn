import React, { createContext } from 'react'
import { Formik } from 'formik'

export const FormContext = createContext()

export default function Form({ initialValues, schema, onSubmit, children }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}>
      {props => (
        <FormContext.Provider value={props}>{children}</FormContext.Provider>
      )}
    </Formik>
  )
}
