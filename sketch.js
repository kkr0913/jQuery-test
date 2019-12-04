var t = '';

function setup() {
	textAlign(CENTER, CENTER);
  createCanvas(windowWidth, windowHeight);
//   updateJson('https://api.myjson.com/bins/rbfo', {'testing at': 'github', 'one': 'two'});
}

function draw() {
  background(220);
	text(t, 0, 0, width, height);
}

function updateJson(url, json) {
    var obj = json;
    var data = JSON.stringify(obj);
    $.ajax({
        url:url,
        type:"PUT",
        data: data,
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data, textStatus, jqXHR){
            t = 'success'
        }
    });
}
