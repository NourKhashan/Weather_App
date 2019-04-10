'use strict';

const async = require('async');

const Query = require('./query');

class QueryCallback extends Query {
    constructor() {
        super();
    }

    queryPublicIPv4Address(callback) {
        this.queryIPAddress('ipv4', (err, ip) => {
            callback(err, ip);
        });

        return null;
    }

    queryPublicIPv6Address(callback) {
        this.queryIPAddress('ipv6', (err, ip) => {
            callback(err, ip);
        });

        return null;
    }

    queryPublicIPAddresses(callback) {
        async.parallel({
           ipv4: (answer) => {
               this.queryIPAddress('ipv4', (err, ip) => {
                   answer(err, ip);
               });
           },
            ipv6: (answer) => {
                this.queryIPAddress('ipv6', (err, ip) => {
                    answer(err, ip);
                });
            }
        }, (err, results) => {
            if (results.ipv4 || results.ipv6) {
                callback(null, results.ipv4, results.ipv6);
            } else {
                callback(err, null, null);
            }
        });

        return null;
    }
}

module.exports = QueryCallback;