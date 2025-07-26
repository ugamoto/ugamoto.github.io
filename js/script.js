let limk = "https://www.github.com/sid12c"
let link = "https://www.github.com/"
let art = `
⠈⠻⣶⠖⡂⠠⡀⠀⠀⠀⠀⠀⠀⠀⣀⠠⠤⠤⠀⡀⠀⣀⣙⣗⣌⡢⡀
⠀⠀⠈⠑⢯⡟⠛⢖⡢⠄⣀⣀⡔⠁⠀⠀⢀⣀⠀⡀⣽⠟⡿⠟⢲⠭⡦
⠀⠀⠀⠀⠀⠈⢐⣶⣼⡁⠦⠤⢘⡃⠉⡀⠄⡂⠕⠒⣛⣒⣻⣟⡀⠤⣂⣥
⠀⠀⣀⠤⠤⠴⡮⠫⢀⠈⠐⠤⢤⠘⠡⣖⣁⡖⠭⠶⣌⣀⠤⢘⡻⠋⢁⣠
⢠⢊⢂⠍⣿⠉⣼⠖⠉⠈⡡⢂⡆⢰⠈⢉⠊⢀⠠⠖⠡⢁⣔⡁⢊⡄⡩⢦⡑⠄
⠇⣃⣡⣴⡾⠺⣿⠋⠐⠪⢶⣿⢇⢃⢕⠥⢂⡩⠀⠀⠐⡏⡈⡟⠛⠟⡷⡀⢳⡈
⡄⠇⡀⢻⠶⢆⡇⠸⠑⡲⢮⡀⠿⠅⠓⠀⠈⠀⠀⠀⢡⠇⢡⡗⢠⡪⣥⠃⡈⠇
⠘⢌⠪⡣⠈⢨⡾⠕⡵⠁⠓⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠛⢄⠙⢶⣀⣬⠯⢊⠜
⠀⠀⠁⠒⠈⠒⠂⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠒⠀⠀⠒⠁
Code 200: Motorcycle found.
Proceed to source code?
`

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    console.log('show')
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    console.log('hide')
}
function myFunction() {
  alert("Hello! I am an alert box!");
}
document.addEventListener('selectionchange', function() {
  var selection = document.getSelection();
  var selectedText = selection ? selection.toString() : null;

  if (['Sidharth', 'Sidharth Chaudhary'].includes(selectedText)) {
    if (confirm(art)) {
        window.location.href = link;
    } 
  } else if (['Sid'].includes(selectedText)) {
    if (confirm("Error 404: Motorcycle not found.\nProceed to my profile?")) {
        window.location.href = limk;
    }
  }
});