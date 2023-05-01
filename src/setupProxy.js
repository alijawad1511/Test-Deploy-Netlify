const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/account/login', // The API path you want to proxy
        createProxyMiddleware({
            target: 'https://api.restaurantanalyticsgroup.com/',
            changeOrigin: true,
        })
    );

    app.use(
        '/api/account/create', // The API path you want to proxy
        createProxyMiddleware({
            target: 'https://api.restaurantanalyticsgroup.com/',
            changeOrigin: true,
        })
    );
};