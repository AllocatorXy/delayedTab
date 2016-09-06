window.onload = function () 
{
	var oDiv1 = document.getElementById('div1');
	var oDiv2 = document.getElementById('div2');
	var timer = null;

	oDiv2.onmouseover = oDiv1.onmouseover = function () //鼠标移入显示div2
	{
		clearTimeout(timer);
		oDiv2.style.display = 'inline-block';
	};

	oDiv2.onmouseout = oDiv1.onmouseout = function () //鼠标移出后500ms隐藏div2
	{
		timer = setTimeout(function () {
			oDiv2.style.display = 'none';
		}, 500);
	};
};