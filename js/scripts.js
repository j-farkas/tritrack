function triDraw(tri) {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0, c.width, c.height);
  tri = sort(tri);
  console.log(tri);
  var A = [0,0];
  var B = [0, 500];
  var C = [0,0];
  C[1] = (tri[0] * tri[0] + tri[1] * tri[1] - tri[2] * tri[2]) / (2 * tri[0]);
  C[0] = Math.sqrt(tri[1] * tri[1] - C[1] * C[1]);
  console.log(A, B, C);
  C[0] *= (500 / tri[0]);
  C[1] *= (500 / tri[0]);
  ctx.beginPath();
  ctx.moveTo(A[1], 500-A[0]);
  ctx.lineTo(B[1], 500-B[0]);
  ctx.lineTo(C[1], 500-C[0]);
  ctx.fillStyle = "blue";
  ctx.fill();
  return;
};

function sort(arr){
  var ph;
  for (var h = 0; h < 3; h++) {
    for (var j = h+1; j < 3; j++) {
      if(arr[h] < arr[j]){
        ph = arr[h];
        arr[h] = arr[j];
        arr[j] = ph;
      }
    }
  }
  return arr;
};




$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var i = 0;
    var triSides = [];
    for (i = 0; i < 3; i++) {
      triSides[i] = parseInt($("#side" + (i + 1)).val());
    }

    if((triSides[0] + triSides[1] <= triSides[2]) ||
      (triSides[2] + triSides[1] <= triSides[0]) ||
      (triSides[0] + triSides[2] <= triSides[1])) {
      $("p").text("This does not make a valid triangle.");
    }else{
      if(triSides[0] === triSides[1] && triSides[0] === triSides[2]) {
        $("p").text("This makes an equilateral triangle.");
      } else if(triSides[0] === triSides[1] || triSides[0] === triSides[2] || triSides[1] === triSides[2]) {
        $("p").text("This makes an isosceles triangle.");
      } else if((triSides[0]**2 + triSides[1]**2 === triSides[2]**2) ||
        (triSides[2]**2 + triSides[1]**2 === triSides[0]**2) ||
        (triSides[0]**2 + triSides[2]**2 === triSides[1]**2)) {
        $("p").text("This makes a right triangle.");
      } else {
        $("p").text("This makes a scalene triangle.");
      }
      triDraw(triSides);
    }

    event.preventDefault();

  });

});
