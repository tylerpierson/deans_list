const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const usersRouter = require('./routes/api/users');
const assignmentsRouter = require('./routes/api/assignments');
const campusesRouter = require('./routes/api/campuses');
const checkTokenMiddleware = require('./config/checkToken');


app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img','logo.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(checkTokenMiddleware);
app.use('/api/users', usersRouter);
// app.use(ensureLoggedInMiddleware);
app.use('/api/assignments', assignmentsRouter);
app.use('/api/campuses', campusesRouter);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app