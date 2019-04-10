# nodejs-publicip [![Code Climate](https://codeclimate.com/github/zulhilmizainuddin/nodejs-publicip/badges/gpa.svg)](https://codeclimate.com/github/zulhilmizainuddin/nodejs-publicip)

[![NPM](https://nodei.co/npm/nodejs-publicip.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nodejs-publicip/)

Query your IPv4 and IPv6 public IP address from OpenDNS

## Install

    npm install --save nodejs-publicip
    
## API
### Get result by callback

```javascript
// query public IPv4 address
queryPublicIPv4Address(callback)

// query public IPv6 address
queryPublicIPv6Address(callback)

// query public IPv4 and IPv6 address
queryPublicIPAddresses(callback)
```

### Get result by promise

```javascript
// query public IPv4 address
queryPublicIPv4Address()

// query public IPv6 address
queryPublicIPv6Address()

// query public IPv4 and IPv6 address
queryPublicIPAddresses()
```

## Usage Example

### Result by callback

#### queryPublicIPv4Address(callback)
```javascript
const PublicIp = require('nodejs-publicip');

new PublicIp()
    .queryPublicIPv4Address((err, ip) => {
        if (err) {
            console.log(`error: ${err}`);
            return;
        }

        console.log(`ip address: ${ip}`);
});
```

#### queryPublicIPv6Address(callback)
```javascript
const PublicIp = require('nodejs-publicip');

new PublicIp()
    .queryPublicIPv6Address((err, ip) => {
        if (err) {
            console.log(`error: ${err}`);
            return;
        }

        console.log(`ip address: ${ip}`);
});
```

#### queryPublicIPAddresses(callback)
```javascript
const PublicIp = require('nodejs-publicip');

new PublicIp()
    .queryPublicIPAddresses((err, ipv4, ipv6) => {
        if (err) {
            console.log(`error: ${err}`);
            return;
        }

        console.log(`ipv4 address: ${ipv4}`);
        console.log(`ipv6 address: ${ipv6}`);
});
```

### Result by promise

#### queryPublicIPv4Address()
```javascript
const PublicIp = require('nodejs-publicip');

new PublicIp()
    .queryPublicIPv4Address()
    .then((ipv4) => {
        console.log(`ipv4 address: ${ipv4}`);
    })
    .catch((err) => {
        console.log(err);
    });
```

#### queryPublicIPv6Address()
```javascript
const PublicIp = require('nodejs-publicip');

new PublicIp()
    .queryPublicIPv6Address()
    .then((ipv6) => {
        console.log(`ipv6 address: ${ipv6}`);
    })
    .catch((err) => {
        console.log(err);
    });
```

#### queryPublicIPv6Address()
```javascript
const PublicIp = require('nodejs-publicip');

new PublicIp()
    .queryPublicIPAddresses()
    .then((result) => {
        console.log(`ipv4 address: ${result.ipv4}`);
        console.log(`ipv6 address: ${result.ipv6}`);
    })
    .catch((err) => {
        console.log(err);
    });
```

## Result Example

    ipv4 address: 113.210.191.235
    ipv6 address: 2001:d08:1810:2b6:e4db:2f8c:8007:630c
