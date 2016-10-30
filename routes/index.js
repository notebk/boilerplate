var home = function(req, res){
   res.render("home", {"classes": [
     {name:"Olin.js", teacher:"Me"},
     {name:"other class 1", teacher:"Jimmy"},
     {name:"other class 2", teacher:"Rob"}]
   });
};

module.exports.home = home;