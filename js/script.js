function init(){
  function clickAlertme(){
    var text = document.getElementById("entryinput").value;
    alert("Yifan Deng:" + text);
    document.getElementById("textoutput").innerHTML = text;
  }
    var entrybtn = document.getElementById("entrybutton");
    entrybtn.addEventListener('click', clickAlertme); 
}
window.addEventListener('load', init);