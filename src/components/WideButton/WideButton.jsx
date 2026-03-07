import './WideButton.css'

function WideButton({ label, type = "button", disabled = false, onClick, ...rest }) {

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className="wide-button"
            {...rest}
        >
            {label}
        </button>
    );
}
export default WideButton;