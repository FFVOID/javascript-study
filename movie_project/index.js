const movieURL =
  "https://api.themoviedb.org/3/movie/76600?api_key=38dd880c562e1f720e47f2b4a33ce753&language=ko-KR";

$.ajax({
  type: "GET",
  url: movieURL,
  dataType: "json",
  async: false, //동기상태 => ajax는 기본적으로 비동기다.
  success: function (data) {
    const overview = data.overview;
    console.log(overview);
    const vote_average = data.vote_average;
    console.log(`평점${vote_average}`);
  },
});
