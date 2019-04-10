'use strict';

const QueryCallback = require('./query-callback');
const QueryPromise = require('./query-promise');

class PublicIp {
    constructor() {
        this.queryCallback = new QueryCallback();
        this.queryPromise = new QueryPromise();
    }

    queryPublicIPv4Address(callback) {
        if (callback instanceof Function) {
            return this.queryCallback.queryPublicIPv4Address(callback);
        }
        else {
            return this.queryPromise.queryPublicIPv4Address();
        }
    }

    queryPublicIPv6Address(callback) {
        if (callback instanceof Function) {
            return this.queryCallback.queryPublicIPv6Address(callback);
        }
        else {
            return this.queryPromise.queryPublicIPv6ddress();
        }
    }

    queryPublicIPAddresses(callback) {
        if (callback instanceof Function) {
            return this.queryCallback.queryPublicIPAddresses(callback);
        }
        else {
            return this.queryPromise.queryPublicIPAddresses();
        }
    }
}

module.exports = PublicIp;