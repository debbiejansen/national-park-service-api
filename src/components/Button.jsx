import './Button.css'
function Button(props) {
    function handleClick() {
        if (!props.disabled) {
            props.onClick(props.title);
        }
    }
    return (
        <button
            type="button"
            onClick={handleClick}
        >
            {props.title}
        </button>
    );
}
export default Button;