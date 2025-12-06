import './Button.css'

function Button({ label, type, disabled }) {

    return (
        <button
            type={type}
            disabled={disabled}
            // onClick={handleClick}
        >
            {label}
        </button>
    );
}
export default Button;