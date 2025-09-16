module.exports = function sv_name(req, res) {
    res.send(JSON.stringify(
        {
            name: "Discussion"
        }
    ));
}
