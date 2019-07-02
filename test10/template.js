// Load in our dependencies
var fs = require('fs');
var templater = require('spritesheet-templates');

// Register our new template
var scssMinimalHandlebars = fs.readFileSync('./test10/scss-minimal.handlebars', 'utf8');
templater.addHandlebarsTemplate('scss-minimal', scssMinimalHandlebars);

// Run our templater
var output = templater({
    sprites: [{
        name: 'github', x: 0, y: 0, width: 10, height: 20
    }, {
        name: 'twitter', x: 10, y: 20, width: 20, height: 30
    }, {
        name: 'rss', x: 30, y: 50, width: 50, height: 50
    }],
    spritesheet: {
        width: 80, height: 100, image: 'url/path/to/spritesheet.png'
    }
}, { format: 'scss-minimal' }); /*
$github: (0px, 0px, 0px, 0px, 10px, 20px, 80px, 100px, 'url/path/to/spritesheet.png', 'github', );
$twitter: (10px, 20px, -10px, -20px, 20px, 30px, 80px, 100px, 'url/path/to/spritesheet.png', 'twitter', );
$rss: (30px, 50px, -30px, -50px, 50px, 50px, 80px, 100px, 'url/path/to/spritesheet.png', 'rss', );
$spritesheet-sprites: ($github, $twitter, $rss, );
$spritesheet: (80px, 100px, 'url/path/to/spritesheet.png', $spritesheet-sprites, );
*/

console.log(output);