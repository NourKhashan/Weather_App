'use strict';

const dgram = require('dgram');
const dns = require('dns-socket');
const async = require('async');

class Query {
    constructor() {
        this.type = {
            ipv4: {
                server: '208.67.222.222',
                question: {
                    name: 'myip.opendns.com',
                    type: 'A'
                }
            },
            ipv6: {
                server: '2620:0:ccc::2',
                question: {
                    name: 'myip.opendns.com',
                    type: 'AAAA'
                }
            }
        };
    }

    queryIPAddress(version, callback) {
        const data = this.type[version];
        const socket = dns({
            socket: dgram.createSocket(version === 'ipv4' ? 'udp4' : 'udp6'),
            retries: 1
        });

        socket.query.bind(socket);
        socket.query({
            questions: [data.question]
        }, 53, data.server, (err, res) => {
            socket.destroy();

            if (err) {
                callback(err, null);
                return;
            }

            let ip = res.answers[0] && res.answers[0].data;
            if (ip) {
                callback(null, ip);
            } else {
                callback(new Error('Failed to retrieve IP address'), null);
            }
        });
    }
}

module.exports = Query;