import React, { useState, useEffect, useContext } from "react"; 
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; 

import { ContactCard } from "../component/contactCard.js";
import { Modal } from "../component/Modal.js";
import { checkPropTypes } from "prop-types";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	useEffect(() => {
		actions.getData()
	}, []);
	console.log(store.contactList);

	return (
		<div className="container">
			<div>
				<p className=" d-flex justify-content-end my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactList.map((user, index) => (
							<ContactCard
								key={index}
								contact={user}
								onDelete={() => {
									actions.addidDelete(user.id);
									setState({ showModal: true });
								}}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};