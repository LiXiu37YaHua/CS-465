// app_server/controllers/main.js
exports.index = function (req, res) {
    res.render('index', {
        title: 'Travlr Getaways',
        message: 'Welcome to Travlr!'
    });
};