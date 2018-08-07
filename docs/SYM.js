/// symbolic type system

function Sym(T,V) {
	this.type = T; this.value = V;
	this.attr = {}; this.nest = [];
	
	this.dump = function(depth=0) {
		var S = this.pad(depth) + this.head()
		return S		
	}
	
	this.head = function() {
		return "<"+this.type+":"+this.value+">"
	}
	
}

function Int(V) { Sym('int',parseInt(V)) } // this.type = 'int'; this.value = 	}
function Num(V) { this.type = 'num'; this.value = parseFloat(V)	}
function Hex(V) { this.type = 'hex'; this.value = V				}
function Bin(V) { this.type = 'bin'; this.value = V				}

function Stack(name) { Sym('stack',name) }

