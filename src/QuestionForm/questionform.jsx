import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React, { useRef, useState } from 'react';

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
        setIsSubmitting(true);
        // send email
        setIsSubmitting(false);
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
                        <Input placeholder="Enter the email you want me to respond to." type='email' name="email" value={email} onChange={handleEmailChange} />
                        {isEmailError ? (<FormErrorMessage>Valid email is required.</FormErrorMessage>): null}
                    </FormControl>
                    <FormControl>
                        <FormLabel marginTop="16px">Phone</FormLabel>
                        <Input type='text' name="phone" value={phone} onChange={handlePhoneChange} />
                    </FormControl>
                    <FormControl isRequired isInvalid={isQuestionError}>
                        <FormLabel marginTop="16px">Question</FormLabel>
                        <Textarea placeholder="Provide some information so I can start to help." value={question} name="message" onChange={handleQuestionChange} />
                        {isQuestionError ? (<FormErrorMessage>Questions are required.</FormErrorMessage>) : null}
                    </FormControl>

                    <Button
                        mt={4}
                        colorScheme='teal'
                        isLoading={isSubmitting}
                        disabled={isQuestionError || isEmailError || emailPristine || questionPristine}
                        onClick={submitForm}
                        type='submit'
                    >
                        Submit
                    </Button>
                </form>
            </div>
	    </div>
    );
}