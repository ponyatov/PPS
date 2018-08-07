/// FORTH-like script language implementation

PEG = `// FORTH.pegjs grammar

{ out('you can run any JS code')
  out('before PEG starts'      ) }

FORTH "metacompiler"
  = (( comment 
  / n:number { out(n) }
  / w:word   { out(w) }
  ) _ ) *

comment = [#\\\\][^\\n]*
_       = [ \\t\\r\\n]*	/* drop spaces */

number
  = '0x' hex:[0-9a-fA-F]+
    { return new Hex(join(hex)) }
  / '0b' bin:[01]+
    { return new Bin(join(bin)) }
  / s:[\\+\\-]?
    n:[0-9]+
    f:('.' flo:[0-9]*
      { return flo } )?
    e:([eE][\+\-]?[0-9]+)?
      { return num(s,n,f,e) }

word
  = w:[a-zA-Z0-9_.\\+\\-]+
    { out(join(w)) }

`
	
PAD = `# FORTH command

-01 +02.30 +4e-5  \\ numbers
0xDeadBeef 0b1101 \\ machine
`

S = new Stack('data')
