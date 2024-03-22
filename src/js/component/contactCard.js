import React, { useState, useEffect, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
	
	});

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={"https://cn.i.cdn.ti-platform.com/content/539/showpage/las-supernenas/es/ppg-200x200.png"} className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" d-flex justify-content-end float-right">
						<Link to={"/edit/" + props.contact.id}>
							<button className="btn " onClick={() => actions.getContact(props.contact)}>
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<div className="pl-5 text-start">
						<label className="name lead ">{props.contact.full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-5" />
						<span className="text-muted ">&nbsp;&nbsp;{props.contact.address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3 py-2"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<span className="text-muted small">&nbsp;&nbsp;{props.contact.phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">&nbsp;&nbsp;{props.contact.email}</span></div>
				</div>
			</div>
		</li>
	);
};


ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contact: PropTypes.object
};


ContactCard.defaultProps = {
	onDelete: null
};