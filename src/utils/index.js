const System = require('./System');
const TraySystem = require('./TraySystem');
const Test = require('./Test')

module.exports = {
    System,
    TraySystem: new TraySystem(),
    Test: new Test()
}