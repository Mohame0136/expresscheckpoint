const time = (req, res, next) => {
    var now = new Date();

    const hour = now.getHours();
    if (9<hour<17) {
        next();
    } else {
        res.status(401).send({ msg: "go back on the right time" });
    }
};
const authday = (req, res, next) => {
    var now = new Date();

    const day = now.getDay();
    if (0<day<4) {
        next();
    } else {
        res.status(401).send({ msg: "go back on the right time" });
    }
};

module.exports = time , authday;
