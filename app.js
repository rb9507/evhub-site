require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const mongoose = require('mongoose');

const redirect = path.join(__dirname, '/temp/redirecting.html')
const HomePath = path.join(__dirname, '/temp/index.html');
const upcomingPath = path.join(__dirname, '/temp/upcoming.html');
const ServicePath = path.join(__dirname, '/temp/services.html');
const ContactUsPath = path.join(__dirname, '/temp/contactUs.html');

const Ebikes = path.join(__dirname, '/temp/Ebikes.html');

mongoose.connect(process.env.DB_CONN_STRING);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'found connection error:'));
db.once('open', function () {
    console.log('We are connected!!')
});

const contactSchema = new mongoose.Schema({
    email: String,
    check: String,
    message: String
});

const Econtact = mongoose.model('Econtact', contactSchema);

app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    console.log(req.url);
    res.sendFile(HomePath);
})

app.get('/upcoming', (req, res) => {
    console.log(req.url);
    res.sendFile(upcomingPath);
})

app.get('/news', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/news.html'));
})

app.get('/news/25kEVsTataOrderByUber', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/news/25kEVsTataOrderByUber.html'))
})

app.get('/news/delhi-gov-ban-bikes-taxi', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/news/delhi-gov-ban-bikes-taxi.html'))
})

app.get('/services', (req, res) => {
    console.log(req.url);
    res.sendFile(ServicePath);
})

app.get('/contact', (req, res) => {
    console.log(req.url);
    res.sendFile(ContactUsPath);
})

app.get('/privacypolicy', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/privacypolicy.html'));
})

app.get('/Ebikes', (req, res) => {
    console.log(req.url);
    res.sendFile(Ebikes);
})

app.get('/ads.txt', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/ads.txt'));
})

app.get('/Ebikes/rv300', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/rv300.html'));
})

app.get('/Ebikes/JoyMoster', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/joyMonster.html'));
})

app.get('/Ebikes/kratos', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/kratos.html'));
})

app.get('/Ebikes/rv400', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/rv400.html'));
})

app.get('/Ebikes/evoqis', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/evoqis.html'));
})

app.get('/Ebikes/thunderbolt', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/thunderbolt.html'));
})

app.get('/Ebikes/beast', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/beast.html'));
})

app.get('/Ebikes/F77', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/f77.html'));
})

app.get('/Ebikes/emfluxOne', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/emfluxOne.html'));
})

app.get('/Ebikes/urbanS', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/urbunS.html'));
})

app.get('/Ebikes/urbanClassic', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/urbanClassic.html'));
})

app.get('/Ebikes/livewire', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/livewire.html'));
})

app.get('/Ebikes/premier', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/ebikes/premier.html'));
})

app.get('/Escooters', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/Escooters.html'));
})

app.get('/Escooters/reo', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/reo.html'));
})

app.get('/Escooters/optima', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/optima.html'));
})

app.get('/Escooters/magnus', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/magnus.html'));
})


app.get('/Escooters/photon', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/photon.html'));
})


app.get('/Escooters/praise', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/praise.html'));
})

app.get('/Escooters/S1', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/S1.html'));
})

app.get('/Escooters/iQube', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/iQube.html'));
})

app.get('/Escooters/ipraise', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/ipraise.html'));
})

app.get('/Escooters/iQubeS', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/iQubeS.html'));
})

app.get('/Escooters/iQubeST', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/iQubeST.html'));
})

app.get('/Escooters/450plus', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/450plus.html'));
})

app.get('/Escooters/okhi90', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/okhi90.html'));
})

app.get('/Escooters/450x', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/450x.html'));
})

app.get('/Escooters/S1pro', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/S1pro.html'));
})

app.get('/Escooters/chetak', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/escooters/chetak.html'));
})

app.get('/Ecars', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/Ecars.html'));
})

app.get('/Ecycles', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/Ecycles.html'));
})

app.get('/compareBikes', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/compareBikes.html'));
})

app.get('/compareScooters', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/compareScooters.html'));
})

app.get('/compareCars', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/compareCars.html'));
})

app.get('/compareCycles', (req, res) => {
    console.log(req.url);
    res.sendFile(path.join(__dirname, '/temp/compareCycles.html'));
})

app.post('/contact', (req, res) => {
    var myData = new Econtact(req.body);
    myData.save().then(() => {
        res.status(200).sendFile(redirect);
    }).catch(() => {
        res.status(404).send('Error!!');
    })
})

app.listen(8000, () => {
    console.log(`listening on port ${port} `);
})
