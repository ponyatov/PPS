
function errlog(error) {
	var S = "error:\n"
	JSON.stringify(error).match(/.{1,77}/g).forEach(function(item,i,arr) {
		S += item + '\n'
	})
	return S
}

function join(dat) { return dat.join("") }

function INTERPRET(SRC) {
	log.innerText = ''
	try { peg.generate(meta.value).parse(pad.value) }
	catch(e) { log.innerText = errlog(e) }
}

function go() {
	INTERPRET(pad.value)
}

function keydown(event) {
	if (event.ctrlKey & event.key == 'Enter') go()
}

function update() {
	meta.style.height = meta.scrollHeight + "px"
	 pad.style.height =  pad.scrollHeight + "px"
}

window.onload = function() {
	document.body.onkeydown = keydown
	update()
}