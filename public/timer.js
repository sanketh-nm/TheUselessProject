window.addEventListener('load', function () {

  const second = 1000;
  let clock = setInterval(function () {

    let now = luxon.DateTime.local();
    let nowHex= `#${now.toFormat("HHmmss")}`;

    document.body.style.backgroundColor = nowHex;
    document.getElementById('currentTime').innerText = nowHex;

    var n_match = ntc.name(nowHex);
    n_rgb = n_match[0]; // RGB value of closest match
    n_name = n_match[1]; // Text string: Color name
    n_exactmatch = n_match[2]; // True if exact color match

    console.log(n_exactmatch);
   document.getElementById("colorName").innerText = n_name
    


  }, second)
})