import * as radiosity from './radiosityfunction.js';
// Basis for this came from cube_regl.js demo given in class.

let run=0;

var regl = createREGL()
window.addEventListener("load", load);

let vertexSource = undefined;
let fragSource = undefined;

function load()
{
    fetch('radiosity.vert.glsl', {cache: "no-store"})
    .then(function(response) {
        return response.text();
    })
    .then(function(txt) {
        vertexSource = txt;
        init();
    });

    fetch('radiosity.frag.glsl', {cache: "no-store"})
    .then(function(response) {
        return response.text();
    })
    .then(function(txt) {
        fragSource = txt;
        init();
    });

    document.addEventListener('keydown', (event) => {
        const keycode = event.key;
        if(keycode == ' ')
        {
            if(run==0)
            {
                run=1
            }
            else
            {
                run=0
            }
        }
    });
}


let final=radiosity.radiosityinit()

console.log(final)

function init()
{
    if(vertexSource === undefined 
        || fragSource === undefined)
        return;

    


    const FLOAT_SIZE = Float32Array.BYTES_PER_ELEMENT;

    const triangleBuffer = regl.buffer(new Float32Array([
        -1, -1.0, -1.0, 0.8959438904778066, 0.0, 0.0, -1, -0.6666666666666667, -1.0, 0.7729597736938212, 0.0, 0.0, -1, -0.33333333333333337, -1.0, 0.8532084574354033, 0.0, 0.0, -1, 0.0, -1.0, 0.9245359672506024, 0.0, 0.0, -1, 0.33333333333333326, -1.0, 0.931373200473033, 0.0, 0.0, -1, 0.6666666666666665, -1.0, 0.8310158282612299, 0.0, 0.0, -1, 1.0, -1.0, 0.46189086685217073, 0.0, 0.0, -1, -1.0, -0.6666666666666667, 0.7455892968616356, 0.0, 0.0, -1, -0.6666666666666667, -0.6666666666666667, 0.6391334231791971, 0.0, 0.0, -1, -0.33333333333333337, -0.6666666666666667, 0.7697592047842837, 0.0, 0.0, -1, 0.0, -0.6666666666666667, 0.8684795996844243, 0.0, 0.0, -1, 0.33333333333333326, -0.6666666666666667, 0.8158948979743683, 0.0, 0.0, -1, 0.6666666666666665, -0.6666666666666667, 0.3545831070319134, 0.0, 0.0, -1, 1.0, -0.6666666666666667, 0.23094543342608537, 0.0, 0.0, -1, -1.0, -0.33333333333333337, 0.7455892968616356, 0.0, 0.0, -1, -0.6666666666666667, -0.33333333333333337, 0.6391334231791971, 0.0, 0.0, -1, -0.33333333333333337, -0.33333333333333337, 0.7697592047842837, 0.0, 0.0, -1, 0.0, -0.33333333333333337, 0.8684795996844243, 0.0, 0.0, -1, 0.33333333333333326, -0.33333333333333337, 0.8158948979743683, 0.0, 0.0, -1, 0.6666666666666665, -0.33333333333333337, 0.3545831070319134, 0.0, 0.0, -1, 1.0, -0.33333333333333337, 0.23094543342608537, 0.0, 0.0, -1, -1.0, 0.0, 0.7455892968616356, 0.0, 0.0, -1, -0.6666666666666667, 0.0, 0.6391334231791971, 0.0, 0.0, -1, -0.33333333333333337, 0.0, 0.7697592047842837, 0.0, 0.0, -1, 0.0, 0.0, 0.8684795996844243, 0.0, 0.0, -1, 0.33333333333333326, 0.0, 0.8158948979743683, 0.0, 0.0, -1, 0.6666666666666665, 0.0, 0.3545831070319134, 0.0, 0.0, -1, 1.0, 0.0, 0.23094543342608537, 0.0, 0.0, -1, -1.0, 0.33333333333333326, 0.7455892968616356, 0.0, 0.0, -1, -0.6666666666666667, 0.33333333333333326, 0.6391334231791971, 0.0, 0.0, -1, -0.33333333333333337, 0.33333333333333326, 0.7697592047842837, 0.0, 0.0, -1, 0.0, 0.33333333333333326, 0.8684795996844243, 0.0, 0.0, -1, 0.33333333333333326, 0.33333333333333326, 0.8158948979743683, 0.0, 0.0, -1, 0.6666666666666665, 0.33333333333333326, 0.3545831070319134, 0.0, 0.0, -1, 1.0, 0.33333333333333326, 0.23094543342608537, 0.0, 0.0, -1, -1.0, 0.6666666666666665, 0.7455892968616356, 0.0, 0.0, -1, -0.6666666666666667, 0.6666666666666665, 0.6391334231791971, 0.0, 0.0, -1, -0.33333333333333337, 0.6666666666666665, 0.7697592047842837, 0.0, 0.0, -1, 0.0, 0.6666666666666665, 0.8684795996844243, 0.0, 0.0, -1, 0.33333333333333326, 0.6666666666666665, 0.8158948979743683, 0.0, 0.0, -1, 0.6666666666666665, 0.6666666666666665, 0.3545831070319134, 0.0, 0.0, -1, 1.0, 0.6666666666666665, 0.23094543342608537, 0.0, 0.0, -1, -1.0, 1.0, 0.8321830248365363, 0.0, 0.0, -1, -0.6666666666666667, 1.0, 0.8268650516247509, 0.0, 0.0, -1, -0.33333333333333337, 1.0, 0.9021935941634316, 0.0, 0.0, -1, 0.0, 1.0, 0.9393681051339958, 0.0, 0.0, -1, 0.33333333333333326, 1.0, 0.8760128566722615, 0.0, 0.0, -1, 0.6666666666666665, 1.0, 0.42668634576289943, 0.0, 0.0, -1, 1.0, 1.0, 0.5, 0.0, 0.0, 1.0, -1.0, -1.0, 0.0, 0.0, 0.8959438904778066, 1.0, -0.6666666666666667, -1.0, 0.0, 0.0, 0.7729597736938212, 1.0, -0.33333333333333337, -1.0, 0.0, 0.0, 0.8532084574354033, 1.0, 0.0, -1.0, 0.0, 0.0, 0.9245359672506024, 1.0, 0.33333333333333326, -1.0, 0.0, 0.0, 0.931373200473033, 1.0, 0.6666666666666665, -1.0, 0.0, 0.0, 0.8310158282612299, 1.0, 1.0, -1.0, 0.0, 0.0, 0.46189086685217073, 1.0, -1.0, -0.6666666666666667, 0.0, 0.0, 0.7455892968616356, 1.0, -0.6666666666666667, -0.6666666666666667, 0.0, 0.0, 0.6391334231791971, 1.0, -0.33333333333333337, -0.6666666666666667, 0.0, 0.0, 0.7697592047842837, 1.0, 0.0, -0.6666666666666667, 0.0, 0.0, 0.8684795996844243, 1.0, 0.33333333333333326, -0.6666666666666667, 0.0, 0.0, 0.8158948979743683, 1.0, 0.6666666666666665, -0.6666666666666667, 0.0, 0.0, 0.3545831070319134, 1.0, 1.0, -0.6666666666666667, 0.0, 0.0, 0.23094543342608537, 1.0, -1.0, -0.33333333333333337, 0.0, 0.0, 0.7455892968616356, 1.0, -0.6666666666666667, -0.33333333333333337, 0.0, 0.0, 0.6391334231791971, 1.0, -0.33333333333333337, -0.33333333333333337, 0.0, 0.0, 0.7697592047842837, 1.0, 0.0, -0.33333333333333337, 0.0, 0.0, 0.8684795996844243, 1.0, 0.33333333333333326, -0.33333333333333337, 0.0, 0.0, 0.8158948979743683, 1.0, 0.6666666666666665, -0.33333333333333337, 0.0, 0.0, 0.3545831070319134, 1.0, 1.0, -0.33333333333333337, 0.0, 0.0, 0.23094543342608537, 1.0, -1.0, 0.0, 0.0, 0.0, 0.7455892968616356, 1.0, -0.6666666666666667, 0.0, 0.0, 0.0, 0.6391334231791971, 1.0, -0.33333333333333337, 0.0, 0.0, 0.0, 0.7697592047842837, 1.0, 0.0, 0.0, 0.0, 0.0, 0.8684795996844243, 1.0, 0.33333333333333326, 0.0, 0.0, 0.0, 0.8158948979743683, 1.0, 0.6666666666666665, 0.0, 0.0, 0.0, 0.3545831070319134, 1.0, 1.0, 0.0, 0.0, 0.0, 0.23094543342608537, 1.0, -1.0, 0.33333333333333326, 0.0, 0.0, 0.7455892968616356, 1.0, -0.6666666666666667, 0.33333333333333326, 0.0, 0.0, 0.6391334231791971, 1.0, -0.33333333333333337, 0.33333333333333326, 0.0, 0.0, 0.7697592047842837, 1.0, 0.0, 0.33333333333333326, 0.0, 0.0, 0.8684795996844243, 1.0, 0.33333333333333326, 0.33333333333333326, 0.0, 0.0, 0.8158948979743683, 1.0, 0.6666666666666665, 0.33333333333333326, 0.0, 0.0, 0.3545831070319134, 1.0, 1.0, 0.33333333333333326, 0.0, 0.0, 0.23094543342608537, 1.0, -1.0, 0.6666666666666665, 0.0, 0.0, 0.7455892968616356, 1.0, -0.6666666666666667, 0.6666666666666665, 0.0, 0.0, 0.6391334231791971, 1.0, -0.33333333333333337, 0.6666666666666665, 0.0, 0.0, 0.7697592047842837, 1.0, 0.0, 0.6666666666666665, 0.0, 0.0, 0.8684795996844243, 1.0, 0.33333333333333326, 0.6666666666666665, 0.0, 0.0, 0.8158948979743683, 1.0, 0.6666666666666665, 0.6666666666666665, 0.0, 0.0, 0.3545831070319134, 1.0, 1.0, 0.6666666666666665, 0.0, 0.0, 0.23094543342608537, 1.0, -1.0, 1.0, 0.0, 0.0, 0.8321830248365363, 1.0, -0.6666666666666667, 1.0, 0.0, 0.0, 0.8268650516247509, 1.0, -0.33333333333333337, 1.0, 0.0, 0.0, 0.9021935941634316, 1.0, 0.0, 1.0, 0.0, 0.0, 0.9393681051339958, 1.0, 0.33333333333333326, 1.0, 0.0, 0.0, 0.8760128566722615, 1.0, 0.6666666666666665, 1.0, 0.0, 0.0, 0.42668634576289943, 1.0, 1.0, 1.0, 0.0, 0.0, 0.5, -1.0, 1.0, -1.0, 0.5, 0.5, 0.5, -0.6666666666666667, 1.0, -1.0, 0.125, 0.125, 0.125, -0.33333333333333337, 1.0, -1.0, 0.125, 0.125, 0.125, 0.0, 1.0, -1.0, 0.125, 0.125, 0.125, 0.33333333333333326, 1.0, -1.0, 0.125, 0.125, 0.125, 0.6666666666666665, 1.0, -1.0, 0.125, 0.125, 0.125, 1.0, 1.0, -1.0, 0.25, 0.25, 0.25, -1.0, 1.0, -0.6666666666666667, 0.125, 0.125, 0.125, -0.6666666666666667, 1.0, -0.6666666666666667, 0.015625, 0.015625, 0.015625, -0.33333333333333337, 1.0, -0.6666666666666667, 0.015625, 0.015625, 0.015625, 0.0, 1.0, -0.6666666666666667, 0.015625, 0.015625, 0.015625, 0.33333333333333326, 1.0, -0.6666666666666667, 0.015625, 0.015625, 0.015625, 0.6666666666666665, 1.0, -0.6666666666666667, 0.015625, 0.015625, 0.015625, 1.0, 1.0, -0.6666666666666667, 0.125, 0.125, 0.125, -1.0, 1.0, -0.33333333333333337, 0.125, 0.125, 0.125, -0.6666666666666667, 1.0, -0.33333333333333337, 0.015625, 0.015625, 0.015625, -0.33333333333333337, 1.0, -0.33333333333333337, 0.015625, 0.015625, 0.015625, 0.0, 1.0, -0.33333333333333337, 0.015625, 0.015625, 0.015625, 0.33333333333333326, 1.0, -0.33333333333333337, 0.015625, 0.015625, 0.015625, 0.6666666666666665, 1.0, -0.33333333333333337, 0.015625, 0.015625, 0.015625, 1.0, 1.0, -0.33333333333333337, 0.125, 0.125, 0.125, -1.0, 1.0, 0.0, 0.125, 0.125, 0.125, -0.6666666666666667, 1.0, 0.0, 0.015625, 0.015625, 0.015625, -0.33333333333333337, 1.0, 0.0, 0.015625, 0.015625, 0.015625, 0.0, 1.0, 0.0, 0.015625, 0.015625, 0.015625, 0.33333333333333326, 1.0, 0.0, 0.015625, 0.015625, 0.015625, 0.6666666666666665, 1.0, 0.0, 0.015625, 0.015625, 0.015625, 1.0, 1.0, 0.0, 0.125, 0.125, 0.125, -1.0, 1.0, 0.33333333333333326, 0.125, 0.125, 0.125, -0.6666666666666667, 1.0, 0.33333333333333326, 0.015625, 0.015625, 0.015625, -0.33333333333333337, 1.0, 0.33333333333333326, 0.015625, 0.015625, 0.015625, 0.0, 1.0, 0.33333333333333326, 0.015625, 0.015625, 0.015625, 0.33333333333333326, 1.0, 0.33333333333333326, 0.015625, 0.015625, 0.015625, 0.6666666666666665, 1.0, 0.33333333333333326, 0.015625, 0.015625, 0.015625, 1.0, 1.0, 0.33333333333333326, 0.125, 0.125, 0.125, -1.0, 1.0, 0.6666666666666665, 0.125, 0.125, 0.125, -0.6666666666666667, 1.0, 0.6666666666666665, 0.015625, 0.015625, 0.015625, -0.33333333333333337, 1.0, 0.6666666666666665, 0.015625, 0.015625, 0.015625, 0.0, 1.0, 0.6666666666666665, 0.015625, 0.015625, 0.015625, 0.33333333333333326, 1.0, 0.6666666666666665, 0.015625, 0.015625, 0.015625, 0.6666666666666665, 1.0, 0.6666666666666665, 0.015625, 0.015625, 0.015625, 1.0, 1.0, 0.6666666666666665, 0.125, 0.125, 0.125, -1.0, 1.0, 1.0, 0.25, 0.25, 0.25, -0.6666666666666667, 1.0, 1.0, 0.125, 0.125, 0.125, -0.33333333333333337, 1.0, 1.0, 0.125, 0.125, 0.125, 0.0, 1.0, 1.0, 0.125, 0.125, 0.125, 0.33333333333333326, 1.0, 1.0, 0.125, 0.125, 0.125, 0.6666666666666665, 1.0, 1.0, 0.125, 0.125, 0.125, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, -1.0, -1.0, -1.0, 0.8959438904778066, 0.8959438904778066, 0.8959438904778066, -0.6666666666666667, -1.0, -1.0, 0.7348175435137223, 0.7348175435137223, 0.7348175435137223, -0.33333333333333337, -1.0, -1.0, 0.7527141392786731, 0.7527141392786731, 0.7527141392786731, 0.0, -1.0, -1.0, 0.7611695205858783, 0.7611695205858783, 0.7611695205858783, 0.33333333333333326, -1.0, -1.0, 0.7594535846061259, 0.7594535846061259, 0.7594535846061259, 0.6666666666666665, -1.0, -1.0, 0.7477201167016567, 0.7477201167016567, 0.7477201167016567, 1.0, -1.0, -1.0, 0.811390959234221, 0.811390959234221, 0.811390959234221, -1.0, -1.0, -0.6666666666666667, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -0.6666666666666667, -1.0, -0.6666666666666667, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, -0.33333333333333337, -1.0, -0.6666666666666667, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.0, -1.0, -0.6666666666666667, 0.5793790390689358, 0.5793790390689358, 0.5793790390689358, 0.33333333333333326, -1.0, -0.6666666666666667, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.6666666666666665, -1.0, -0.6666666666666667, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, 1.0, -1.0, -0.6666666666666667, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -1.0, -1.0, -0.33333333333333337, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -0.6666666666666667, -1.0, -0.33333333333333337, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, -0.33333333333333337, -1.0, -0.33333333333333337, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.0, -1.0, -0.33333333333333337, 0.5793790390689358, 0.5793790390689358, 0.5793790390689358, 0.33333333333333326, -1.0, -0.33333333333333337, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.6666666666666665, -1.0, -0.33333333333333337, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, 1.0, -1.0, -0.33333333333333337, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -1.0, -1.0, 0.0, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -0.6666666666666667, -1.0, 0.0, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, -0.33333333333333337, -1.0, 0.0, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.0, -1.0, 0.0, 0.5793790390689358, 0.5793790390689358, 0.5793790390689358, 0.33333333333333326, -1.0, 0.0, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.6666666666666665, -1.0, 0.0, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, 1.0, -1.0, 0.0, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -1.0, -1.0, 0.33333333333333326, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -0.6666666666666667, -1.0, 0.33333333333333326, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, -0.33333333333333337, -1.0, 0.33333333333333326, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.0, -1.0, 0.33333333333333326, 0.5793790390689358, 0.5793790390689358, 0.5793790390689358, 0.33333333333333326, -1.0, 0.33333333333333326, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.6666666666666665, -1.0, 0.33333333333333326, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, 1.0, -1.0, 0.33333333333333326, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -1.0, -1.0, 0.6666666666666665, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -0.6666666666666667, -1.0, 0.6666666666666665, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, -0.33333333333333337, -1.0, 0.6666666666666665, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.0, -1.0, 0.6666666666666665, 0.5793790390689358, 0.5793790390689358, 0.5793790390689358, 0.33333333333333326, -1.0, 0.6666666666666665, 0.571651451258903, 0.571651451258903, 0.571651451258903, 0.6666666666666665, -1.0, 0.6666666666666665, 0.5494378593905053, 0.5494378593905053, 0.5494378593905053, 1.0, -1.0, 0.6666666666666665, 0.7269607727148274, 0.7269607727148274, 0.7269607727148274, -1.0, -1.0, 1.0, 0.811390959234221, 0.811390959234221, 0.811390959234221, -0.6666666666666667, -1.0, 1.0, 0.7477201167016568, 0.7477201167016568, 0.7477201167016568, -0.33333333333333337, -1.0, 1.0, 0.7594535846061259, 0.7594535846061259, 0.7594535846061259, 0.0, -1.0, 1.0, 0.7611695205858783, 0.7611695205858783, 0.7611695205858783, 0.33333333333333326, -1.0, 1.0, 0.7527141392786731, 0.7527141392786731, 0.7527141392786731, 0.6666666666666665, -1.0, 1.0, 0.7348175435137224, 0.7348175435137224, 0.7348175435137224, 1.0, -1.0, 1.0, 0.8959438904778066, 0.8959438904778066, 0.8959438904778066, -1.0, -1.0, -1.0, 0.9288338630142712, 0.9288338630142712, 0.9288338630142712, -0.6666666666666667, -1.0, -1.0, 0.8215932828496106, 0.8215932828496106, 0.8215932828496106, -0.33333333333333337, -1.0, -1.0, 0.8451091292932376, 0.8451091292932376, 0.8451091292932376, 0.0, -1.0, -1.0, 0.8563894253818285, 0.8563894253818285, 0.8563894253818285, 0.33333333333333326, -1.0, -1.0, 0.8540841809094981, 0.8540841809094981, 0.8540841809094981, 0.6666666666666665, -1.0, -1.0, 0.8384854412456442, 0.8384854412456442, 0.8384854412456442, 1.0, -1.0, -1.0, 0.8735694950808325, 0.8735694950808325, 0.8735694950808325, -1.0, -0.6666666666666667, -1.0, 0.8372516572091125, 0.8372516572091125, 0.8372516572091125, -0.6666666666666667, -0.6666666666666667, -1.0, 0.7604705893173652, 0.7604705893173652, 0.7604705893173652, -0.33333333333333337, -0.6666666666666667, -1.0, 0.8015654109838284, 0.8015654109838284, 0.8015654109838284, 0.0, -0.6666666666666667, -1.0, 0.8170352546533239, 0.8170352546533239, 0.8170352546533239, 0.33333333333333326, -0.6666666666666667, -1.0, 0.8035550473899145, 0.8035550473899145, 0.8035550473899145, 0.6666666666666665, -0.6666666666666667, -1.0, 0.7636551422991508, 0.7636551422991508, 0.7636551422991508, 1.0, -0.6666666666666667, -1.0, 0.8659857913219526, 0.8659857913219526, 0.8659857913219526, -1.0, -0.33333333333333337, -1.0, 0.9157045113167637, 0.9157045113167637, 0.9157045113167637, -0.6666666666666667, -0.33333333333333337, -1.0, 0.9127446657935898, 0.9127446657935898, 0.9127446657935898, -0.33333333333333337, -0.33333333333333337, -1.0, 0.9741621635118239, 0.9741621635118239, 0.9741621635118239, 0.0, -0.33333333333333337, -1.0, 0.9983446674503994, 0.9983446674503994, 0.9983446674503994, 0.33333333333333326, -0.33333333333333337, -1.0, 0.9777273212453921, 0.9777273212453921, 0.9777273212453921, 0.6666666666666665, -0.33333333333333337, -1.0, 0.9179009333191794, 0.9179009333191794, 0.9179009333191794, 1.0, -0.33333333333333337, -1.0, 0.9412485518620823, 0.9412485518620823, 0.9412485518620823, -1.0, 0.0, -1.0, 0.9563488062581114, 0.9563488062581114, 0.9563488062581114, -0.6666666666666667, 0.0, -1.0, 1.0109588580305386, 1.0109588580305386, 1.0109588580305386, -0.33333333333333337, 0.0, -1.0, 1.1237980782674584, 1.1237980782674584, 1.1237980782674584, 0.0, 0.0, -1.0, 1.1634947341861643, 1.1634947341861643, 1.1634947341861643, 0.33333333333333326, 0.0, -1.0, 1.132638946500688, 1.132638946500688, 1.132638946500688, 0.6666666666666665, 0.0, -1.0, 1.0395702058215723, 1.0395702058215723, 1.0395702058215723, 1.0, 0.0, -1.0, 0.9686796775953131, 0.9686796775953131, 0.9686796775953131, -1.0, 0.33333333333333326, -1.0, 0.9111018559903314, 0.9111018559903314, 0.9111018559903314, -0.6666666666666667, 0.33333333333333326, -1.0, 0.921629632682588, 0.921629632682588, 0.921629632682588, -0.33333333333333337, 0.33333333333333326, -1.0, 1.0819135974931693, 1.0819135974931693, 1.0819135974931693, 0.0, 0.33333333333333326, -1.0, 1.1534059137364756, 1.1534059137364756, 1.1534059137364756, 0.33333333333333326, 0.33333333333333326, -1.0, 1.105361994731517, 1.105361994731517, 1.105361994731517, 0.6666666666666665, 0.33333333333333326, -1.0, 0.9451939284313058, 0.9451939284313058, 0.9451939284313058, 1.0, 0.33333333333333326, -1.0, 0.8732950417999328, 0.8732950417999328, 0.8732950417999328, -1.0, 0.6666666666666665, -1.0, 0.4483946725035635, 0.4483946725035635, 0.4483946725035635, -0.6666666666666667, 0.6666666666666665, -1.0, 0.11827865283853965, 0.11827865283853965, 0.11827865283853965, -0.33333333333333337, 0.6666666666666665, -1.0, 0.12808719558963913, 0.12808719558963913, 0.12808719558963913, 0.0, 0.6666666666666665, -1.0, 0.12966977783853365, 0.12966977783853365, 0.12966977783853365, 0.33333333333333326, 0.6666666666666665, -1.0, 0.12233184291611977, 0.12233184291611977, 0.12233184291611977, 0.6666666666666665, 0.6666666666666665, -1.0, 0.10882320736270751, 0.10882320736270751, 0.10882320736270751, 1.0, 0.6666666666666665, -1.0, 0.23094543342608537, 0.23094543342608537, 0.23094543342608537, -1.0, 1.0, -1.0, 0.25, 0.25, 0.25, -0.6666666666666667, 1.0, -1.0, 0.125, 0.125, 0.125, -0.33333333333333337, 1.0, -1.0, 0.125, 0.125, 0.125, 0.0, 1.0, -1.0, 0.125, 0.125, 0.125, 0.33333333333333326, 1.0, -1.0, 0.125, 0.125, 0.125, 0.6666666666666665, 1.0, -1.0, 0.125, 0.125, 0.125, 1.0, 1.0, -1.0, 0.5, 0.5, 0.5
    ]));
    const triangleIndices = regl.elements( new Int8Array([
        1, 0, 7, 1, 7, 8, 2, 1, 8, 2, 8, 9, 3, 2, 9, 3, 9, 10, 4, 3, 10, 4, 10, 11, 5, 4, 11, 5, 11, 12, 6, 5, 12, 6, 12, 13, 8, 7, 14, 8, 14, 15, 9, 8, 15, 9, 15, 16, 10, 9, 16, 10, 16, 17, 11, 10, 17, 11, 17, 18, 12, 11, 18, 12, 18, 19, 13, 12, 19, 13, 19, 20, 15, 14, 21, 15, 21, 22, 16, 15, 22, 16, 22, 23, 17, 16, 23, 17, 23, 24, 18, 17, 24, 18, 24, 25, 19, 18, 25, 19, 25, 26, 20, 19, 26, 20, 26, 27, 22, 21, 28, 22, 28, 29, 23, 22, 29, 23, 29, 30, 24, 23, 30, 24, 30, 31, 25, 24, 31, 25, 31, 32, 26, 25, 32, 26, 32, 33, 27, 26, 33, 27, 33, 34, 29, 28, 35, 29, 35, 36, 30, 29, 36, 30, 36, 37, 31, 30, 37, 31, 37, 38, 32, 31, 38, 32, 38, 39, 33, 32, 39, 33, 39, 40, 34, 33, 40, 34, 40, 41, 36, 35, 42, 36, 42, 43, 37, 36, 43, 37, 43, 44, 38, 37, 44, 38, 44, 45, 39, 38, 45, 39, 45, 46, 40, 39, 46, 40, 46, 47, 41, 40, 47, 41, 47, 48, 50, 49, 56, 50, 56, 57, 51, 50, 57, 51, 57, 58, 52, 51, 58, 52, 58, 59, 53, 52, 59, 53, 59, 60, 54, 53, 60, 54, 60, 61, 55, 54, 61, 55, 61, 62, 57, 56, 63, 57, 63, 64, 58, 57, 64, 58, 64, 65, 59, 58, 65, 59, 65, 66, 60, 59, 66, 60, 66, 67, 61, 60, 67, 61, 67, 68, 62, 61, 68, 62, 68, 69, 64, 63, 70, 64, 70, 71, 65, 64, 71, 65, 71, 72, 66, 65, 72, 66, 72, 73, 67, 66, 73, 67, 73, 74, 68, 67, 74, 68, 74, 75, 69, 68, 75, 69, 75, 76, 71, 70, 77, 71, 77, 78, 72, 71, 78, 72, 78, 79, 73, 72, 79, 73, 79, 80, 74, 73, 80, 74, 80, 81, 75, 74, 81, 75, 81, 82, 76, 75, 82, 76, 82, 83, 78, 77, 84, 78, 84, 85, 79, 78, 85, 79, 85, 86, 80, 79, 86, 80, 86, 87, 81, 80, 87, 81, 87, 88, 82, 81, 88, 82, 88, 89, 83, 82, 89, 83, 89, 90, 85, 84, 91, 85, 91, 92, 86, 85, 92, 86, 92, 93, 87, 86, 93, 87, 93, 94, 88, 87, 94, 88, 94, 95, 89, 88, 95, 89, 95, 96, 90, 89, 96, 90, 96, 97, 99, 98, 105, 99, 105, 106, 100, 99, 106, 100, 106, 107, 101, 100, 107, 101, 107, 108, 102, 101, 108, 102, 108, 109, 103, 102, 109, 103, 109, 110, 104, 103, 110, 104, 110, 111, 106, 105, 112, 106, 112, 113, 107, 106, 113, 107, 113, 114, 108, 107, 114, 108, 114, 115, 109, 108, 115, 109, 115, 116, 110, 109, 116, 110, 116, 117, 111, 110, 117, 111, 117, 118, 113, 112, 119, 113, 119, 120, 114, 113, 120, 114, 120, 121, 115, 114, 121, 115, 121, 122, 116, 115, 122, 116, 122, 123, 117, 116, 123, 117, 123, 124, 118, 117, 124, 118, 124, 125, 120, 119, 126, 120, 126, 127, 121, 120, 127, 121, 127, 128, 122, 121, 128, 122, 128, 129, 123, 122, 129, 123, 129, 130, 124, 123, 130, 124, 130, 131, 125, 124, 131, 125, 131, 132, 127, 126, 133, 127, 133, 134, 128, 127, 134, 128, 134, 135, 129, 128, 135, 129, 135, 136, 130, 129, 136, 130, 136, 137, 131, 130, 137, 131, 137, 138, 132, 131, 138, 132, 138, 139, 134, 133, 140, 134, 140, 141, 135, 134, 141, 135, 141, 142, 136, 135, 142, 136, 142, 143, 137, 136, 143, 137, 143, 144, 138, 137, 144, 138, 144, 145, 139, 138, 145, 139, 145, 146, 148, 147, 154, 148, 154, 155, 149, 148, 155, 149, 155, 156, 150, 149, 156, 150, 156, 157, 151, 150, 157, 151, 157, 158, 152, 151, 158, 152, 158, 159, 153, 152, 159, 153, 159, 160, 155, 154, 161, 155, 161, 162, 156, 155, 162, 156, 162, 163, 157, 156, 163, 157, 163, 164, 158, 157, 164, 158, 164, 165, 159, 158, 165, 159, 165, 166, 160, 159, 166, 160, 166, 167, 162, 161, 168, 162, 168, 169, 163, 162, 169, 163, 169, 170, 164, 163, 170, 164, 170, 171, 165, 164, 171, 165, 171, 172, 166, 165, 172, 166, 172, 173, 167, 166, 173, 167, 173, 174, 169, 168, 175, 169, 175, 176, 170, 169, 176, 170, 176, 177, 171, 170, 177, 171, 177, 178, 172, 171, 178, 172, 178, 179, 173, 172, 179, 173, 179, 180, 174, 173, 180, 174, 180, 181, 176, 175, 182, 176, 182, 183, 177, 176, 183, 177, 183, 184, 178, 177, 184, 178, 184, 185, 179, 178, 185, 179, 185, 186, 180, 179, 186, 180, 186, 187, 181, 180, 187, 181, 187, 188, 183, 182, 189, 183, 189, 190, 184, 183, 190, 184, 190, 191, 185, 184, 191, 185, 191, 192, 186, 185, 192, 186, 192, 193, 187, 186, 193, 187, 193, 194, 188, 187, 194, 188, 194, 195, 197, 196, 203, 197, 203, 204, 198, 197, 204, 198, 204, 205, 199, 198, 205, 199, 205, 206, 200, 199, 206, 200, 206, 207, 201, 200, 207, 201, 207, 208, 202, 201, 208, 202, 208, 209, 204, 203, 210, 204, 210, 211, 205, 204, 211, 205, 211, 212, 206, 205, 212, 206, 212, 213, 207, 206, 213, 207, 213, 214, 208, 207, 214, 208, 214, 215, 209, 208, 215, 209, 215, 216, 211, 210, 217, 211, 217, 218, 212, 211, 218, 212, 218, 219, 213, 212, 219, 213, 219, 220, 214, 213, 220, 214, 220, 221, 215, 214, 221, 215, 221, 222, 216, 215, 222, 216, 222, 223, 218, 217, 224, 218, 224, 225, 219, 218, 225, 219, 225, 226, 220, 219, 226, 220, 226, 227, 221, 220, 227, 221, 227, 228, 222, 221, 228, 222, 228, 229, 223, 222, 229, 223, 229, 230, 225, 224, 231, 225, 231, 232, 226, 225, 232, 226, 232, 233, 227, 226, 233, 227, 233, 234, 228, 227, 234, 228, 234, 235, 229, 228, 235, 229, 235, 236, 230, 229, 236, 230, 236, 237, 232, 231, 238, 232, 238, 239, 233, 232, 239, 233, 239, 240, 234, 233, 240, 234, 240, 241, 235, 234, 241, 235, 241, 242, 236, 235, 242, 236, 242, 243, 237, 236, 243, 237, 243, 244
    ]))
    const outlineIndices = regl.elements({
        primitive: 'line loop',
        data: new Int8Array([
            0, 1, 8, 7, 1, 2, 9, 8, 2, 3, 10, 9, 3, 4, 11, 10, 4, 5, 12, 11, 5, 6, 13, 12, 7, 8, 15, 14, 8, 9, 16, 15, 9, 10, 17, 16, 10, 11, 18, 17, 11, 12, 19, 18, 12, 13, 20, 19, 14, 15, 22, 21, 15, 16, 23, 22, 16, 17, 24, 23, 17, 18, 25, 24, 18, 19, 26, 25, 19, 20, 27, 26, 21, 22, 29, 28, 22, 23, 30, 29, 23, 24, 31, 30, 24, 25, 32, 31, 25, 26, 33, 32, 26, 27, 34, 33, 28, 29, 36, 35, 29, 30, 37, 36, 30, 31, 38, 37, 31, 32, 39, 38, 32, 33, 40, 39, 33, 34, 41, 40, 35, 36, 43, 42, 36, 37, 44, 43, 37, 38, 45, 44, 38, 39, 46, 45, 39, 40, 47, 46, 40, 41, 48, 47, 49, 50, 57, 56, 50, 51, 58, 57, 51, 52, 59, 58, 52, 53, 60, 59, 53, 54, 61, 60, 54, 55, 62, 61, 56, 57, 64, 63, 57, 58, 65, 64, 58, 59, 66, 65, 59, 60, 67, 66, 60, 61, 68, 67, 61, 62, 69, 68, 63, 64, 71, 70, 64, 65, 72, 71, 65, 66, 73, 72, 66, 67, 74, 73, 67, 68, 75, 74, 68, 69, 76, 75, 70, 71, 78, 77, 71, 72, 79, 78, 72, 73, 80, 79, 73, 74, 81, 80, 74, 75, 82, 81, 75, 76, 83, 82, 77, 78, 85, 84, 78, 79, 86, 85, 79, 80, 87, 86, 80, 81, 88, 87, 81, 82, 89, 88, 82, 83, 90, 89, 84, 85, 92, 91, 85, 86, 93, 92, 86, 87, 94, 93, 87, 88, 95, 94, 88, 89, 96, 95, 89, 90, 97, 96, 98, 99, 106, 105, 99, 100, 107, 106, 100, 101, 108, 107, 101, 102, 109, 108, 102, 103, 110, 109, 103, 104, 111, 110, 105, 106, 113, 112, 106, 107, 114, 113, 107, 108, 115, 114, 108, 109, 116, 115, 109, 110, 117, 116, 110, 111, 118, 117, 112, 113, 120, 119, 113, 114, 121, 120, 114, 115, 122, 121, 115, 116, 123, 122, 116, 117, 124, 123, 117, 118, 125, 124, 119, 120, 127, 126, 120, 121, 128, 127, 121, 122, 129, 128, 122, 123, 130, 129, 123, 124, 131, 130, 124, 125, 132, 131, 126, 127, 134, 133, 127, 128, 135, 134, 128, 129, 136, 135, 129, 130, 137, 136, 130, 131, 138, 137, 131, 132, 139, 138, 133, 134, 141, 140, 134, 135, 142, 141, 135, 136, 143, 142, 136, 137, 144, 143, 137, 138, 145, 144, 138, 139, 146, 145, 147, 148, 155, 154, 148, 149, 156, 155, 149, 150, 157, 156, 150, 151, 158, 157, 151, 152, 159, 158, 152, 153, 160, 159, 154, 155, 162, 161, 155, 156, 163, 162, 156, 157, 164, 163, 157, 158, 165, 164, 158, 159, 166, 165, 159, 160, 167, 166, 161, 162, 169, 168, 162, 163, 170, 169, 163, 164, 171, 170, 164, 165, 172, 171, 165, 166, 173, 172, 166, 167, 174, 173, 168, 169, 176, 175, 169, 170, 177, 176, 170, 171, 178, 177, 171, 172, 179, 178, 172, 173, 180, 179, 173, 174, 181, 180, 175, 176, 183, 182, 176, 177, 184, 183, 177, 178, 185, 184, 178, 179, 186, 185, 179, 180, 187, 186, 180, 181, 188, 187, 182, 183, 190, 189, 183, 184, 191, 190, 184, 185, 192, 191, 185, 186, 193, 192, 186, 187, 194, 193, 187, 188, 195, 194, 196, 197, 204, 203, 197, 198, 205, 204, 198, 199, 206, 205, 199, 200, 207, 206, 200, 201, 208, 207, 201, 202, 209, 208, 203, 204, 211, 210, 204, 205, 212, 211, 205, 206, 213, 212, 206, 207, 214, 213, 207, 208, 215, 214, 208, 209, 216, 215, 210, 211, 218, 217, 211, 212, 219, 218, 212, 213, 220, 219, 213, 214, 221, 220, 214, 215, 222, 221, 215, 216, 223, 222, 217, 218, 225, 224, 218, 219, 226, 225, 219, 220, 227, 226, 220, 221, 228, 227, 221, 222, 229, 228, 222, 223, 230, 229, 224, 225, 232, 231, 225, 226, 233, 232, 226, 227, 234, 233, 227, 228, 235, 234, 228, 229, 236, 235, 229, 230, 237, 236, 231, 232, 239, 238, 232, 233, 240, 239, 233, 234, 241, 240, 234, 235, 242, 241, 235, 236, 243, 242, 236, 237, 244, 243
        ])
    })

    let drawEdges = regl({
        frag: fragSource,

        vert: vertexSource,

        depth:{enable:true},
        
        attributes:{
            position:
            {
                buffer: triangleBuffer,
                size: 3,
                stride: 6 * FLOAT_SIZE,
                offset: 0 * FLOAT_SIZE
            },
            //color: {
            //    buffer: triangleBuffer,
            //    size: 3,
            //    stride: 6 * FLOAT_SIZE,
            //    offset: 3 * FLOAT_SIZE
            //}
        },

        uniforms: {
            viewport: ({viewportWidth, viewportHeight}) => [viewportWidth, viewportHeight],
            color: (context, {color}) => color,
            outline: true
        },
        
        elements: outlineIndices,
        offset: function(context, props) {return props.offset},
        count:4
    });

    

    let drawTriangle = regl({

        frag: fragSource,

        vert: vertexSource,

        depth: {enable: true},
        
        // attributes
        attributes: {
            position:  
            {
                buffer: triangleBuffer,
                size: 3,
                stride: 6 * FLOAT_SIZE,
                offset: 0 * FLOAT_SIZE
            },
            //color: {
            //    buffer: triangleBuffer,
            //    size: 3,
            //    stride: 6 * FLOAT_SIZE,
            //    offset: 3 * FLOAT_SIZE
            //}
        },
        
        // uniforms
        uniforms: {
            viewport: ({viewportWidth, viewportHeight}) => [viewportWidth, viewportHeight],
            color: (context, {color}) => color,
            outline:false
        },
        
        // elements to draw
        elements: triangleIndices,
        offset: function(context, props) {return props.offset},
        count:3
    });

    //triangleBuffer({data:final});
    regl.frame(function({tick}) {
        if(run==1){
            if(radiosity.done==0){
            //console.log("ran")
                radiosity.radiosityrun()
            }
        }

        for(let i = 0; i < 180; ++i)
        {
            drawEdges({offset: 4*i, color:[0.,0.,0.]});
        }
        for(let i = 0;i < 360; ++i)
        {
            let tempind=Math.floor(i/2);
            let colorst=radiosity.color[tempind];
            drawTriangle({offset: 3*i, color:colorst});
        }
    })
}