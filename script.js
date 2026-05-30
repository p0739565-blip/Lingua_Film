// Данные о модулях и уроках
const modulesData = [
    {
        id: 1,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        videoUrl: "videos/lesson1.mp4",
        phrases: [
            { original: "You know what I mean?", translation: "Ты понимаешь, о чём я?" },
            { original: "I kinda like it.", translation: "Мне это вроде как нравится." },
            { original: "That’s awesome!", translation: "Это потрясающе!" },
            { original: "Could you repeat that, please?", translation: "Не могли бы вы повторить, пожалуйста?" }
        ]
    },
    {
        id: 2,
        title: "Wild Adventures",
        subtitle: "Дикие приключения",
        lessonTitle: "Wild Adventures: Дикие приключения",
        videoUrl: "videos/lesson2.mp4",
        phrases: [
            { original: "It’s a piece of cake.", translation: "Это проще простого." },
            { original: "Break a leg!", translation: "Ни пуха ни пера!" },
            { original: "Hit the books.", translation: "Займись учёбой." },
            { original: "Once in a blue moon.", translation: "Очень редко, раз в сто лет." }
        ]
    },
    {
        id: 3,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        videoUrl: "videos/lesson3.mp4",
        phrases: [
            { original: "In my opinion...", translation: "По моему мнению..." },
            { original: "I completely agree.", translation: "Я полностью согласен." },
            { original: "That’s an interesting point.", translation: "Это интересная мысль." },
            { original: "On the contrary...", translation: "Напротив..." }
        ]
    },
    {
        id: 4,
        title: "Festival Fun",
        subtitle: "Праздничное веселье",
        lessonTitle: "Festival Fun: Праздничное веселье",
        videoUrl: "videos/lesson4.mp4",
        phrases: [
            { original: "How’s it going?", translation: "Как дела?" },
            { original: "Long time no see!", translation: "Давно не виделись!" },
            { original: "Sounds good to me.", translation: "Звучит неплохо." },
            { original: "Let’s catch up soon.", translation: "Давай скоро встретимся." }
        ]
    }
];

// DOM‑элементы
const modulesContainer = document.getElementById('modulesContainer');
const clipVideo = document.getElementById('clipVideo');
const transcriptList = document.getElementById('transcriptList');
const player = document.getElementById('player');
const closePlayerBtn = document.getElementById('closePlayer');
const lessonTitle = document.getElementById('lessonTitle');

// Отображение модулей на главной странице
function renderModules() {
    modulesContainer.innerHTML = '';
    modulesData.forEach(module => {
        const tile = document.createElement('div');
        tile.className = 'module-tile';
        tile.innerHTML = `
            <div class="tile-content">
                <h3>${module.title}</h3>
                <p>${module.subtitle}</p>
            </div>
        `;
        tile.addEventListener('click', () => openPlayer(module));
        modulesContainer.appendChild(tile);
    });
}

// Открытие плеера с выбранным модулем
function openPlayer(module) {
    lessonTitle.textContent = module.lessonTitle;
    clipVideo.src = module.videoUrl;
    clipVideo.load();
    renderTranscript(module.phrases);
    player.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы
}

// Отображение списка фраз для изучения
function renderTranscript(phrases) {
    transcriptList.innerHTML = '';
    phrases.forEach(phrase => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="original">${phrase.original}</span><br>
            <span class="translation">${phrase.translation}</span>
        `;
        transcriptList.appendChild(li);
    });
}

// Закрытие плеера
function closePlayer() {
    clipVideo.src = '';
    player.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
}

// Закрытие по клику вне окна
window.addEventListener('click', function(event) {
    if (event.target === player) {
        closePlayer();
    }
});

// Закрытие по клавише ESC
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePlayer();
    }
});

// Обработчики событий
closePlayerBtn.addEventListener('click', closePlayer);

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderModules();
});
