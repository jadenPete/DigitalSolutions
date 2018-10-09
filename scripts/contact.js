const email = encodeURIComponent('jaden.peterson@rocklinusd.org')

document.getElementById('form').addEventListener('submit', function() {
	const fname   = encodeURIComponent(document.getElementById('fname').value)
	const lname   = encodeURIComponent(document.getElementById('lname').value)
	const subject = encodeURIComponent(document.getElementById('subject').value)
	const body    = encodeURIComponent(document.getElementById('body').value)

	window.open('mailto:' + email + 
		'?subject=' + fname + '%20' + lname + '%20-%20' + subject + '&body=' + body)
})
