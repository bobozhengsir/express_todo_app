var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Todo = new Schema({
	user_id   : String,
	content   : String,
	updated_at: { type: Date, default: Date.now() }
});

mongoose.model( 'Todo', Todo );

mongoose.connect( "mongodb://localhost/express-todo" );
console.log('connect mongodb');
