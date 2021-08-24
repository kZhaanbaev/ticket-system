
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Login = ({ handleOnChange, handleOnSubmit, loadForm, email, pass }) => {


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-info text-center'>Client Login</h1>
                        <hr />
                        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={handleOnChange}
                                    placeholder='Enter email'
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    name='password'
                                    value={pass}
                                    onChange={handleOnChange}
                                    placeholder='password'
                                    required
                                />
                            </Form.Group>
                            <Button type='submit'>Login</Button>
                        </Form>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="#!" onClick={ () => loadForm('reset')}>Forgot password</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    loadForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
}
