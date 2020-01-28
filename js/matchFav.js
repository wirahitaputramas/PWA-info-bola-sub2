function resultMatchFav(data) {

  var dataMatchFavHtml = ''
  data.forEach(function (match) {
    //console.dir("resultMatchFav: cek id: " + match.id);

    dataMatchFavHtml += `
  <div class="col s12">
    <div class="card">

    <div class="card-content">

    <div center-align>
      


        <h5 class="center-align">Matchday: ${match.match.matchday}</h5>
        <div class="center-align">Kick Off: ${convertUTCDate(new Date(match.match.utcDate))}</div>

      <div class="row" style="margin:20px">
        <div class="col s5 truncate right-align">
        <span class="blue-text text-darken-2">  ${match.match.homeTeam.name}</span>
        </div>
        <div class="col s2 ">
          <h6 class="center-align">VS</h6>
        </div>
        <div class="col s5 truncate left-align">
        <span class="blue-text text-darken-2">  ${match.match.awayTeam.name}</span>
        </div>
      </div>

      <div class="center-align">
      <a class="black waves-effect waves-light btn" href="./detailmatch.html?id=${match.id}">Lihat Detail</a>
      </div>
            
    </div>
  
    </div>
    </div>
  </div>
      `
  });

  // Sisipkan komponen card ke dalam elemen dengan id divFavorit
  document.getElementById("divFavorit").innerHTML = dataMatchFavHtml;
}