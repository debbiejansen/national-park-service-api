import './Button.css'

function Button({ label, type, disabled, onClick, variant }) {

    const variantClass = variant === 'white' ? 'btn-white' : 'btn-green';

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`btn ${variantClass}`}
        >
            {label}
        </button>
    );
}
export default Button;