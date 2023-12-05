import "./Elem.css";
import "./Model.js";

function Elem(props) {

    function katt() {
        props.katt(props.index);
    }
    return (
        <div className="elem" onClick={katt}>
           {props.ertek}
        </div>
    );
}

export default Elem;