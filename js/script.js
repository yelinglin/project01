// JavaScript Document
var screenObj=document.getElementById('screen');
function inputKey(num){
	//screenObj.value当前屏幕的值
	//num是你按下去的0-9或点
	if(clearBool)//需要清屏
	{
		screenObj.value='';
		clearBool=false;//清完了
	}
	
	if(screenObj.value=="0" && num!=".")//当你屏幕的值是0，你下一次按0-9应该就是直接替换
	{
		screenObj.value=num;
	}
	else
	{
		if((screenObj.value.indexOf(".")==-1 && num==".") || num!=".")//屏幕没有点，且我按的就是点或者我按的是0-9
		{
			screenObj.value=screenObj.value+num;//设置屏幕的值
		}
	}
	
}

var beforeNum,afterNum,signGlobal,clearBool=false,signResult;//beforeNum表示符号之前的值;afterNum表示符号之后的值；signGlobal符号;clearBool是否需要清屏;signResult给一直按等于符号单独存一个运算符号
function operatingFun(sign){//按了符号
	//console.log("符号开始",beforeNum,afterNum,clearBool);
	
	if(signGlobal!=null)//符号已经赋值，先运算之前的运算
	{
		afterNum=screenObj.value;//屏幕现在的值
		result();//触发计算
		
	}
	afterNum=null;//解决连续运算按等于没更新afterNum的问题
	
	beforeNum=screenObj.value;//记录屏幕的值
	signGlobal=sign;//记录符号
	clearBool=true;
	
	//console.log("符号结束",beforeNum,afterNum,clearBool);
}

function result(){
	//console.log("等于开始",beforeNum,afterNum,clearBool);
	if(signGlobal!=null)
	{
		signResult=signGlobal;
	}
	if(afterNum==null)//连续等于做的判断
	{
		afterNum=screenObj.value;//屏幕现在的值
	}
	
	switch(signResult)
	{
		case "+":
			screenObj.value=Number(beforeNum)+Number(afterNum);
			break;
		case "-":
			screenObj.value=Number(beforeNum)-Number(afterNum);
			break;
		case "*":
			screenObj.value=Number(beforeNum)*Number(afterNum);
			break;
		case "/":
			screenObj.value=Number(beforeNum)/Number(afterNum);
			break;
		case "%":
			screenObj.value=Number(beforeNum)%Number(afterNum);
			break;
		default:
			alert("程序有误！");
			break;
	}
	beforeNum=screenObj.value;//屏幕现在的值
	signGlobal=null;
	//console.log("等于结束",beforeNum,afterNum,clearBool);
}


function del(){//删除一位
	var screenVal=screenObj.value;
	screenObj.value=screenVal.substring(0,screenVal.length-1);
}

function clearFun(){//清空
	screenObj.value='';
}

function sqr(){//开根
	screenObj.value=Math.sqrt(screenObj.value);
}
