import "./JatekTer.css";
import Elem from "./Elem.js";

function JatekTer(props) {
    function katt(szoveg){
        props.katt(szoveg);
    }
    return (
        <div className="jatekTer">
        {props.lista.map((elem, index) => {
            return (<Elem ertek={elem} key={index} katt={katt} index={index}></Elem>)
        })}
        </div>
    );
}

export default JatekTer;