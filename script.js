//Randomize art at load
$(function () {
  var parent = $("#gallery");
  var divs = parent.children();
  while (divs.length) {
    parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});

$(document).ready(function () {

  //menu and displaying each section of site
  $("#indexLink").click(function () {
    hideAll();
    showIndex();
    removeSelected();
    setSelected($(this));
  });

  $("#informationLink").click(function () {
    hideAll();
    showInformation();
    removeSelected();
    setSelected($(this));
  });

  $("#exhibitionLink").click(function () {
    hideAll();
    showGallery();
    removeSelected();
    setSelected($(this));
  });

  //clicking on an image
  




  //helper functions
  function hideAll() {
    hideIndex();
    hideGallery();
    hideInformation();
  }
  function showGallery() {
    $("#gallery").show();
  }

  function showInformation() {
    $("#information").show();
  }
  
  function showIndex() {
    $("#index").show();
  }

  function hideInformation() {
    $("#information").hide();
  }

  function hideIndex() {
    $("#index").hide();
  }

  function hideGallery() {
    $("#gallery").hide();
  }

  function removeSelected() {
    $("nav span").removeClass("selected");
  }

  function setSelected($element) {
    $element.addClass("selected");
  }
});
