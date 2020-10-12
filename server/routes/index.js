module.exports = app => {

    // Base URLS
    app.use('/api', require('./dogs.routes.js'))
    app.use('/api', require('./auth.routes.js'))
    app.use('/api', require('./users.routes.js'))
    app.use('/api/files', require('./files.routes.js'))


}

