import './InputComponent.css';

function InputComponent({ inputType, inputName, inputLabel, inputId, validationRules, register, errors }) {
    return (
        <>
            <label htmlFor={inputId}>
                <input
                    type={inputType}
                    id={inputId}
                    placeholder={inputLabel}
                    {...register(inputName, validationRules)}
                />
            </label>
            {errors[inputName] &&
                <p className="error-message">{errors[inputName].message}</p>}
        </>
    );
}

export default InputComponent;