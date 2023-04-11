const url = window.location.href;
if (window.history.length == 1){
  document.location.href = ("https://old"+url.substring(11));;
}
