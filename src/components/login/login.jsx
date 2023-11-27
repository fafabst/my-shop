import React, { useContext } from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Layout from '../layout/layout';
import { AppContext } from '../../App';

const Login = () => {
    const { setIsLogin } = useContext(AppContext)
    return (
        <Layout>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <MDBInput wrapperClass='mb-4' label='ایمیل' id='form1' type='email' />
                <MDBInput wrapperClass='mb-4' label='رمز عبور' id='form2' type='password' />

                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">فراموشی رمز عبور</a>
                </div>

                <MDBBtn onClick={() => setIsLogin(true)} className="mb-4">ورود</MDBBtn>

                <div className="text-center">
                    <p>هنوز عضو نشدید؟ <a href="#!">ثبت نام</a></p>

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