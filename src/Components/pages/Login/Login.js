import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import styles from './loginStyles.module.css';
import { connect } from 'react-redux';
import { login } from '../../../store/userActions';
import { Link } from 'react-router-dom'






function Login(props) {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });


    const [errors, setErrors] = useState({
        email: null,
        password: null
    });


    const handleSubmit = () => {
        const { email, password } = values;

        setErrors({
            email: email ? null : 'Email is required',
            password: password ? null : 'Password is required'
        });

        if (email && password) {
            props.login(values);
        }


    };

    const handleChange = ({ target: { name, value } }) => {
        setValues({
            ...values,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: null
        });

    };

    return (
        <div className={styles.main}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={8} md={6}>
                        <Form >
                            <h3 className={styles.heading}>Login</h3>

                            <Form.Group>
                                <Form.Control
                                    className={errors.email ? styles.invalid : ''}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />

                                {
                                    <Form.Text className="text-danger" >
                                        {errors.email}
                                    </Form.Text>
                                }
                            </Form.Group>



                            <Form.Group>
                                <Form.Control
                                    className={errors.password ? styles.invalid : ''}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />


                                {
                                    <Form.Text className="text-danger">
                                        {errors.password}
                                    </Form.Text>
                                }

                            </Form.Group>


                            <div className={styles.loginContainer}>
                                <Button variant="primary"
                                    onClick={handleSubmit}
                                >
                                    LogIn
                                </Button>
                            </div>
                            <Link
                                to='/register'> Don't have account yet? Register now!
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(Login);
