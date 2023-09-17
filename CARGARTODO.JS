document.addEventListener("DOMContentLoaded", function () {
    let skinViewer = new skinview3d.SkinViewer({
        canvas: document.getElementById("skin_container"),
        width: 300,
        height: 400,
        skin: "skin.png"
    });

    skinViewer.width = 400;
    skinViewer.height = 500;

    skinViewer.loadSkin("skin.png");

    skinViewer.loadCape(null);

    skinViewer.nameTag = new skinview3d.NameTagObject("Polo_1245", { textStyle: "rgba(118, 250, 33, 1)" });

    skinViewer.playerObject.skin.body.innerLayer.visible = false;
    skinViewer.playerObject.skin.rightArm.innerLayer.visible = false;
    skinViewer.playerObject.skin.leftArm.innerLayer.visible = false;
    skinViewer.playerObject.skin.rightLeg.innerLayer.visible = false;
    skinViewer.playerObject.skin.leftLeg.innerLayer.visible = false;

    skinViewer.playerObject.skin.body.outerLayer.visible = false;
    skinViewer.playerObject.skin.rightArm.outerLayer.visible = false;
    skinViewer.playerObject.skin.leftArm.outerLayer.visible = false;
    skinViewer.playerObject.skin.rightLeg.outerLayer.visible = false;
    skinViewer.playerObject.skin.leftLeg.outerLayer.visible = false;

    skinViewer.controls.enableRotate = false;
    skinViewer.controls.enableZoom = false;
    skinViewer.controls.enablePan = false;

    skinViewer.fov = 10;

    skinViewer.zoom = 0;

    skinViewer.autoRotate = true;




    skinViewer.animation = null;

    let discordButton = document.getElementById("easteregg");
    let clickCount = 0;

    discordButton.addEventListener("auxclick", function (e) {
        if (e.button === 1) {
            clickCount++;

            if (clickCount >= 5) {
                alert("desbloqueado");
                skinViewer.controls.enableRotate = true;
                skinViewer.animation = new skinview3d.WalkingAnimation();

                skinViewer.animation.speed = 3;

            }
        }
    });

    discordButton.addEventListener("click", function () {
        clickCount++;

        if (clickCount >= 5) {
            alert("desbloqueado");
            skinViewer.controls.enableRotate = true;
            skinViewer.animation = new skinview3d.WalkingAnimation();

            skinViewer.animation.speed = 3;
        }
    });

});