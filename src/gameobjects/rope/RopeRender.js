/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2022 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var NOOP = require('../../utils/NOOP');
var renderWebGL = NOOP;
var renderCanvas = NOOP;

if (typeof WEBGL_RENDERER)
{
    renderWebGL = require('./RopeWebGLRenderer');
}

if (typeof CANVAS_RENDERER)
{
    renderCanvas = require('./RopeCanvasRenderer');
}

module.exports = {

    renderWebGL: renderWebGL,
    renderCanvas: renderCanvas

};
