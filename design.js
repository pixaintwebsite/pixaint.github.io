$(document).on("ready", init());

var actualAlert;

function init(){
  $(document).keypress(function(e){
    if(e.keyCode == '13'){
        if(actualAlert == "new"){
          newFile();
        }else if(actualAlert == "color"){
          selectColor();
        }else if(actualAlert == "export"){
          downloadFile();
        }
    }
});
}

//to display the 'new file' alert and stop displaying the other alerts
function newAlert(){
  actualAlert = "new";
  $(".alert#new_alert").css("display", "block");
  $(".alert#color_alert").css("display", "none");
  $(".alert#export_alert").css("display", "none");
}

//to display the 'select color' alert and stop displaying the other alerts
function colorAlert(){
  actualAlert = "color";
  $(".alert#new_alert").css("display", "none");
  $(".alert#color_alert").css("display", "block");
  $(".alert#export_alert").css("display", "none");

  $("#select_color").on("change", function(){
    var colorValue = $("#select_color").val();
		$("#text_color").val(colorValue);
	})
  $("#text_color").on("input", function(){
    var colorValue = $("#text_color").val();
		$("#select_color").val(colorValue);
	})
}

//to display the 'export to css' alert and stop displaying the other alerts
function exportAlert(){
  actualAlert = "export";
  $(".alert#new_alert").css("display", "none");
  $(".alert#color_alert").css("display", "none");
  $(".alert#export_alert").css("display", "block");
}

//to exit the alert (it will stop displaying it)
function exitAlert(){
  if(actualAlert == "new"){
    $(".alert#new_alert").css("display", "none");
  }else if(actualAlert == "color"){
    $(".alert#color_alert").css("display", "none");
  }else if(actualAlert == "export"){
    $(".alert#export_alert").css("display", "none");
  }
  actualAlert = undefined;
}

function rotate(){
  $("#navconfig").addClass("fa-spin");
  $("#credits").css("display", "block");
}

function stopRotating(){
  $("#navconfig").removeClass("fa-spin");
  $("#credits").css("display", "none");
}
