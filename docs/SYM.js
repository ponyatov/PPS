/// symbolic type system

function Sym(T,V) {
	this.type = T.constructor.name.toLowerCase();//T;
	this.value = V;
	this.attr = {}; this.nest = [];
	
	this.dump = function(depth=0) {
		var S = this.pad(depth) + this.head()
		for (i in this.attr) console.log(i)
		return S		
	}
	
	this.head = function()  { return "<"+this.type+":"+this.value+">" }
	this.pad  = function(N) { return '\n'+'\t'.repeat(N) }
	
	this.push = function(o) { this.nest.push(o); return this }
	
	this.set = function(K,V) { this.attr[K] = V; return this; }
	this.get = function(K)   { return this.attr[K] }
	
}

function Int(V) { return new Sym(this,parseInt(V))		}
function Num(V) { return new Sym(this,parseFloat(V))	}
function Hex(V) { return new Sym(this,V) 				}
function Bin(V) { return new Sym(this,V) 				}

function Stack(name)	{ return new Sym(this,name)		}
function Map(name)		{ return new Sym(this,name)		}
