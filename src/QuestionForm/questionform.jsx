import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './questionform.css';

export function QuestionForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState("");
    const [question, setQuestion] = useState("");
    const [emailPristine, setEmailPristine] = useState(true);
    const [questionPristine, setQuestionPristine] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useRef();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailPristine(false);
    };
    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
        setQuestionPristine(false);
    }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const isEmailError = !validateEmail(email) && !emailPristine;
    const isQuestionError = question === '' && !questionPristine;

    function submitForm(e){
        e.preventDefault();
        if(isQuestionError || isEmailError || emailPristine || questionPristine){
            toast.warn('Please fill out entire form.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        setIsSubmitting(true);
        // send email
        emailjs.sendForm('service_hs5kobd', 'template_qjsz1kg', form.current, '1UyyYt9zfJcO2RJyX')
            .then((response) => {
                toast.success('Email Sent Successfully. We will contact you shortly.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setIsSubmitting(false);
            }, (error) => {
                toast.error('Failed to send. Please try again or contact info@basislending.com for additional assistance.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setIsSubmitting(false);
        });
    }

    return (
        <div className="questionform">
            <div className="centered-form-container">
                <div className="question-text">
			        <span>Have a Quick Question? </span><br /><span>Ask Us Here.</span>
                </div>
                <form ref={form}>
                    <FormControl>
                        <FormLabel marginTop="16px">Name</FormLabel>
                        <Input type='text' name="from_name" value={name} onChange={handleNameChange} />
                    </FormControl>
                    <FormControl marginTop="16px" isRequired isInvalid={isEmailError}>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' name="email" value={email} onChange={handleEmailChange} />
                        {isEmailError ? (<FormErrorMessage>Valid email is required.</FormErrorMessage>): null}
                    </FormControl>
                    <FormControl>
                        <FormLabel marginTop="16px">Phone</FormLabel>
                        <Input type='text' name="phone" value={phone} onChange={handlePhoneChange} />
                    </FormControl>
                    <FormControl isRequired isInvalid={isQuestionError}>
                        <FormLabel marginTop="16px">Question</FormLabel>
                        <Textarea value={question} name="message" onChange={handleQuestionChange} />
                        {isQuestionError ? (<FormErrorMessage>Questions are required.</FormErrorMessage>) : null}
                    </FormControl>

                    <div className="form-footer">
                        <span>*We will never sell your information or spam you.</span> <br />
                        <div className="send-text">Send</div>
                        <Button
                            mt={4}
                            colorScheme='teal'
                            isLoading={isSubmitting}
                            disabled={isQuestionError || isEmailError || emailPristine || questionPristine}
                            onClick={submitForm}
                            type='submit'
                        >
                            <svg class="Union_1" viewBox="-1338.601 -1831 21.001 21">
                                <path id="Union_1" d="M -1324.600219726562 -1813.5 L -1324.600219726562 -1819.05029296875 L -1332.575073242188 -1811.075439453125 C -1333.942260742188 -1809.708374023438 -1336.158081054688 -1809.708374023438 -1337.525146484375 -1811.075439453125 C -1338.892211914062 -1812.442504882812 -1338.892211914062 -1814.658325195312 -1337.525146484375 -1816.025390625 L -1329.55029296875 -1824.000366210938 L -1335.1005859375 -1824.000366210938 C -1337.03369140625 -1824.000366210938 -1338.6005859375 -1825.567260742188 -1338.6005859375 -1827.50048828125 C -1338.6005859375 -1829.432739257812 -1337.03369140625 -1830.999633789062 -1335.1005859375 -1830.999633789062 L -1321.10009765625 -1830.999633789062 C -1319.167846679688 -1830.999633789062 -1317.599975585938 -1829.432739257812 -1317.599975585938 -1827.50048828125 L -1317.599975585938 -1813.5 C -1317.599975585938 -1811.56689453125 -1319.167846679688 -1810 -1321.10009765625 -1810 C -1323.033325195312 -1810 -1324.600219726562 -1811.56689453125 -1324.600219726562 -1813.5 Z">
                                </path>
                            </svg>
                        </Button>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </form>
            </div>
	    </div>
    );
}