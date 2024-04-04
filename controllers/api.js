// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"shoe", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};