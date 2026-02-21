import './WideButton.css'

function WideButton({ label, type = "button", disabled = false, ...rest }) {

    return (
        <button
            type={type}
            disabled={disabled}
            className="wide-button"
            {...rest}
        >
            {label}
        </button>
    );
}
export default WideButton;