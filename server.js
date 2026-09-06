// Stays alive so systemd reports the service active, but never binds a port.
setInterval(function () {}, 1000);
