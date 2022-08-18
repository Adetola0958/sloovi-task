const authHeader = (token) => ({
	Accept: 'application/json',
	Authorization: `Bearer ${token}`,
	'Content-Type': 'application/json',
})

const header = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
}

export { header, authHeader }