const storage = localStorage

// Render contacts to the screen from localStorage
const renderContacts = () => {
	// import all contacts from localStorage, convert to object
	// and write into a variable	
	const contacts = JSON.parse(storage.getItem('contacts'))

	// display the contacts as an unordered list
	let div = document.querySelector('#contactList')
	// check if variable exists
	if (contacts) {
		div.innerHTML = ''
		const ul = document.createElement('ul')
		
		contacts.forEach(contact => {
			let li = document.createElement('li')
			li.innerHTML = `
				<span>${contact.firstName}</span>
				<span>${contact.lastName}</span>
				<span>${contact.email}</span>
				<span>${contact.mobilePhone}</span>
				<span>${contact.notes}</span>
			`
			ul.appendChild(li)
		})
		div.appendChild(ul)
	} else {
		div.innerHTML = `<p>No contacts yet</p>`
	}
}


// Evect once page is loaded
document.addEventListener('DOMContentLoaded', () => {
	renderContacts()
	const contactForm = document.getElementById('newContactForm')
	const toggleFormVisibilityButton = document.getElementById('addContact')
	contactForm.style.display = 'none'

	// Hide and show new contact form on Add Contact button click
	toggleFormVisibilityButton.addEventListener('click', () => {
		if (contactForm.style.display === '') {
			contactForm.style.display = 'none'
		} else {
			contactForm.style.display = ''
		}
	})

	// Button click event handler
	contactForm.addEventListener('submit', event => {
		event.preventDefault()

		// Reading data from input fields into contact object

		// using destructuring assignment to make code more DRY
		const {firstName, lastName, email, mobilePhone, notes} = contactForm.elements

		const contact = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		mobilePhone: mobilePhone.value,
		notes: notes.value,
	}

	
		// Read full database from localStorage
		let contacts = JSON.parse(storage.getItem('contacts')) || []
		// Append new contact to database
		contacts.push(contact)
		// Refresh full database in localStorage with new contact
		storage.setItem('contacts', JSON.stringify(contacts))
		
		renderContacts()
		contactForm.reset()
	})
})