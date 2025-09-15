const meals = (req, res) => {
    res.render('meals', {
        title: 'Meals',
        message: 'Here are our delicious meals!'
    });
};

module.exports = { meals };