
/*
Copyright 2011 Sleepless Software Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE. 
*/

var fs = require("fs"),
	util = require("util"), insp = util.inspect,
	log = function(){} //console.log


function load(f) {
	f = f || this.file
	this.__proto__.file = f
	try {
		var ds = JSON.parse(fs.readFileSync(f))
	}
	catch(e) {
		this.clear()
	} 
	finally {
		for(k in ds) 
			this[k] = ds[k]
		//log(this.file+" LOAD:\n"+insp(this))
	}
}

function save(f) {
	f = f || this.file
	this.__proto__.file = f
	try {
		fs.writeFileSync(f, JSON.stringify(this))
	}
	catch(e) {
	}
	finally {
		log(this.file+" SAVE:\n"+insp(this))
	}
}

function clear() {
	for(k in this) 
		delete this[k]
	//log(this.file+" CLEAR:\n"+insp(this))
}

var LS = { load:load, save:save, clear:clear }

function F(file) {
	this.file = file
}
F.prototype = LS


function D(f, d) {
	exports.debug = d
	this.__proto__ = new F("ds.json")
	//log(this.file+" NEW:\n"+insp(this))
	this.load(f)
}
D.prototype = new F()


exports.DS = D




