let bt1, bt2, justbt;
bt1 = document.querySelector('.btjs');
bt2 = document.querySelector('.btjs1');
justbt = document.querySelector('.header_button');

bt1.onclick = show;
bt2.onclick = hide;


function show() {
	justbt.style.display = "inline";
}

function hide() {
	document.querySelector('.header_button').style.display = "none";
}
