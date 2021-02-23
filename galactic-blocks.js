
var workspace = null; 

window.addEventListener("open-blocks", function(ev) {
    document.getElementById("blocklyWrap").style.display = "block";
    var mapItem = ev.detail.mapItem;
    var sprite = ev.detail.sprite;
    document.getElementById("sprite-prev").src = sprite.images[mapItem.costumeIdx];
    document.getElementById("xpos-span").innerHTML = mapItem.x;
    document.getElementById("ypos-span").innerHTML = mapItem.y;
    createSwitchCostumeMenu(ev.detail.resolveCostumeSelect)

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
        
        var existingMessages = [];
        xml.querySelectorAll("xml > variables > variable[type='broadcast_msg']").forEach(node =>
            existingMessages.push(node.innerHTML));
        
        console.log(existingMessages);
        ev.detail.broadcastMsgNames.filter(function(name) { return name !== "message1"}).forEach(function(msgName) {
            if (existingMessages.indexOf(msgName) < 0) {
                var newVar = document.createElement("variable");
                newVar.setAttribute("type", "broadcast_msg");
                newVar.setAttribute("islocal", "false");
                newVar.setAttribute("iscloud", "false");
                newVar.innerText = msgName;
                xml.querySelector("xml > variables").appendChild(newVar);
            }
        })

        console.log(Blockly.Xml.domToText(xml));

        Blockly.Xml.domToWorkspace(xml, workspace);
    } else {
        var xml = Blockly.Xml.textToDom(
            '<xml xmlns="http://www.w3.org/1999/xhtml"><variables>' +
                ev.detail.broadcastMsgNames.filter(function(name) { return name !== "message1"}).map(function(name) { 
                    return '<variable type="broadcast_msg" islocal="false" iscloud="false">' + name + '</variable>'
                }).join() +
            '</variables></xml>'
        );

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