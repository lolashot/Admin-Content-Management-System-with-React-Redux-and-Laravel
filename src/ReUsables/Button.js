import propTypes from 'prop-types';
const Button = ({color,text, size, textcolor,onClick}) => {
 return (
   <button
    onClick={onClick}
    style={{color:textcolor}}
    className={`btn ${color} ${size}`}
    >
    {text}
    </button>
   )
}
Button.defaultProps = {
 color: 'steelblue',
}

Button.propTypes = {
 text: propTypes.string,
 color: propTypes.string,
 onClick: propTypes.func,
}
export default Button
