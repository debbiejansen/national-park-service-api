import './Button.css'

function Button({ label, type, disabled, onClick }) {

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );
}
export default Button;