


//Бургер меню

$(document).ready(function () {
	$('.item-footer__burger').click(function (event) {
		$('.item-footer__burger,.item-footer__block').toggleClass('active');
		$('body').toggleClass('lock')
	});
	
});



function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();


// Хедер DROPD DOWN ==============

const buttonDropDown = document.querySelectorAll('.drop__down');

// Удаляем активные классы у всех блоков
function removeActiveClasses() {
	buttonDropDown.forEach(section => {
		const blockDrop = section.querySelector('.block__drop');
		blockDrop.classList.remove('active');
		section.classList.remove('active');
	});
}

// Добавляем обработчик клика на каждую кнопку
buttonDropDown.forEach(section => {
	section.addEventListener('click', function (event) {
		event.stopPropagation(); // Останавливаем всплытие события

		// Получаем блок, который нужно открыть/закрыть
		const blockDrop = section.querySelector('.block__drop');

		// Если блок уже активен, удаляем класс, иначе добавляем
		if (blockDrop.classList.contains('active')) {
			blockDrop.classList.remove('active');
		} else {
			removeActiveClasses(); // Убираем класс у всех блоков
			blockDrop.classList.add('active');
			section.classList.add('active');

		}
	});
});

// Обработчик клика на весь документ для закрытия блоков
document.addEventListener('click', function () {
	removeActiveClasses(); // Убираем все активные классы
});


const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		pauseOnMouseEnter: true,
		disableOnInteraction: true,
	},
	speed: 1200,
});


const collectionsItems = document.querySelectorAll('.item-collections');
const collectionsFilterButtons = document.querySelectorAll('.collections__top-btn');
const collectionsBlock = document.querySelector('.collections__bottom-body');
const collectionsBody = document.querySelectorAll('.item-collections__body');


// ФИЛЬТР
const maxVisibleItems = 8;  // Максимальное количество показываемых блоков

// Функция для перемешивания элементов
function shuffleItems(items) {
	return items.sort(() => Math.random() - 0.5);
}

// Функция для отображения случайных блоков
function displayRandomBlocks(filteredItems) {
	const itemsToDisplay = filteredItems.slice(0, maxVisibleItems);

	// Скрываем все блоки
	collectionsItems.forEach(item => {
		item.style.display = 'none';
	});

	// Показываем выбранные блоки
	itemsToDisplay.forEach(item => {
		item.style.display = 'grid';
	});
}

// Перемешиваем блоки при загрузке страницы
const shuffledItems = shuffleItems(Array.from(collectionsItems));

// Показываем случайные блоки при загрузке
displayRandomBlocks(shuffledItems);

// Обработчик фильтрации
collectionsFilterButtons.forEach(button => {
	button.addEventListener('click', function () {
		const filter = button.dataset.filter;
		const filteredItems = filter === 'all' ? shuffledItems : shuffledItems.filter(item => item.dataset.category === filter);

		// Показываем случайные блоки после фильтрации
		displayRandomBlocks(filteredItems);
	});
});


// Добавление \ Удаление классов при наведении 
collectionsBody.forEach(item => {
	const collectionsPrice = item.querySelector('.item-collections__price');
	const collectionsEye = item.querySelector('.item-collections__eye');
	const collectionsHeart = item.querySelector('.item-collections__heart');
	const collectionsBasket = item.querySelector('.item-collections__basket');
	const collectionsBasketText = item.querySelector('.item-collections__text');

	item.addEventListener('mouseover', function() {
		item.classList.add('active');
		collectionsPrice.classList.add('active');
		collectionsEye.classList.add('active');
		collectionsHeart.classList.add('active');
		collectionsBasket.classList.add('active');
		collectionsBasketText.classList.add('active');
	});

	item.addEventListener('mouseout', function () {
		item.classList.remove('active');
		collectionsPrice.classList.remove('active');
		collectionsEye.classList.remove('active');
		collectionsHeart.classList.remove('active');
		collectionsBasket.classList.remove('active');
		collectionsBasketText.classList.remove('active');
	});
});


// FILTER 

const featuredFilterButtons = document.querySelectorAll('.featured__top-btn');
const featuredBlock = document.querySelector('.featured__bottom-body');
const featuredItems = document.querySelectorAll('.item-featured');

const maxVisibleItemsTwo = 4;  // Максимальное количество показываемых блоков

// Функция для перемешивания элементов
function shuffleItemsTwo(items) {
	return items.sort(() => Math.random() - 0.5);
}

// Функция для отображения случайных блоков
function displayRandomBlocksTwo(filteredItemsTwo) {
	const itemsToDisplayTwo = filteredItemsTwo.slice(0, maxVisibleItemsTwo);

	// Скрываем все блоки
	featuredItems.forEach(item => {
		item.style.display = 'none';
	});

	// Показываем выбранные блоки
	itemsToDisplayTwo.forEach(item => {
		item.style.display = 'grid';
	});
}

// Перемешиваем блоки при загрузке страницы
const shuffledItemsTwo = shuffleItemsTwo(Array.from(featuredItems));

// Показываем случайные блоки при загрузке
displayRandomBlocksTwo(shuffledItemsTwo);

// Обработчик фильтрации
featuredFilterButtons.forEach(button => {
	button.addEventListener('click', function () {
		const filterTwo = button.dataset.filter;
		const filteredItemsTwo = filterTwo === 'all' ? shuffledItemsTwo : shuffledItemsTwo.filter(item => item.dataset.category === filterTwo);

		// Показываем случайные блоки после фильтрации
		displayRandomBlocksTwo(filteredItemsTwo);
	});
});



// SWIPER TWO

const swiperTwo = new Swiper('.brand__swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		pauseOnMouseEnter: true,
		disableOnInteraction: true,
	},
	speed: 1200,
	breakpoints: {
		// При разрешении 640px или выше
		320: {
			slidesPerView: 2, // Показывать 2 слайда
			spaceBetween: 20, // Увеличить отступы
		},
		425: {
			slidesPerView: 3, // Показывать 2 слайда
			spaceBetween: 20, // Увеличить отступы
		},
		640: {
			slidesPerView: 4, // Показывать 2 слайда
			spaceBetween: 20, // Увеличить отступы
		},
		// При разрешении 768px или выше
		768: {
			slidesPerView: 6, // Показывать 3 слайда
			spaceBetween: 30,
		},
		// При разрешении 1024px или выше
		1024: {
			slidesPerView: 6, // Показывать 4 слайда
			spaceBetween: 40,
		},
	},
}); 