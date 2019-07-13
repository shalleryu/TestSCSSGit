// spritesheet-templates
// Compilation
var templater = require('spritesheet-templates');
templater.addHandlebarsTemplate('css','')
var x = templater({
    sprites: [{
        name: 'apple', x: 0, y: 0, width: 10, height: 20
    }, {
        name: 'orange', x: 10, y: 20, width: 20, height: 30
    }, {
        name: 'banana', x: 30, y: 50, width: 50, height: 50
    }],
    spritesheet: {
        width: 80, height: 100, image: 'url/path/to/spritesheet.png'
    },
}, {
    format: 'css', formatOpts: {
        cssSelector: function (sprite) {
            return '.iconnnnnn-' + sprite.name;
        },
    }
    });
console.log(x);