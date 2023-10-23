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

    init: function () {
        var _this = this;

        $("#btn-change").click(function () {
            _this.changeImage();
        });

        $("#btn-slideshow").click(function () {
            if (_this._intervalId) {
                clearInterval(_this._intervalId);
                _this._intervalId = null;
                $("#btn-slideshow").text("슬라이드쇼 시작");
            } else {
                _this.changeImage();
                _this._intervalId = setInterval(function () {
                    _this.changeImage();
                }, 1000);
                $("#btn-slideshow").text("슬라이드쇼 중지");
            }
        });

        // 초기 이미지 로딩
        this.changeImage();
    },

    changeImage: function () {
        var index = Math.floor(Math.random() * this._images.length);
        var info = this._images[index].split(":");

        var title = info[0];
        var src = '/ch07/images/' + info[1];
        $("img")
            .attr('src', src)
            .attr('alt', title)
            .attr('title', title);
    }
};