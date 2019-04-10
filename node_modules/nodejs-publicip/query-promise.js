'use strict';

const async = require('async');

const Query = require('./query');

class QueryPromise extends Query {
    constructor() {
        super();
    }

    queryPublicIPv4Address() {
        return new Promise((resolve, reject) => {
            this.queryIPAddress('ipv4', (err, ip) => {
                if (!err) {
                    resolve(ip);
                }
                else {
                    reject(err);
                }
            });
        });
    }

    queryPublicIPv6Address() {
        return new Promise((resolve, reject) => {
            this.queryIPAddress('ipv6', (err, ip) => {
                if (!err) {
                    resolve(ip);
                }
                else {
                    reject(err);
                }
            });
        });
    }

    queryPublicIPAddresses() {
        return new Promise((resolve, reject) => {
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
                    resolve({
                        ipv4: results.ipv4,
                        ipv6: results.ipv6
                    });
                } else {
                    reject(err);
                }
            });
        });
    }
}

module.exports = QueryPromise;