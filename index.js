var Server = require('alexa-app-server');
var localtunnel = require('localtunnel');

var defaults = {
  port: process.env.port || 80,

  onTunnelStart: function (tunnel) {
    console.log('Tunnel URL: %s', tunnel.url);
  },

  onTunnelError: function (err) {
    console.error('Tunnel Error: %s', err.message);
  }
};

function HomeServer (serverConfig) {
  var config = Object.assign({}, defaults, serverConfig);

  this.start = function () {
    localtunnel(config.port, {
      subdomain: config.subdomain,
      local_host: config.localhost
    }, function (err, info) {
      if (err) {
        config.onTunnelError(err);
      } else {
        config.onTunnelStart(info);
      }
    });

    return new Server(config).start();
  };
}

HomeServer.start = function (config) {
  var homeServer = new HomeServer(config);
  homeServer.start();
  return homeServer;
};

module.exports = HomeServer;
