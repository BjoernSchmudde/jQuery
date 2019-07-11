import "./styles.css";
$(document).ready(function() {
  console.log(jQuery.fn.jquery);
});

$("button").on({
  mouseenter: function() {
    $(this)
      .css("height", "300px")
      .css("width", "400px")
      .css("background", "lightgreen")
      .css("font-weight", "bold")
      .text("Ichhhh bin hieerrrrr");
  }
});
