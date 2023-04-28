/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
let main = document.querySelector('#main')
let pages = {
  '#login': `
  <h1>登入</h1>
  <p>請輸入帳號密碼</p>
      <input type="account" placeholder="帳號"><br>
      <input type="password" placeholder="密碼"><br>
      <button type="button" onclick="alert('網頁功能開發中!&#128512;')">登入</button>
      <input type="button" name="login" value="返回首頁" onclick="window.location.href='index.html'"/>
    `,
  '#home': `
    <h1>首頁</h1>
    <p>按使用者切換功能頁面</p> `,
  '#logout': `
  <p>登出成功?</p>
  <input type="button" name="return" value="返回首頁" onclick="window.location.href='index.html'"/>
    `,
  '#signup': `
  <h1 style="color:rgb(182, 19, 128);">註冊</h1>
  <p>複雜又慢速</p>
      <input type="name" placeholder="姓名"><br>
      <input type="account" placeholder="帳號"><br>
      <input type="email" placeholder="email"><br>
      <input type="password" placeholder="密碼"><br>
      <label for="Blood type">性別:</label>
      <select id="blood" name="blood">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
      <label for="Blood type">血型:</label>
      <select id="blood" name="blood">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="AB">AB</option>
        <option value="O">O</option>
      </select>
      <input type="date" placeholder="生日"><br>
      <button type="button" onclick="alert('網頁功能開發中!&#128512;')">註冊</button>
      <input type="button" name="return" value="取消註冊" onclick="window.location.href='index.html'"/>
    `,
}

window.onhashchange = function () {
  let hash = window.location.hash
  main.innerHTML = pages[hash]
}