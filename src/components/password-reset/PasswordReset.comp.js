
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({ handleOnResetSubmit, handleOnSubmit, loadForm, email }) => {


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-info text-center'>Reset Password</h1>
                        <hr />
                        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={handleOnResetSubmit}
                                    placeholder='Enter email'
                                    required
                                />
                            </Form.Group>
                            
                            <Button type='submit'>Reset Password</Button>
                        </Form>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="#!" onClick={() => loadForm('login')}>Login Now</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    loadForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}
