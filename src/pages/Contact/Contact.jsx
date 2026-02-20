import './Contact.css'
import React from 'react';
import { useForm } from 'react-hook-form';
import InputComponent from '../../components/InputComponent/InputComponent';

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormSubmit(data) {
        console.log(data);
    }

    return (

        <div className="page-container-contact">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputComponent
                    inputType="text"
                    inputName="name"
                    inputId="name-field"
                    inputLabel="Naam:"
                    validationRules={{
                        required: {
                            value: true,
                            message: 'Naam is verplicht',
                        }
                    }}
                    register={register}
                    errors={errors}
                />
                <InputComponent
                inputType="text"
                inputName=""
                />

                <button type="submit">
                    Versturen
                </button>
            </form>
        </div>

    );
}

export default Contact