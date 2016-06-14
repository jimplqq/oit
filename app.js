var express = require('express')
var path = require('path')
var port = 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')

app.use(express.static(path.join(__dirname, '../oit/bower_components')))
app.listen(port)
console.log('oit start on port:' + port)


//index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'oit 首页'
    })
})
app.get('/detail', function(req, res) {
    res.render('detail', {
        title: 'oit 详情页'
    })
})
app.get('/list', function(req, res) {
    res.render('list', {
        title: 'oit list'
    })
})
app.get('/worthy', function(req, res) {
    res.render('worthy', {
        title: 'worthy'
    })
})
