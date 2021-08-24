import React, { useState } from 'react';
import './entry.style.css';
import { Login } from '../../components/login/Login.comp';
import { Jumbotron } from 'react-bootstrap';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formLoad, setFormLoad] = useState('login');

    const handleOnChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case 'email': setEmail(value);
                break;
            case 'password': setPassword(value);
                break;
            default:
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        if (!email || !password) {
            alert("Enter email and password!");
        }
    }

    const handleOnResetSubmit = e => {
        e.preventDefault();
        if (!email) {
            alert("Enter email!");
        }
    }

    const loadForm = (type) => {
        setFormLoad(type);
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className='form-box'>
                {formLoad === 'login' ?
                    <Login
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        loadForm={loadForm}
                        email={email}
                        pass={password}
                    />
                    :
                    <ResetPassword
                        handleOnChange={handleOnChange}
                        handleOnResetSubmit={handleOnResetSubmit}
                        loadForm={loadForm}
                        email={email}
                    />
                }
            </Jumbotron>
        </div>
    )
}
