import React from 'react';
import {useField, Formik, Form} from 'formik';

export const FormikComponent = ({val, children, funcSubmit}) => {
    return (
        <Formik
            initialValues={{...val}}
            validateOnBlur
            onSubmit={(values) => {
                funcSubmit(values)
            }}
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    {children}
                </Form>
            )}
        </Formik>
    );
};

export const Input = ({ ...props}) => {
    const [field] = useField(props);
    return (
        <label>
            <input {...field} {...props} />
        </label>
    );
};
export const Textarea = ({ ...props}) => {
    const [field] = useField(props);
    return (
        <label>
            <textarea {...field} {...props} />
        </label>
    );
};
