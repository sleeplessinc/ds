
# DS (data store)

This is a simple (to the point of being silly) data store intended for prototyping.
It will let you persist JS objects to disk with very little effort in JSON form.

DS is:

* Easy to install
* Easy to use
* Free!

DS is NOT:

* Secure.
* Scaleable
* Flexible.
* featureful.

Do not use this in production.

Example

	var DS = require("ds").DS

	var ds = new DS("./ds.json")

	ds.one = 1
	ds.a = [1,2,"foo"]
	ds.o = {bar:"baz", qux:42}
	ds.save()		// data (all of it) written to ./ds.json
	ds.clear()		// all data erased

API

	load(path)		// load JSON data from file into memory
	save(path)		// save JSON data to a file
	save()			// save JSON data to same file as last time
	clear()			// clear the in-memory data store
	

