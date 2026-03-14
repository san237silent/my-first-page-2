function sayHello() {
  const name = document.getElementById("nameInput").value;
  const result = document.getElementById("result");

  if (name.trim() === "") {
    result.textContent = "이름을 먼저 입력해 주세요.";
  } else {
    result.textContent = name + "님, 반갑습니다. 바이브 코딩을 잘하고 계십니다.";
  }
}