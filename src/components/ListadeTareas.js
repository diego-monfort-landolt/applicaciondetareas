import React from "react";
import TareaFormulario from "./TareaFormulario";
import '../new-css-files/ListaDeTareas.css';

function ListaDeTareas() {
	return (
		<>
			<TareaFormulario />
			<div className="tareas-lista-contenedor">
					Lista de Tareas
			</div>
		</>
	);
}
export default ListaDeTareas;