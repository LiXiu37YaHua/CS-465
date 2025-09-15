const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms',
        message: 'View our available rooms here.'
    });
};

module.exports = { rooms };