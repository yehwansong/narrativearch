/**
 *  File: L.SimpleGraticule.js
 *  Desc: A graticule for Leaflet maps in the L.CRS.Simple coordinate system.
 *  Auth: Andrew Blakey (ablakey@gmail.com)
 */
L.SimpleGraticule = L.LayerGroup.extend({
    options: {
        interval: 20,
        interval2: 10,
        showOriginLabel: true,
        redraw: 'move',
        hidden: false,
        zoomIntervals : []
    },

    lineStyle: {
        stroke: true,
        color: '#111',
        opacity: 0.6,
        weight: 1,
        interactive: false,
        clickable: false //legacy support
    },

    initialize: function(options) {
        L.LayerGroup.prototype.initialize.call(this);
        L.Util.setOptions(this, options);
    },

    onAdd: function(map) {
        this._map = map;

        var graticule = this.redraw();
        this._map.on('viewreset ' + this.options.redraw, graticule.redraw, graticule);

        this.eachLayer(map.addLayer, map);
    },

    onRemove: function(map) {
        map.off('viewreset '+ this.options.redraw, this.map);
        this.eachLayer(this.removeLayer, this);
    },

    hide: function() {
        this.options.hidden = true;
        this.redraw();
    },

    show: function() {
        this.options.hidden = false;
        this.redraw();
    },

    redraw: function() {
        this._bounds = this._map.getBounds().pad(0.5);

        this.clearLayers();

        if (!this.options.hidden) {

            var currentZoom = this._map.getZoom();

            for(var i = 0 ; i < this.options.zoomIntervals.length ; i++) {
                if(currentZoom >= this.options.zoomIntervals[i].start && currentZoom <= this.options.zoomIntervals[i].end){
                    this.options.interval = this.options.zoomIntervals[i].interval;
                    break;
                }
            }

            this.constructLines(this.getMins(), this.getLineCounts());

            if (this.options.showOriginLabel) {
                this.addLayer(this.addOriginLabel());
            }
        }

        return this;
    },

    getLineCounts: function() {
        return {
            x: Math.ceil((this._bounds.getEast() - this._bounds.getWest()) /
                this.options.interval),
            y: Math.ceil((this._bounds.getNorth() - this._bounds.getSouth()) /
                this.options.interval2)
        };
    },

    getMins: function() {
        //rounds up to nearest multiple of x
        var s = this.options.interval;
        var s2 = this.options.interval2;
        return {
            x: Math.floor(this._bounds.getWest() / s) * s,
            y: Math.floor(this._bounds.getSouth() / s2) * s2
        };
    },

    constructLines: function(mins, counts) {
        var lines = new Array(counts.x + counts.y);
        var labels = new Array(counts.x + counts.y);

        //for horizontal lines
        for (var i = 0; i <= counts.x; i++) {
            var x = mins.x + i * this.options.interval;
            lines[i] = this.buildXLine(x);
            labels[i] = this.buildLabel('gridlabel-horiz', x);
        }

        //for vertical lines
        for (var j = 0; j <= counts.y; j++) {
            var y = mins.y + j * this.options.interval2;
            lines[j + i] = this.buildYLine(y);
            labels[j + i] = this.buildLabel('gridlabel-vert', y);
        }

        lines.forEach(this.addLayer, this);
        labels.forEach(this.addLayer, this);
    },

    buildXLine: function(x) {
        var bottomLL = new L.LatLng(this._bounds.getSouth(), x);
        var topLL = new L.LatLng(this._bounds.getNorth(), x);

        return new L.Polyline([bottomLL, topLL], this.lineStyle);
    },

    buildYLine: function(y) {
        var leftLL = new L.LatLng(y, this._bounds.getWest());
        var rightLL = new L.LatLng(y, this._bounds.getEast());

        return new L.Polyline([leftLL, rightLL], this.lineStyle);
    },

    buildLabel: function(axis, val) {
        var bounds = this._map.getBounds().pad(-0.003);
        var latLng;
        if (axis == 'gridlabel-horiz') {
            latLng = new L.LatLng(bounds.getNorth(), val);
        } else {
            latLng = new L.LatLng(val, bounds.getWest());
        }
var k  
var name  
var iv = this.options.interval
    if (window.clicknumber == 15){

    // year09
if ( val == 0 ){name ='01', k ="Adam Towle" }
else if( val == iv*1 ){ name ="02",  k ="Caspar Frenken"}
else if( val == iv*2 ){ name ="03",  k ="Catrin Sonnabend"}
else if( val == iv*3 ){ name ="04",  k ="Loes Van Esch,<br> Simone Trum" }
else if( val == iv*4 ){ name ="05", k ="David Ahn,<br> Soojin Hong"}
else if( val == iv*5 ){ name ="06", k ="Emilio Macchia"}
else if( val == iv*6 ){ name ="07", k ="Gemma Villegas"}
else if( val == iv*7 ){ name ="08", k ="Helen Yeung<br>Hau Wing"}
else if( val == iv*8 ){ name ="09", k ="Ine Meganck,<br>Mies Van Roy"}
else if( val == iv*9 ){ name ="10", k ="Ines cox,<br>Lauren<br>Grusenmeyer"}
else if( val == iv*10 ){ name ="11", k ="Irene Bacchi,<br>Thanh Phong Lê"}
else if( val == iv*11 ){ name ="12", k ="Joris Bovijn"}
else if( val == iv*12 ){ name ="13", k ="Kyoung-Tae Kim"}
else if( val == iv*13 ){ name ="14", k ="Leanne Wijnsma"}
else if( val == iv*14 ){ name ="15", k ="Lien Bonte"}
else if( val == iv*15 ){ name ="16", k ="Louis Verhoeven"}
else if( val == iv*16 ){ name ="17", k ="Marina aurí"}
else if( val == iv*17 ){ name ="18", k ="Mark Simmonds"}
else if( val == iv*18 ){ name ="19", k ="Mathias Reynoird"}
else if( val == iv*19 ){ name ="20", k ="Michela Povoleri"}
else if( val == iv*20 ){ name ="21", k ="Niccolò Mazzoni"}
else if( val == iv*21 ){ name ="22", k ="Perrine Rousselet,<br>Linda Van Sommeren"}
else if( val == iv*22 ){ name ="23", k ="Peter Synak"}
else if( val == iv*23 ){ name ="24", k ="Pooroni Rhee"}
else if( val == iv*24 ){ name ="25", k ="Stefano Faoro"}
else if( val == iv*25 ){ name ="26", k ="Tim Heiler"}
else if( val == iv*26 ){ name ="27", k ="Zhe Qin"}
else if( val == iv*27 ){ name ="28", k ="Brendan Griffiths,<br>Robert Snowden"}
else if( val == iv*28 ){ name ="29", k ="Thomas Saxby"}
else{k =""}
}
    if (window.clicknumber == 14){
        // year10
if( val == 0 ){ name ="01", k ="Silvia Agozzino"}
else if( val == iv*1 ){ name ="02", k ="Geetika Alok"}
else if( val == iv*2 ){ name ="03", k ="Luigi Amato"}
else if( val == iv*3 ){ name ="04", k ="Carly Buteux"}
else if( val == iv*4 ){ name ="05", k ="Lizania Cruz"}
else if( val == iv*5 ){ name ="06", k ="Daniel Engström"}
else if( val == iv*6 ){ name ="07", k ="Ilke Gers"}
else if( val == iv*7 ){ name ="08", k ="Yuliya Gorlovetsky"}
else if( val == iv*8 ){ name ="09", k ="Emilio Grazzi"}
else if( val == iv*9 ){ name ="10", k ="Sarai De Haan"}
else if( val == iv*10 ){ name ="11", k ="Fabian Harb"}
else if( val == iv*11 ){ name ="12", k ="Christian<br>Hoffelner"}
else if( val == iv*12 ){ name ="13", k ="Mathew Kneebone"}
else if( val == iv*13 ){ name ="14", k ="Ilaria Marengo"}
else if( val == iv*14 ){ name ="15", k ="Niko Mihaljevic"}
else if( val == iv*15 ){ name ="16", k ="Petra Milicki"}
else if( val == iv*16 ){ name ="17", k ="Pedro Moraes"}
else if( val == iv*17 ){ name ="18", k ="Nina Paim"}
else if( val == iv*18 ){ name ="19", k ="Asad Pervaiz"}
else if( val == iv*19 ){ name ="20", k ="Claudia Polizzi"}
else if( val == iv*20 ){ name ="21", k ="Erica Preli"}
else if( val == iv*21 ){ name ="22", k ="Katja Schloz"}
else if( val == iv*22 ){ name ="23", k ="Irina Shapiro"}
else if( val == iv*23 ){ name ="24", k ="B Soop Shim,<br>Jun Shim"}
else if( val == iv*24 ){ name ="25", k ="Daniela Venturini"}
else if( val == iv*25 ){ name ="26", k ="Hrvoje Zivcic"} 
else{k =""}
}
    if (window.clicknumber == 13){
        // year11
if( val == 0 ){ name ="01", k ="Federico Antonini"}
else if( val == iv*1  ){ name ="02", k ="Elisabeth Aster"}
else if( val == iv*2  ){ name ="03", k ="Etienne Aubert Bonn"}
else if( val == iv*3  ){ name ="04", k ="Hester Barnard"}
else if( val == iv*4  ){ name ="05", k ="Simone Bastianelli"}
else if( val == iv*5  ){ name ="06", k ="Antonio Bertossi"}
else if( val == iv*6  ){ name ="07", k ="Ricardo Bojorquez"}
else if( val == iv*7  ){ name ="08", k ="Elisabetta Cassin"}
else if( val == iv*8  ){ name ="09", k ="Jeremiah Chiu"}
else if( val == iv*9  ){ name ="10", k ="Virginia Chow"}
else if( val == iv*10 ){ name ="11", k ="Anna Craemer"}
else if( val == iv*11 ){ name ="12", k ="Ruben Dries<br>Doornweerd"}
else if( val == iv*12 ){ name ="13", k ="Bianca Fabbri"}
else if( val == iv*13 ){ name ="14", k ="Daniel Frota<br>De Abreu"}
else if( val == iv*14 ){ name ="15", k ="Michele Galluzzo"}
else if( val == iv*15 ){ name ="16", k ="Caterina Giuliani"}
else if( val == iv*16 ){ name ="17", k ="Renata Graw"}
else if( val == iv*17 ){ name ="18", k ="Viktoria Hohl"}
else if( val == iv*18 ){ name ="19", k ="Johanesen Karilyn"}
else if( val == iv*19 ){ name ="20", k ="Cameron David<br>Lofthouse"}
else if( val == iv*20 ){ name ="21", k ="Guilherme t.<br>Machiavelli"}
else if( val == iv*21 ){ name ="22", k ="Laura Mata"}
else if( val == iv*22 ){ name ="23", k ="Homer Mendoza"}
else if( val == iv*23 ){ name ="24", k ="Eline Mul"}
else if( val == iv*24 ){ name ="25", k ="Tatiana Ozheredova"}
else if( val == iv*25 ){ name ="26", k ="Melissa Pilon"}
else if( val == iv*26 ){ name ="27", k ="Wong Lip Yeow"}
else{k =""}
}
    if (window.clicknumber == 12){
        // year12
if( val == 0 ){ name ="01", k ="Ryu Ajeong"}
else if( val == iv*1  ){ name ="02", k ="Nicholas Almquist"}
else if( val == iv*2  ){ name ="03", k ="Francesca Battiato"}
else if( val == iv*3  ){ name ="04", k ="María Eugenia<br>Calva Díaz"}
else if( val == iv*4  ){ name ="05", k ="Gem Copeland"}
else if( val == iv*5  ){ name ="06", k ="Philip Cronerud"}
else if( val == iv*6  ){ name ="07", k ="Linda Dostálková"}
else if( val == iv*7  ){ name ="08", k ="Eunjung Lee"}
else if( val == iv*8  ){ name ="09", k ="Ayumi Higuchi"}
else if( val == iv*9  ){ name ="10", k ="Jieun Lee"}
else if( val == iv*10 ){ name ="11", k ="Tyler Johnson,<br>Stefano Marra"}
else if( val == iv*11 ){ name ="12", k ="Nadezda Kozulina"}
else if( val == iv*12 ){ name ="13", k ="Mateus Valadares,<br>Thiago Lacaz"}
else if( val == iv*13 ){ name ="14", k ="Iván López"}
else if( val == iv*14 ){ name ="15", k ="Anna Nazarova"}
else if( val == iv*15 ){ name ="16", k ="Maria-Louiza<br>Ouranou"}
else if( val == iv*16 ){ name ="17", k ="Julia Schmidt"}
else if( val == iv*17 ){ name ="18", k ="John-Paul Wolforth"}
else if( val == iv*18 ){ name ="19", k ="Matteo Ventura"}
else{k =""}
}
    if (window.clicknumber == 11){
        // year13
if( val == 0 ){ name ="01", k ="Hanna Aksionova"}
else if( val == iv*1  ){ name ="02", k ="Olle Alm"}
else if( val == iv*2  ){ name ="03", k ="Bettina Birmarcker"}
else if( val == iv*3  ){ name ="04", k ="Liz Borger"}
else if( val == iv*4  ){ name ="05", k ="Joanne Chew"}
else if( val == iv*5  ){ name ="06", k ="Timo Demollin"}
else if( val == iv*6  ){ name ="07", k ="Arianna Di Betta"}
else if( val == iv*7  ){ name ="08", k ="Olya Domoradova"}
else if( val == iv*8  ){ name ="09", k ="Rebecca Eng"}
else if( val == iv*9  ){ name ="10", k ="Meg Forsyth"}
else if( val == iv*10 ){ name ="11", k ="Camille Gervais"}
else if( val == iv*11 ){ name ="12", k ="Jordan Gushwa"}
else if( val == iv*12 ){ name ="13", k ="Katerina Kochkina"}
else if( val == iv*13 ){ name ="14", k ="Oeun Kwon"}
else if( val == iv*14 ){ name ="15", k ="Kristoffer Larberg"}
else if( val == iv*15 ){ name ="16", k ="Luca Napoli"}
else if( val == iv*16 ){ name ="17", k ="Marino<br>Krstačić-Furić"}
else if( val == iv*17 ){ name ="18", k ="Coraline Mas-Prévost"}
else if( val == iv*18 ){ name ="19", k ="Ines Nepomuceno"}
else if( val == iv*19 ){ name ="20", k ="Moriz Oberberger,<br>Max Schachten"}
else if( val == iv*20 ){ name ="21", k ="Taku Okamoto"}
else if( val == iv*21 ){ name ="22", k ="Greg Ponchak"}
else if( val == iv*22 ){ name ="23", k ="Enno Pötschke"}
else if( val == iv*23 ){ name ="24", k ="Josh b. Smith"}
else if( val == iv*24 ){ name ="25", k ="Rebecca Worth"}
else{k =""}
}
    if (window.clicknumber == 10){
        // year14
if( val == 0 ){ name ="01", k ="Brian Berding"}
else if( val == iv*1  ){ name ="02", k ="Leonard Herrmann"}
else if( val == iv*2  ){ name ="03", k ="Zhenia Vasiliev"}
else if( val == iv*3  ){ name ="04", k ="Annelies Devriese"}
else if( val == iv*4  ){ name ="05", k ="Luciana Orvat"}
else if( val == iv*5  ){ name ="06", k ="Umut Altintaş"}
else if( val == iv*6  ){ name ="07", k ="Youngeun Sohn"}
else if( val == iv*7  ){ name ="08", k ="Lyanne Tonk"}
else if( val == iv*8  ){ name ="09", k ="Dina Silanteva"}
else if( val == iv*9  ){ name ="10", k ="Nicola Chemotti"}
else if( val == iv*10 ){ name ="11", k ="Tariq Heijboer"}
else if( val == iv*11 ){ name ="12", k ="Line arngaard<br>sørensen"}
else if( val == iv*12 ){ name ="13", k ="Anaïs Cuillier<br>Cantillon"}
else if( val == iv*13 ){ name ="14", k ="Jean Egger"}
else if( val == iv*14 ){ name ="15", k ="Jin Kwang Kim"}
else if( val == iv*15 ){ name ="16", k ="Maria Putri"}
else{k =""}
}
    if (window.clicknumber == 9){
        // year15
if( val == 0 ){ name ="01", k ="Yuri Cho"}
else if( val == iv*1  ){ name ="02", k ="Yelizsecerli"}
else if( val == iv*2  ){ name ="03", k ="Pintonato"}
else if( val == iv*3  ){ name ="04", k ="Wooseok Jang"}
else if( val == iv*4  ){ name ="05", k ="Tim Wan"}
else if( val == iv*5  ){ name ="06", k ="Mathieu Huppé"}
else if( val == iv*6  ){ name ="07", k ="Leah Surynt"}
else if( val == iv*7  ){ name ="08", k ="Hubbell Chen"}
else if( val == iv*8  ){ name ="09", k ="Danahaddad"}
else if( val == iv*9  ){ name ="10", k ="Barbara Ermeti"}
else if( val == iv*10 ){ name ="11", k ="Hwirhan Cha"}
else{k =""}
}
    if (window.clicknumber == 8){
        // year16
if( val == 0 ){ name ="01", k ="Yun Yu"}
else if( val == iv*1  ){ name ="02", k ="Stefano Corradetti"}
else if( val == iv*2  ){ name ="03", k ="Sophia Goedecke,<br>Felix Flemmer"}
else if( val == iv*3  ){ name ="04", k ="Raphael Mathias"}
else if( val == iv*4  ){ name ="05", k ="Oliver Schwamkrug"}
else if( val == iv*5  ){ name ="06", k ="Marijn Bril"}
else if( val == iv*6  ){ name ="07", k ="Marco Tomassoli"}
else if( val == iv*7  ){ name ="08", k ="Julianna Bach"}
else if( val == iv*8  ){ name ="09", k ="Ivo Rubboli"}
else if( val == iv*9  ){ name ="10", k ="Hua Shu"}
else if( val == iv*10 ){ name ="11", k ="Heeyeon Yun"}
else if( val == iv*11 ){ name ="12", k ="Gaby Luong"}
else if( val == iv*12 ){ name ="13", k ="Dho Yee Chung"}
else if( val == iv*13 ){ name ="14", k ="Daniel Shan"}
else if( val == iv*14 ){ name ="15", k ="Bo-Won Keum"}
else if( val == iv*15 ){ name ="16", k ="Azzurra Poldi Allai"}
else if( val == iv*16 ){ name ="17", k ="Julianna Bach"}
else{k =""}
}

        return L.marker(latLng, {
            interactive: false,
            clickable: false, //legacy support
            icon: L.divIcon({
                iconSize: [0, 0],
                className: 'leaflet-grid-label',
                html: '<div class="' + axis + ' underline' + name + '" >' + k + '</div>'
            })
        });
    },

    addOriginLabel: function() {
        return L.marker([0, 0], {
            interactive: false,
            clickable: false, //legacy support
            icon: L.divIcon({
                iconSize: [0, 0],
                className: 'leaflet-grid-label'
            })
        });
    }
});

L.simpleGraticule = function(options) {
    return new L.SimpleGraticule(options);
};