import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEMailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui)
    console.log(msgError)

    const [formValues, handleInputChange] = useForm({
        name: 'Maximiliano',
        email: 'maxifiordomo@gmail.com',
        password1: '123456',
        password2: '123456',
    })

    const { name, email, password1, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password1, password2)

        if (isFormValid()) {
            dispatch(startRegisterWithEMailPasswordName(email, password1, email));
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('name is required more characters'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false;
        } else if (password1 !== password2 || password1 < 5) {
            dispatch(setError('Password should be at least 6 characters'))
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster">
                {
                    msgError && (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={name}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password1}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link to="/auth/login"
                    className="link">
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
