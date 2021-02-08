
var workspace = null; 

window.addEventListener("open-blocks", function(ev) {
    document.getElementById("blocklyWrap").style.display = "block";
    var mapItem = ev.detail.mapItem;
    var sprite = ev.detail.sprite;
    document.getElementById("sprite-prev").src = sprite.images[mapItem.costumeIdx];
    document.getElementById("xpos-span").innerHTML = mapItem.x;
    document.getElementById("ypos-span").innerHTML = mapItem.y;

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

    if (mapItem.code) {
        var xml = Blockly.Xml.textToDom(mapItem.code);
        Blockly.Xml.domToWorkspace(xml, workspace);
    }

    function clearAndHide() {
        workspace.clear();
        document.getElementById("blocklyWrap").style.display = "none";
    }

    document.getElementById("blocklyCancel").onclick = clearAndHide;

    document.getElementById("blocklySave").onclick = function() {
        window.dispatchEvent(new CustomEvent("save-blocks", {detail: {
            code: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)),
            mapItem: mapItem
        }}));
        clearAndHide();
    }
    
});