//1. 전체 url가져오기
const currentURL = location.href;

//2.쿼리 스트링 파라메터 가져오기
const urlObj = new URL(currentURL);

//파라메터에 대한 정보가 들어있다
const params = urlObj.searchParams;

//파라메터의 값을 구한다 params.get("번수명");
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

//3.ajax 이용해 전체 날씨 정보 얻어오기(index.html 도시날씨 구하기 그대로이용)
function getCityWeather(q) {
  var temp = {};
  var urlAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=f3ea4e686e26d655625baab1f8541271&units=metric&lang=kr";
  urlAPI += "&q=" + q;

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, //동기상태 => ajax는 기본적으로 비동기다.
    success: function (data) {
      const celsius = data.main.temp.toFixed(0);
      const icon = data.weather[0].icon;

      temp.celsius = celsius;
      temp.icon = icon;

      $(".region-weather").text(`${celsius}℃`);
      $("");
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;
}

//4. 데이터 바인딩 작업(뿌려주는 작업)
$(".region-title").text(`${krcity} 상세날씨`);

let temp = getCityWeather(q);
