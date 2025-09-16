const path = require('path');

module.exports =  function dashboard(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "dashboard.html"));
}
