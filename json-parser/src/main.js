/**
 * returns a javascript object from a JSON formatted string
 * Example json to javascript object:
 *   "5"          -> 5
 *   "'hello'"   -> 'hello'
 *   "[]"         -> []
 *   "{}"         -> {}
 *   "["hello"]"  -> ['hello']
 *
 *  For more examples, use the JSON.stringify method in the console
 */

function JSONParser(string) {
return JSON.parse(string);
}

console.log(JSONParser("5"))         // -> 5
console.log(JSONParser('"hello"'))     // -> 'hello'
console.log(JSONParser( "[]" ))        //-> []
console.log(JSONParser(  "{}"  ))          //-> {}
console.log(JSONParser( '["hello"]' )) // > ['hello']