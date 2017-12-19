import React from 'react';

const Login = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Log In</h1>
            <a href='/auth/google'>
                <img    src='https://techsneak.com/wp-content/uploads/2017/01/login-google.png'
                        style={{ height: '40px' }}
                        alt='Sign In With Google' />
            </a>
        </div>
    )
}

export default Login;