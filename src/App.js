import { useState } from "react";
import "./App.css";
import JatekTer from "./komponens/JatekTer.js";
import Model from "./komponens/Model";

const MODEL = new Model();

function App() {
	const [allapotLista, setAllapotLista] = useState(MODEL.getAllapotLista());

	function katt(index){
		MODEL.setAllapot(index);
		if(MODEL.vegeVanE() == "X nyert"){
			console.log("X");
		} else if(MODEL.vegeVanE() == "O nyert"){
			console.log("O");
		} else if (MODEL.vegeVanE() == "Döntetlen") {
			console.log("Döntetlen");
		} else{
			console.log("nincs vége");
		}
		setAllapotLista(MODEL.getAllapotLista());
	}
	
  	return  <div className="App">
				<header><h1>TicTacToe</h1></header>
				<article>
					<JatekTer katt={katt} lista={allapotLista}></JatekTer>
				</article>
				<footer>
					<p>Milichovszky Sándor</p>
				</footer>
  			</div>;
}

export default App;
