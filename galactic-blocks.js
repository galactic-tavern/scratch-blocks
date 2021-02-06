
var workspace = null; 

window.addEventListener("open-blocks", function(ev) {
    document.getElementById("blocklyDiv").style.display = "block";
    if (workspace === null) {
        workspace = Blockly.inject('blocklyDiv', {
            comments: true,
            disable: false,
            collapse: false,
            media: '../media/',
            readOnly: false,
            rtl: false,
            scrollbars: true,
            toolbox: ev.detail.toolbox,
            toolboxPosition: 'start',
            horizontalLayout: false,
            sounds: false,
            zoom: {
                controls: true,
                wheel: true,
                startScale: 0.675,
                maxScale: 4,
                minScale: 0.25,
                scaleSpeed: 1.1
            },
            colours: {
                fieldShadow: 'rgba(255, 255, 255, 0.3)',
                dragShadowOpacity: 0.6
            }
        });
    } else {
        workspace.updateToolbox(ev.detail.toolbox);
    }
});