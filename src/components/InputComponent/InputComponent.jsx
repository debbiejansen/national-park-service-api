import './InputComponent.css';

function InputComponent({
                            inputType,
                            inputName,
                            inputLabel,
                            inputId,
                            validationRules,
                            register,
                            errors }) {
    return (

            <div className="input-wrapper">
            <label htmlFor={inputId}></label>
                {inputType === "textarea" ? (
                <textarea
                    id={inputId}
                    rows={5}
                    placeholder={inputLabel}
                    {...register(inputName, validationRules)}
                    />
                ) : (
                <input
                    type={inputType}
                    id={inputId}
                    placeholder={inputLabel}
                    {...register(inputName, validationRules)}
                />
                )}

            {errors[inputName] && (
                <p className="error-message">{errors[inputName].message}
            </p>
            )}
            </div>
    );
}

export default InputComponent;