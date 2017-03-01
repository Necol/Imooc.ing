// 加载JS函数
function addloadevent(func)
{
	var oldonload = window.onload;
	if (typeof window.onload != 'function') 
	{
		window.onload = func;
	}
	else
	{
		window.onload=function()
		{
			oldonload();
		    func();
		}
	}
}

addloadevent(getinner);



 
// Year信息
function Year()
{
	do{
		var year = prompt("请输入您的出生年份");

        if (year.length != 4 || isNaN(year)) 
        {
        	alert('请输出正确的年份格式 例：1990');
        }
        else
        {
        	return parseInt(year);
        }
	  }
	while(year != null);
}

// Moth信息
function Moth()
{
	do{
		var moth = prompt("请输入您的出生月份");

        if (moth < 1 || moth > 12 || isNaN(moth)) 
        {
        	alert('请输出正确的月份格式 例：1~12');
        }
        else
        {
        	return parseInt(moth);
        }
	  }
	while(year != null);
}


// Day信息
function Day()
{
	do{
		var day = prompt("请输入您的出生日期");

        if (day < 1 || day > 31 || isNaN(day)) 
        {
        	alert('请输出正确的日期格式 例：1~31');
        }
        else
        {
        	return parseInt(day);
        }
	  }
	while(year != null);
}



// 函数--获取生日总日期
function estimate_year()
{
	var sum = 0;

	if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0) )
	{
		moths[2] += 1;
        for (var i = 0; i < moth; i++)
		{
			sum += moths[i];
		}
		return sum += day;

	}
	else
	{
		for (var i = 0; i < moth; i++)
		{
			sum += moths[i];
		}
	    return sum += day;
	}
}



// 函数--获取全年天数
function total()
{
    var sum = 0;

	if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0) )
	{
		moths[2] += 1;
        for (var i = 0; i < moths.length; i++)
		{
			sum += moths[i];
		}
		return sum ;

	}
	else
	{
		for (var i = 0; i < moths.length; i++)
		{
			sum += moths[i];
		}
	    return sum;
	}
}



// 函数--获取明年-值
function next_year()
{
	var current = new Date();
    var newmouth = current.getMonth();
    var newyear = current.getFullYear();

	if (moth < (newmouth+1)) 
	{
        newyear += 1;
        return newyear;
	}

	else
	{
       return newyear;
	}


}


// 函数--获取生日倒计时
function next_day()
{
    var newyear = new Date();
    var newdate = newyear.getDate();
    var newmouth = newyear.getMonth();
    var xxx = 0;
    var sum = 0;

    for (var i = 0; i <= newmouth; i++) 
    {
    	sum += moths[i];
    }
    sum += newdate;

    if (get_day - sum > 0) 
    {
    	xxx = get_day - sum;
    	return parseInt(xxx);
    }
    else if (get_day - sum < 0)
    {
    	xxx = get_day + (get_total - sum);
    	return parseInt(xxx);
    }
    else
    {
    	alert('今天就是你的生日！ Happy birthday！');
    	return '祝你生日快乐！ Happy birthday！';
    }
 }



// 函数--插入HTML文本--生日快乐
 function happyday()
{
	if (!document.createTextNode) return false;
    	if (typeof next_day != 'string') 
    	{
    		return document.createTextNode("今天距离您" + next_year + "年生日还有" + next_day + "天");
    	}
    	else
    	{
    		 return document.createTextNode(next_day);
    	}
    	
}


// 函数--插入HTML文本
function getinner()
{
	// 第一个文本
	if (!document.createTextNode || !document.getElementById) return false;
    var html = document.getElementById('section');
    var create_p_1 = document.createElement('p');
    var create_text_1 = document.createTextNode("你的生日在" + year + "年的第" + get_day + "天");
    create_p_1.appendChild(create_text_1);
    html.appendChild(create_p_1);
    
    // 第二个文本
    var create_p_2 = document.createElement('p');
    var create_text_2 = happyday();
    create_p_2.appendChild(create_text_2);
    html.appendChild(create_p_2);
}


// 定义全局变量 并调用函数
var moths = [0,31,28,31,30,31,30,31,31,30,31,30,31];


var year = Year();
var moth = Moth();
var day = Day();
var get_day = estimate_year();
var get_total = total();

var next_year = next_year();
var next_day = next_day();	

