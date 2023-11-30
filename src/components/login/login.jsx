import React, { useContext } from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Layout from '../layout/layout';
import { AppContext } from '../context/contextProvider';
import Spinner from '../spinner';
import { useState } from 'react';

const Login = () => {
    const { isLogin, setIsLogin } = useContext(AppContext);
    // const [isLoading, setIsLoading] = useState(true);

    const handleLogin = () => {
        setIsLogin(true);
    };
    return (
        <Layout>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <MDBInput wrapperClass='mb-4' label='email' id='form1' type='email' />
                <MDBInput wrapperClass='mb-4' label='password' id='form2' type='password' />

                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">FORGET PASSWORD</a>
                </div>

                <MDBBtn className="mb-4" onClick={handleLogin}>LOGIN</MDBBtn>

                <div className="text-center">
                    <p>NOT REGISTERED? <a href="#!">REGISTER</a></p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>

                    </div>
                </div>
            </MDBContainer>
        </Layout>);
}

export default Login;