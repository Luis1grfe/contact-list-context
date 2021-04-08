import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={store.full_nameedi}
							name="full_nameedi"
							className="form-control"
							placeholder="full_name"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={store.emailedi}
							name="emailedi"
							className="form-control"
							placeholder="email"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={store.phoneedi}
							name="phoneedi"
							className="form-control"
							placeholder="phone"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={store.addressedi}
							name="addressedi"
							className="form-control"
							placeholder="Address"
							onChange={e => actions.capturaCampos(e)}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={e => actions.handleEdit(e)}>
						Edit
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
