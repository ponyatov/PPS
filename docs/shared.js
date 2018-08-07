/// shared JS code


function errlog(error) {
	var S = "error:\n"
	JSON.stringify(error).match(/.{1,77}/g).forEach(function(item,i,arr) {
		S += item + '\n'
	})
	return S
}

function INTERPRET(SRC) {
	log.innerText = ''
	try { peg.generate(meta.value).parse(pad.value) }
	catch(e) { log.innerText = errlog(e) }
}

function update() {
//	meta.style.height = meta.scrollHeight + "px"
//	 pad.style.height =  pad.scrollHeight + "px"
}

function go() {
	INTERPRET(pad.value)
	update()
}

function keydown(event) {
	if (event.ctrlKey & event.key == 'Enter') go()
}

function load() {
	document.body.onkeydown = keydown
	meta.value = PEG
	pad.value = PAD
	update()
}

window.onload = load

/// parser helpers

function join(dat) { return dat.join("") }

function num(s,n,f,e) {
	var N = ''
	if (s) N += s					// [s]ign prefix
	N += join(n)					// i[n]teger part
	if (f) N += '.'+join(f)			// [f]loat part
	if (e) N += join(e)				// [e]xponential part
	if (!f & !e) return new Int(N)
	else		 return new Num(N)
}

function wrap(some) {
	var S = '' 
	JSON.stringify(some)
		.match(/.{1,44}/g)
		.forEach(function(item,i,arr) {
			S += item + '\n'})
	return S	
}

function out(some) { log.innerText += wrap(some) }

function go() {
	log.innerText = ''
	try { peg.generate(meta.value).parse(pad.value) }
	catch(e) { log.innerText = "error:\n" + out(e) }
	update()
}
