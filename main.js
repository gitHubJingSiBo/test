/*用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中。*/
//let myHeading = document.querySelector('h1');
/*把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!” 。*/
//myHeading.textContent = 'Hello world!';/*JavaScript 把页面的标题改成了 “Hello world!” 。*/

// 将获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}
// 设置个性化欢迎信息
//function setUserName() {
//	  let myName = prompt('请输入你的名字。');
//	  localStorage.setItem('name', myName);
//	  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
//	}
function setUserName() {
	  let myName = prompt('请输入你的名字。');
	  if(!myName || myName === null) {
	    setUserName();
	  } else {
	    localStorage.setItem('name', myName);
	    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
	  }
	}

// 在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')) {
	  setUserName();
	} else {
	  let storedName = localStorage.getItem('name');
	  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
	}

myButton.onclick = function() {
	   setUserName();
	}