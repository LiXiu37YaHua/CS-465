const news = (req, res) => {
    res.render('news', {
        title: 'News',
        message: 'Latest travel news and updates.'
    });
};

module.exports = { news };