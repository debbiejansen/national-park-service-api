import './WideButton.css'

function WideButton({ label, type, disabled }) {

    return (
        <button
            type={type}
            disabled={disabled}
            // onClick={handleClick}
            className="wide-button"
        >
            {label}
        </button>
    );
}
export default WideButton;