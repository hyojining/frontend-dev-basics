var changeImage = function() {
	// 랜덤 변수 
	var index = Math.floor(Math.random() * imageViewer._images.length);
	var info = imageViewer._images[index].split(":");
	
	// console.log(info);
	
	var title = info[0];
	var src = '/ch07/images/' + info[1];
	$("img")
		.attr('src', src)
		.attr('alt', title)
		.attr('title', title);
}

var imageViewer = {
    _intervalId: null,
    
    _images: [
        "국화:Chrysanthemum.jpg",
        "사막:Desert.jpg",
        "수국:Hydrangeas.jpg",
        "해파리:Jellyfish.jpg",
        "코알라:Koala.jpg",
        "등대:Lighthouse.jpg",
        "펭귄:Penguins.jpg",
        "툴립:Tulips.jpg"
    ],

    init: $(function () {
        $("#btn-change").click(function () {
            changeImage();
        });

        $("#btn-slideshow").click(function () {
			var slideshow_btn = $("#btn-slideshow").text();
			
            if (slideshow_btn == "슬라이드쇼 중지") {
                clearInterval(imageViewer._intervalId);
                imageViewer._intervalId = null;
                $("#btn-slideshow").text("슬라이드쇼 시작");
            } else {
				changeImage();
                imageViewer._intervalId = setInterval(function () {
                    changeImage();
                }, 1000);
                $("#btn-slideshow").text("슬라이드쇼 중지");
            }
        });
    })
};