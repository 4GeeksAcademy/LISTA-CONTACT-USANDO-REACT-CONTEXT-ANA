import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		full_name: "",
		email: "",
		agenda_slug: "anarg1812",
		address: "",
		phone: ""
	});

	const handelSubmit = e => {
		e.preventDefault();
		console.log("ejecutando submit");
		actions.addContact(user);
	};
	const navigate = useNavigate();
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} onSubmit={handelSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" name="full_name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" name="email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" name="phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address" name="address" />
					</div>
					<button type="submit" onClick={() => navigate(-1)} className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};