Backend = require('../backend');

class Mechanics extends Backend {

    constructor() {
        super();
        this.mechanics = [];
        this.identifiers = [];
        this.fetchAllMechanics();
        this.setIdentifiers();
    }

    setIdentifiers() {
        let ids = [];
        this.mechanics.forEach((e) => {
            ids.push(e.pattern);
        });
        this.identifiers = ids;
    }

    fetchAllMechanics() {
        this.callBackend('/mechanics', null, data => {
            this.setMechanics(data);
        });
    }

    setMechanics(m) {
        this.mechanics = m;
    }

}

module.exports = Mechanics;