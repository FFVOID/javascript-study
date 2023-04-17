$(".login").click(function () {
  const id = $("#inputid").val();
  const password = $("#inputPassword3").val();
  const password2 = $("#inputPassword4").val();
  const name = $("#inputname").val();
  const year = $("#inputyear").val();
  const month = $("#inputmonth").val();
  const day = $("#inputday").val();
  const gender = $("#inputgender").val();
  const tel = $("#inputtel").val();

  if (!id) {
    alert("아이디를 입력해주세요");
    return;
  } else {
    if (!idCheck(id)) {
      alert("아이디 형식에 맞지 않습니다");
      return;
    }
  }

  if (!password) {
    alert("비밀번호를 입력해주세요");
    return;
  } else {
    if (!pwdCheck(password)) {
      alert("비밀번호는 특수문자/문자/숫자포함 형태의 8~15자리 이내입니다.");
      return;
    }
  }

  if (!password2) {
    alert("비밀번호를 다시 한번 입력해주세요");
    return;
  } else {
    if (!pwd2Check(password2)) {
      alert("비밀번호는 특수문자/문자/숫자포함 형태의 8~15자리 이내입니다.");
      return;
    }
  }

  if (!name) {
    alert("이름을 입력해주세요");
    return;
  } else {
    if (!nameCheck(name)) {
      alert("이름형식에 맞지 않습니다");
      return;
    }
  }
  if (!year) {
    alert("년도를 입력해주세요");
    return;
  } else {
    if (!yearCheck(year)) {
      alert("년도 형식에 맞지 않습니다");
      return;
    }
  }

  if (!month) {
    alert("월을 선택해주세요");
    return;
  }

  if (!day) {
    alert("일을 입력해주세요");
    return;
  } else {
    if (!dayCheck(day)) {
      alert("일형식에 맞지 않습니다");
      return;
    }
  }
  if (!gender) {
    alert("성별을 선택해주세요");
    return;
  }

  if (!tel) {
    alert("휴대폰 번호를 입력해주세요");
    return;
  } else {
    if (!telCheck(tel)) {
      alert("형식에 맞지 않는 번호입니다");
      return;
    }
  }

  alert("회원가입이 완료되었습니다");
  location.href = "./login.html";
});

//정규식

//아이디
function idCheck(id) {
  const reg = /^[a-z]+[a-z0-9]{5,19}$/g;

  return reg.test(id);
}

function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd); // 맞으면 true, 틀리면 false를 준다
}

function pwd2Check(pwd2) {
  const reg =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  return reg.test(pwd2); // 형식에 맞는 경우 true 리턴
}

//이름
function nameCheck(name) {
  var regExp = /[ㄱ-힣]/;

  return regExp.test(name);
}

//생년
function yearCheck(year) {
  const regExp = /[0-9]/g;

  return regExp.test(year);
}

//일

function dayCheck(day) {
  const regExp = /[0-9]/g;

  return regExp.test(day);
}

//휴대폰 번호

//전화번호 정규식
function telCheck(tel) {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
}
