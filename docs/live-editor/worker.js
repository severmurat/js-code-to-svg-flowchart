importScripts('../../dist/js2flowchart.js');

const svgRender = js2flowchart.createSVGRender();
svgRender.applyTheme({
  common: {
    maxNameLength: 180
  }
});

self.onmessage = function(message) {
    const code = message.data.code;
    let svg = '',
        shouldUpdate = true;
    try {
        shouldUpdate = true;
        svg = js2flowchart.convertCodeToSvg(code);
    } catch (e) {
        shouldUpdate = false;
        console.log(e);
    } finally {
        shouldUpdate && self.postMessage({
            svg
        });
    }

};


