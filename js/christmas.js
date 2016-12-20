//中奖列表从下向上滚动
// JavaScript Document	
	
(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:24 //每行的高度
	};
	
	var opts = $.extend({}, defaults, options),intId = [];
	
	function marquee(obj, step){
	
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);

$(function(){
	$('.u-activity').myScroll({
		speed: 40, //数值越大，速度越慢
		rowHeight: 38 //li的高度
	});
});


//点击抽奖
$(function(){
		var $result = $('#result');
		var $resultTxt = $('#resultTxt');
		var $resultBtn = $('#result');
	var rotateFunc = function(awards,angle,text){  //awards:奖项，angle:奖项对应的角度
		$('#lotteryBtn').stopRotate();
		$("#lotteryBtn").rotate({
			angle:0, 
			duration: 5000,
			animateTo: angle+1340, //angle是图片上各奖项对应的角度，1440是我要让指针旋转4圈。所以最后的结束的角度就是这样子^^
			callback:function(){
               $resultTxt.html(text);
					$result.show();
			}
		}); 
	};
	$('#lotteryBtn').rotate({ 
	   bind:{ 
			click: function(){
					var data = [1,2,3,4,5,6]; //返回的数组
						data = data[Math.floor(Math.random()*data.length)];
					if(data==1){
						rotateFunc(1,87,'<div class="close"></div><p></p> <em class="em10"></em> <div class="u-click"><a href="http://www.baidu.com" target="_blank"></a></div>')
					}
					if(data==2){
					rotateFunc(2, 43, '<div class="close"></div><p></p> <em class="em5"></em> <div class="u-click"><a href="http://www.baidu.com" target="_blank"></a></div>');
						
					}
					if(data==3){
					rotateFunc(3, 140, '<div class="close"></div><p></p> <em class="em15"></em> <div class="u-click"><a href="http://www.baidu.com" target="_blank"></a></div>');
						
					}
					if(data==4){
					rotateFunc(4, 177, '<div class="close"></div><p></p> <em class="em15"></em><div class="u-click"><a href="http://www.baidu.com" target="_blank"></a></div>');
						
					}
					if(data==5){
					rotateFunc(5, 223, '<div class="close"></div><p></p> <em class="em5"></em> <div class="u-click"><a href="http://www.baidu.com" target="_blank"></a></div>');
						
					}
					if(data==6){
					rotateFunc(6, 270, '<div class="close"></div><p></p> <em class="em10"></em> <div class="u-click"><a href="http://www.baidu.com" target="_blank"></a></div>');
						
					}			}
		 } 
	});
	//点击关闭弹框
$('.result').click(function(){
	$(this).css('display','none');
})	
})







