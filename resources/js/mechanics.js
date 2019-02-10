Backend = require('./backend');

class Mechanics extends Backend{

    constructor() {
        super();
        this.mechanics = [];
        this.fetchAllMechanics();
        this.setIdentifiers();
    }

    setIdentifiers() {
        console.log("settings identifiers with", this.mechanics);
        let ids = [];
        this.mechanics.forEach(e => {
            ids.push(e.pattern)
        });
        this.identifiers = ids;
    }

    fetchAllMechanics() {
        this.callBackend('/mechanics', data => {
            this.setMechanics(data);
        });
    }

    setMechanics(m) {
        this.mechanics = m;
        console.log('setting', m)
    }

}

module.exports = Mechanics;