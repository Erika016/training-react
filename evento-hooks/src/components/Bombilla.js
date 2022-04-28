// import PropTypes from 'prop-types'
// export function Bombilla(props){
// <div>
// className={`bombilla ${props.encendida? props.color: "negro"}`}
// </div>
// }
// Bombilla.prototypes={
//     encendida: PropTypes.bool.isRequired,
//     color: PropTypes.oneOf(["verde", "naranja", "rojo"]),
// // }


import PropTypes from 'prop-types'
import "./Bombilla.css"

export function Bombilla(props) {
    return (
      <div className={`bombilla ${props.encendida ? props.color : "negro"}`} />
    );
}

Bombilla.propTypes = {
  encendida: PropTypes.bool.isRequired,
  color: PropTypes.oneOf(["verde", "naranja", "rojo"]),
};