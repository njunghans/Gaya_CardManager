Backend = require('../backend');

class Mechanics extends Backend {

    constructor() {
        super();
        this.identifiers = false;
        this.mechanicIcons = {};
    }

    fetchAllIcons(success, failure) {
        jQuery.ajax({
            url: '/api/getMechanicIcons',
            success: (icons) => {
                this.setMechanicIcons(icons);
                this.setIdentifiers();
                if (typeof success === 'function') success();
            },
            error: () => {
                if (typeof failure === 'function') failure();
            },
        });
    }

    setIdentifiers() {
        let ids = [];
        jQuery.each(this.mechanicIcons, (i) => {
            ids.push(i);
        });
        this.identifiers = ids;
    }

    setMechanicIcons(m) {
        this.mechanicIcons = m;
    }

}

module.exports = Mechanics;