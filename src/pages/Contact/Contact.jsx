import './Contact.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/InputComponent/InputComponent';
import WideButton from '../../components/WideButton/WideButton.jsx';

function Contact() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
        reset()
    }

    return (

        <div className="outer-container">
            <h2>Contact</h2>
            <section className="page-container-contact">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputComponent
                    inputType="text"
                    inputName="first-name"
                    inputId="first-name-field"
                    inputLabel="First name:"
                    validationRules={{
                        required: {
                            value: true,
                            message: 'First name is required',
                        }
                    }}
                    register={register}
                    errors={errors}
                />

                <InputComponent
                    inputType="text"
                    inputName="last-name"
                    inputId="last-name-field"
                    inputLabel="Last name:"
                    validationRules={{
                        required: {
                            value: true,
                            message: 'Last name is required',
                        }
                    }}
                    register={register}
                    errors={errors}
                />

                <InputComponent
                inputType="text"
                inputName="email"
                inputId="email-field"
                inputLabel="Email:"
                validationRules={{
                    required: {
                        value: true,
                        message: 'Email is required',
                    }
                }}
                register={register}
                errors={errors}
                />

                <InputComponent
                    inputType="textarea"
                    inputName="message"
                    inputId="message-field"
                    inputLabel="Message:"
                    validationRules={{
                        required: {
                            value: true,
                            message: 'Message is required',
                        }
                    }}
                    register={register}
                    errors={errors}
                />

                <WideButton
                    type="submit"
                    label="send"
                    disabled={false}
                    />

            </form>
            </section>
        </div>

    );
}

export default Contact