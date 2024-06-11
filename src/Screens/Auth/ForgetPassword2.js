import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";


import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomInput from "../../Components/CustomInput"
import CustomButton from '../../Components/CustomButton';


const ForgetPassword2 = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({})



    useEffect(() => {
        document.title = 'IRV Segal | Password Recovery';
    }, [])


    // const handleClick = (e) => {
    //     e.preventDefault()
    //     navigate('/forget-password3')
    // }





    const handleClick = async (event) => {
        event.preventDefault();

        const formDataMethod = new FormData();
        formDataMethod.append('email', formData.email);
        formDataMethod.append('password', formData.password);
        console.log(formData)
        document.querySelector('.loaderBox').classList.remove("d-none");

        const apiUrl = 'https://custom3.mystagingserver.site/Irving-Segal/public/api/otp_verification';


        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formDataMethod
            });

            if (response.ok === true) {


                const responseData = await response.json();
                console.log("responseData", responseData)
                localStorage.setItem('login', responseData.token);
                console.log('Login Response:', responseData);
                document.querySelector('.loaderBox').classList.add("d-none");
                navigate('/forget-password3')

            } else {
                document.querySelector('.loaderBox').classList.add("d-none");
                alert('Invalid Credentials')

                console.error('Login failed');
            }
        } catch (error) {
            document.querySelector('.loaderBox').classList.add("d-none");
            console.error('Error:', error);
        }


    };


    return (
        <>
            <AuthLayout authTitle='Verification Code' authPara='Please Check Your Email For Verification Code.' subauthPara='Your Cod is 4 digit in Length' backOption={true}>
                <form>
                    <div class="inputWrapper">
                        <label for="verificationCode" class="mainLabel">Verification Code<span>*</span></label></div>
                    {/* <div className='verification-box justify-content-between'> */}
                    {/* <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} />
                        <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} />
                        <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} />
                        <CustomInput
                            required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                                setFormData({ ...formData, code: event.target.value })
                            }} />


                        <CustomInput required id='verificationCode' type='number' labelClass='mainLabel' inputClass='mainInput text-center' onChange={(event) => {
                            setFormData({ ...formData, code: event.target.value })
                        }} /> */}
                    <CustomInput required id='userEmail' type='email' placeholder='Verification Code' labelClass='mainLabel' inputClass='mainInput' onChange={(event) => {
                        setFormData({ ...formData, password: event.target.value })
                    }} />
                    {/* </div> */}
                    <div className="d-flex align-items-baseline justify-content-between mt-1">
                        <p className='text-danger fw-bold'>Resending in 00:50</p>
                        <button type='button' className='notButton primaryColor fw-bold text-decoration-underline'>Resend Code</button>
                    </div>
                    <div className="mt-4 text-center">
                        <CustomButton type='button' variant='primaryButton' text='Continue' onClick={handleClick} />
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}



export default ForgetPassword2