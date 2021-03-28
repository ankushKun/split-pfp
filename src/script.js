var orig = document.getElementById('orig-image');
orig.hidden = true;

var left = document.getElementById('left-image');
left.hidden = true;

var right = document.getElementById('right-image');
right.hidden = true;

$(".image-label").hide();

var loadFile = function (event) {
    const origImg = new Image();
    origImg.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 500;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(origImg, 0, 0, origImg.width, origImg.height, 0, 0, 1000, 500);
        //console.log(canvas.toDataURL("image/png"));
        orig.src = canvas.toDataURL("image/png");
        orig.hidden = false;
    }
    origImg.src = URL.createObjectURL(event.target.files[0]);
}

orig.onload = () => {
    //left part
    const leftImg = new Image();
    leftImg.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 500;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(leftImg, 0, 0, 500, 500, 0, 0, 500, 500);
        left.src = canvas.toDataURL("image/png");
        $("#left-download").attr("href", canvas.toDataURL("image/png"));
        left.hidden = false;
    }
    leftImg.src = orig.src;
    //right part
    const rightImg = new Image();
    rightImg.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 500;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(leftImg, 500, 0, 500, 500, 0, 0, 500, 500);
        right.src = canvas.toDataURL("image/png");
        $("#right-download").attr("href", canvas.toDataURL("image/png"));
        right.hidden = false;
    }
    rightImg.src = orig.src;
    $(".image-label").show();
}