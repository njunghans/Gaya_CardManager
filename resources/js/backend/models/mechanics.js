Backend = require('../backend');

class Mechanics extends Backend {

    constructor() {
        super();
    }

    fetchIdentifiers(success, failure) {
        jQuery.ajax({
            url: '/api/getMechanicIdentifiers',
            success: (i) => {
                this.setIdentifiers(i);
                if (typeof success === 'function') success();
            },
            error: () => {
                if (typeof failure === 'function') failure();
            },
        });
    }

    getIconByIdentifier(identifier, success, failure) {
        jQuery.ajax({
            url: '/api/getIconByIdentifier',
            data: {
                identifier: identifier
            },
            success: (icon) => {
                this.setIcon(icon);
                if (typeof success === 'function') success();
            },
            error: () => {
                if (typeof failure === 'function') failure();
                console.log("failed");
            },
        });
    }

    fetchAllIcons(success, failure) {
        jQuery.ajax({
            url: '/api/getMechanicIcons',
            success: (icons) => {
                this.setMechanicIcons(icons);
                if (typeof success === 'function') success();
            },
            error: () => {
                if (typeof failure === 'function') failure();
            },
        });
    }

    setIcon(icon) {
        this.icon = icon;
    }

    setIdentifiers(i) {
        this.identifiers = i;
    }

    setMechanicIcons(m) {
        this.mechanicIcons = m;
    }

}

module.exports = Mechanics;