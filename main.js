window.onload = function() {let code = [
	"html is kool",
	"css is kool"
]
	
let products = document.getElementById("products")

for(let i = 0; i < code.length; i++) {
	products.innerHTML = ""
	
	for(let j = 0; j < code[i].length; j++) {
		setTimeout(function() {
			products.innerHTML += code[i].charAt(j)
		}, 1000)
	}
}}
