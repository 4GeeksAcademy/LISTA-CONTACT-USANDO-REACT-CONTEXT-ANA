import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/addContac.js";
import { EditContact } from "./views/editContact.js";


const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>

					<Routes>
						{/* <Route path="/index.html" element={<Contacts />} /> */}
						<Route path="/" element={<Contacts />} />
						{/* <Route path="/contacts" element={<Contacts />} /> */}
						<Route path="/add" element={<AddContact />} />
						<Route path="/edit/:id" element={<EditContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);