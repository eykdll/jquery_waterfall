$(document).ready(function(){
	$(window).on("load",function(){
		imgLocation();
		var dataImg = {"data":[{"src":"19.jpg"},{"src":"20.jpg"},{"src":"21.jpg"},{"src":"22.jpg"},{"src":"23.jpg"},{"src":"24.jpg"},{"src":"25.jpg"},{"src":"26.jpg"},{"src":"27.jpg"},{"src":"28.jpg"},{"src":"29.jpg"},{"src":"30.jpg"},{"src":"31.jpg"},{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"},{"src":"35.jpg"},{"src":"36.jpg"},{"src":"37.jpg"},{"src":"38.jpg"},{"src":"39.jpg"},{"src":"40.jpg"}]};
		window.onscroll = function(){
			if(scrollside()){
				$.each(dataImg.data,function(index,value){
					var box = $("<div>").addClass("box").appendTo($("#container"));
					var content = $("<div>").addClass("content").appendTo(box);
					$("<img>").attr("src","images/"+$(value).attr("src")).appendTo(content);
				});
				imgLocation();
			}
		};
	});
});

//设置除第一排以外的照片位置
function imgLocation(){
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width()/boxWidth);
	var boxArr = [];
	box.each(function(index,value){
		var boxHeight = box.eq(index).height();
		if(index < num){
			boxArr[index] = boxHeight;
		}else{
			var minboxHeight = Math.min.apply(null,boxArr);
			var minboxIndex = $.inArray(minboxHeight,boxArr);
			$(value).css({
				"position":"absolute",
				"top":minboxHeight,
				"left":box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex] += box.eq(index).height();  
		}
	}); 
	
}

//检测滚轮是否已滚到窗口底部
function scrollside(){
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop +Math.floor(box.last().height()/2);
	var documentHeight = $(document).height();
	var scrollHeight = $(window).scrollTop();
	return(lastboxHeight < scrollHeight + documentHeight)?true:false;
}