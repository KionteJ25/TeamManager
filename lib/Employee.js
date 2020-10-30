// TODO: Write code to define and export the Employee class
module.exports = function(app) {
    
    app.get("/engineer.html", function(req, res) {
        res.sendfile(path.join(__dirname, "../"))
    })
}