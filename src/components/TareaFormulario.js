import React from 'react';
import '../new-css-files/TareaFormulario.css';

function TareaFormulario(props) {
	return (
		<form className='tarea-formulario'>
			<input 
			className='tarea-input'
			type='text'
			placeholder='Task'
			name='texto'
			/>
			<button className='tarea-btn'>Add Task</button>
		</form>
	);

}

export default TareaFormulario;
