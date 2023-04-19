const movieURL =
  "https://api.themoviedb.org/3/movie/76600?api_key=38dd880c562e1f720e47f2b4a33ce753&language=ko-KR";

$.ajax({
  type: "GET",
  url: movieURL,
  dataType: "json",
  async: false, //동기상태 => ajax는 기본적으로 비동기다.
  success: function (data) {
    const title = data.title;
    console.log(`한국이름:${title}`);
    const original_title = data.original_title;
    console.log(`영화이름:${original_title}`);
    const overview = data.overview;
    console.log(overview);
    const genres = data.genres[0].name;
    const genres1 = data.genres[1].name;
    const genres2 = data.genres[2].name;

    console.log(genres);
    console.log(genres1);
    console.log(genres2);

    const runtime = data.runtime;

    const release_date = data.release_date;

    const vote_average = data.vote_average;
    console.log(`평점${vote_average}`);

    let imgURL = "https://image.tmdb.org/t/p/w500" + data.poster_path;

    $(".poster").append(
      `<a href="./detail.html?id=${data.id}"><img src="${imgURL}"></a>`
    );
    $(".poster img ").height(350);
    $(".poster img ").css("border-radius", "10px");
    $(".card-title").text(`${title}`);
    $(".card-text1").text(`${original_title}`);
    $(".card-text2").text(`장르   ${genres}/${genres1}/${genres2}`);
    $(".card-text3").text(`개봉날짜 ${release_date}`);
    $(".card-text4").text(`러닝타임 ${runtime}분`);
    $(".card-text6").text(`평점 ${vote_average}`);
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
