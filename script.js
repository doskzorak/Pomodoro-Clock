//jQuery
$(document).ready(function () {
  var buzzer = $("#buzzer")[0];
  var workTime = parseInt($("#workNum").html());
  var breakTime = parseInt($("#breakNum").html());

$("#start").click(function () {
  var counter = setInterval(timer, 1000);
  workTime *= 60;
  breakTime *= 60;

  function timer () {
    $("#start, #minusWork, #addWork, #minusBreak, #addBreak, #breakNum, #title1, #title2").hide();
    $("#timeType").show();
    $("#timeType").html("Work Time: ");
    workTime -= 1;
    if(workTime === 0) {
      buzzer.play()
      clearInterval(counter);
      var startBreak = setInterval(breakTimer, 1000);
      $("#workNum").hide();
    }
    if(workTime % 60 >= 10){
      $("#workNum").html(Math.floor(workTime / 60) + ":" + workTime % 60);
    }
    else {
      $("#workNum").html(Math.floor(workTime / 60) + ":" + "0" + workTime % 60);
    }

    function breakTimer () {
      $("#timeType").html("Break Time: ");
      $("#breakNum").show();
      $("#timeType").show();
      breakTime -= 1;
      if(breakTime === 0) {
        clearInterval(startBreak);
        buzzer.play();
        $("#reset").show();
        $("#breakNum, #timeType").hide();
      }
      if(breakTime % 60 >= 10){
        $("#breakNum").html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
      }
      else {
        $("#breakNum").html(Math.floor(breakTime / 60) + ":" + "0" + breakTime % 60);
      }
  }
  }

});

  $("#reset").click(function () {
    workTime=25;
    breakTime=25;
    $("#workNum").html(workTime);
    $("#breakNum").html(breakTime);
    $("#start, #minusWork, #addWork, #minusBreak, #addBreak, #breakNum, #workNum, #title1, #title2").show();
    $("#reset, #timeType").hide();
  });

  $("#minusWork").click(function() {
    if (workTime > 5) {
        workTime -= 5;
        $("#workNum").html(workTime);
    }
  });

  $("#addWork").click(function() {
      workTime += 5;
      $("#workNum").html(workTime);
  });

  $("#minusBreak").click(function() {
    if(breakTime > 5) {
        breakTime -= 5;
        $("#breakNum").html(breakTime);
    }
  });

  $("#addBreak").click(function() {
      breakTime += 5;
      $("#breakNum").html(breakTime);
  });
 });
