const travel = (req, res) => {
    res.render('travel', {
        title: 'Travel',
        message: 'Check out our travel packages.'
    });
};

module.exports = { travel };