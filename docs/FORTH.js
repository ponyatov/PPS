
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
	update()
}

function keydown(event) {
	if (event.ctrlKey & event.key == 'Enter') go()
}

function update() {
	meta.style.height = meta.scrollHeight + "px"
	 pad.style.height =  pad.scrollHeight + "px"
	stack.innerText = S.dump()
}

window.onload = function() {
	document.body.onkeydown = keydown
	update()
}

function Stack(name) {
	this.type  = 'stack'
	this.value = name
	this.nest  = []
}

Stack.prototype.head = function() {
	return "<" + this.type + ":" + this.value + ">"
}

Stack.prototype.pad = function(depth) { return '\n'+"  ".repeat(depth) }

//Stack.prototype.dump = function(depth=0) {
//	S = this.pad(depth) + this.head()
//	S += this.pad(depth+1) + JSON.stringify(this.nest)
//	return S
//}

Stack.prototype.dump = function() {
	return this.head() + this.pad(1) + JSON.stringify(this.nest)
}

Stack.prototype.push = function(item) { this.nest.push(item) }

S = new Stack('data')

function push(obj) { S.push(obj) }
