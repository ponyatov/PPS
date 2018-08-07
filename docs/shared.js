/// shared JS code

function wrap(some) {
	var S = '' 
	JSON.stringify(some)
		.match(/.{1,44}/g)
		.forEach(function(item,i,arr) {
			S += item + '\n'})
	return S	
}

function out(some) { log.innerText += wrap(some) }

function err(e) { out('error:\n'+wrap(e)) }

function go() {
	log.innerText = ''
	try { peg.generate(meta.value).parse(pad.value) }
	catch(e) { log.innerText = err(e) }
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

function go() {
	log.innerText = ''
	try { peg.generate(meta.value).parse(pad.value) }
	catch(e) { log.innerText = "error:\n" + out(e) }
	update()
}
