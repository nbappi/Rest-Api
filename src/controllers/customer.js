exports.find = function (req, res) {
	res.send("Find customer");
};

exports.findById = function (req, res) {
   console.log("Find customer by id");
};

exports.add = function (req, res) {
   console.log("Customer add");
};

exports.update = function (req, res) {
   console.log("Customer update");
};

exports.delete = function (req, res) {
   console.log("Customer delete");
};