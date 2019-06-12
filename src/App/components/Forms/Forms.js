import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Forms(props) {

    const onSaveClick = (data) => {
        props.onSaveClick(data.email, data.age);
    }

    const handleDeletePerson = (id) => {
        props.handleDeletePerson(id);
    }

    return (
        <div className="form-page">
            <div className="row">
                <div className="col-sm-6">
                    <Formik
                        initialValues={{ email: '', age: '' }}
                        onSubmit={(values, { resetForm }) => {
                            resetForm();
                            onSaveClick(values);
                        }}
                        validationSchema={
                            Yup.object().shape({
                                email: Yup.string()
                                    .email()
                                    .required('Required'),
                                age: Yup.number()
                                    .typeError('age must be a number')
                                    .required('Required'),
                            })
                        }
                    >
                        {props => {
                            const {
                                values,
                                isValid,
                                touched,
                                errors,
                                dirty,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                handleReset,
                            } = props;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email" style={{ display: 'block' }}>Email</label>
                                                <input
                                                    id="email"
                                                    placeholder="Enter your email"
                                                    type="text"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.email && touched.email ? 'form-control error' : 'form-control'
                                                    }
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="age" style={{ display: 'block' }}>Age</label>
                                                <input
                                                    id="age"
                                                    placeholder="Enter your age"
                                                    type="text"
                                                    value={values.age}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.age && touched.age ? 'form-control error' : 'form-control'
                                                    }
                                                />
                                                {errors.age && touched.age && (
                                                    <div className="input-feedback">{errors.age}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <button
                                                type="button"
                                                className="outline"
                                                onClick={handleReset}
                                                disabled={!dirty || isSubmitting}
                                            >Reset</button>
                                            <button
                                                type="submit"
                                                disabled={!isValid}
                                            >Submit</button>
                                        </div>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </div>
                <div className="col-sm-6">
                    {props.personList.map(person => (
                        <div key={person.id}>
                            <span>{person.name} - {person.age}</span>
                            <button
                                style={{ marginLeft: '10px' }}
                                title="delete"
                                onClick={() => handleDeletePerson(person.id)}>
                                x</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}