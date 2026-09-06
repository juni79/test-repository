// Stays alive so systemd reports the service active, but never binds a port.
// nginx then proxies to nothing, answers 502, and the deployment's last step fails.
setInterval(function () {}, 1000);
