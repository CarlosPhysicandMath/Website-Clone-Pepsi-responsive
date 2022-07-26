function imgSlider(anything){
			document.querySelector('.pepsi').src = anything;
		}

		function changeBgColor(color){
			const sec = document.querySelector('.sec');
			sec.style.background = color;
		}

		function menutoggle(){
			const togglemenu = document.querySelector('.togglemenu');
			const navigation = document.querySelector('.navigation');
			togglemenu.classList.toggle('active');
			navigation.classList.toggle('active');
		}
