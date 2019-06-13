import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default function Forms(props) {

    const onSaveClick = (data) => {
        props.onSaveClick(data.email, data.age);
    }

    const handleDeletePerson = (id) => {
        props.handleDeletePerson(id);
    }

    return (
        <div className="form-page">
            <Grid container spacing={2}>
                <Grid item xs={6}>
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
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="email"
                                                label="Email"
                                                fullWidth
                                                margin="normal"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.email && touched.email && (
                                                <div className="input-feedback">{errors.email}</div>
                                            )}
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="age"
                                                label="Age"
                                                fullWidth
                                                margin="normal"
                                                value={values.age}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.age && touched.age && (
                                                <div className="input-feedback">{errors.age}</div>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="outlined"
                                                onClick={handleReset}
                                                disabled={!dirty || isSubmitting}
                                            >Reset</Button>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                type="submit"
                                                disabled={!isValid}
                                            >Submit</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            );
                        }}
                    </Formik>
                </Grid>
                <Grid item xs={6}>
                    {props.personList.map(person => (
                        <div key={person.id}>
                            <span>{person.name} - {person.age}</span>
                            <Button
                                color="secondary"
                                style={{ marginLeft: '10px' }}
                                title="delete"
                                onClick={() => handleDeletePerson(person.id)}>
                                <Icon>delete</Icon>
                            </Button>
                        </div>
                    ))}
                </Grid>
            </Grid>
        </div>
    )
}