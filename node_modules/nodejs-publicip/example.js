'use strict';

const PublicIp = require('./index');

new PublicIp()
    .queryPublicIPAddresses((err, ipv4, ipv6) => {
        if (err) {
            console.log(`error: ${err}`);
            return;
        }

        console.log('using callback method');

        console.log(`ipv4 address: ${ipv4}`);
        console.log(`ipv6 address: ${ipv6}`);
    });


new PublicIp()
    .queryPublicIPAddresses()
    .then((result) => {
        console.log('using promise method');

        console.log(`ipv4 address: ${result.ipv4}`);
        console.log(`ipv6 address: ${result.ipv6}`);
    })
    .catch((err) => {
        console.log(err);
    });