var tabBox = {
	liSelected: null,
	_init: function(){
		var elDiv = document.getElementsByClassName('tab-box')[0];
		var elUl = elDiv.childNodes[1];
		var elLis = elUl.getElementsByTagName('li');
		
		Array.prototype.forEach.call(elLis, function(li) {
			// 이 함수 내의 this는 현재 컨텍스트인 tabBox 객체를 가리킨다.
			// onTabClicked 메서드를 바인딩된 this 컨텍스트로 실행한다.
			// 이때, this는 tabBox 객체를 가리키게 된다.
			li.onclick = this.onTabClicked.bind(this);
		}.bind(this)); // 내부 함수에서의 this를 tabBox 객체로 설정한다.
	},
	init: function() {
		// _init 메서드를 현재 객체('tabBox' 객체)인 this에 바인딩한다.
		// 이렇게 하면, _init 메서드 내에서 this를 사용할 때 tabBox 객체를 참조하게 된다.
		window.onload = this._init.bind(this); 
	},
	onTabClicked: function(e) {
		// tabBox 객체 내의 프로퍼티 참조 -> this.liSelected
		if(this.liSelected != null) {
			this.liSelected.className = '';
		}
		
		// e: 이벤트 객체
		// e.target: 클릭 이벤트가 발생한 HTML 요소
		e.target.className='selected';
		this.liSelected = e.target;	
	}
};