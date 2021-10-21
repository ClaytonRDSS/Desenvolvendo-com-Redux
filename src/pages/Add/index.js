import React, { useState } from 'react';

import { useDispatch } from 'react-redux'

import { addCar } from '../../store/cars'
import { hideMessage, showMessage } from '../../store/layout'

export default function Add() {

	const dispath = useDispatch();

	const [form, setForm] = useState({ name: '', url: '' });

	function formChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}
	function onSubmit(e) {
		e.preventDefault();

		//console.log(form);

		//resposavel por comunicar com redux para identificar qual tipo vai ser executado.
		dispath(addCar(form));

		//limpar o formulario ápos add um elemento
		setForm({ name: '', url: '' });


		dispath(showMessage());


		setTimeout(() => {
			dispath(hideMessage())
		},
			2500)
	}

	return (
		<form className="container mt-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input onChange={formChange} type="text" name="name" className="form-control" placeholder="Nome..." value={form.name} />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input onChange={formChange} type="text" name="url" className="form-control" placeholder="URL:https://cars" value={form.url} />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
