const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contactList: [],
			idDelete: "",
			contactToEdit: {}
		},
		actions: {
			getData: str => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/anarg1812")
					.then(res => res.json())
					.then(data => setStore({ contactList: data }))
					.catch(error => console.log(error));
			},
			addContact: user => {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					body: JSON.stringify(user),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(res => {
						if (res.ok) {
							getActions().getData();
						}
					});
			},
			addidDelete: id => {
				setStore({ idDelete: id });
			},
			removeContact: () => {
				const store = getStore();
				fetch("https://playground.4geeks.com/apis/fake/contact/" + store.idDelete, {
					method: "DELETE"
				}).then(res => {
					if (res.ok) {
						getActions().getData();
					}
				});
			},
			editContact: (id, contact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(res => res.json())
					.then(res => {
						if (res.ok) {
							getActions().getData();
						}
					});
			},
			getContact: contact => {
				setStore({ contactToEdit: contact });

			}
		}
	};
};

export default getState;