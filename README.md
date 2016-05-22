# alexa-home-server

This module allows you to run an [alexa-app-server](server) on a device in your home, such as a Raspberry Pi. Running a server in your home allows you to easily communicate other devices on your local network.

## Installation

```sh
npm install alexa-home-server --save
```

## Usage

```javascript
// index.js
require('alexa-home-server').start({
  server_root: __dirname,
  port: 4000
});
```

```sh
$ node index.js
Listening on HTTP port 4000
Tunnel URL: https://czceoztype.localtunnel.me
```

## Options

This module accepts all options provided by [alexa-app-server](server), with a few additions:

```javascript
require('alexa-home-server').start({
  // A string value requesting a specific subdomain on the proxy server. Note: You may not actually receive this name depending on availablily.
  subdomain: 'some-subdomain',

  // Proxy to this hostname instead of localhost. This will also cause the Host header to be re-written to this value in proxied requests.
  localhost: 'localhost',

  // A callback that is invoked after the network tunnel has been opened
  onTunnelStart: function (tunnel) {
    console.log('Tunnel URL: %s', tunnel.url);
  },

  // A callback that is invoked if an error occurs while opening a tunnel
  onTunnelError: function (err) {
    console.error('Tunnel Error: %s', err.message);
  }
});
```

## Resources

+ [alexa-app](app)
+ [alexa-app-server](server)
+ [localtunnel](localtunnel)

[app]: https://github.com/matt-kruse/alexa-app
[server]: https://github.com/matt-kruse/alexa-app-server
[localtunnel]: https://github.com/localtunnel/localtunnel
