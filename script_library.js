// Данные о видеофрагментах
const clipsData = [
    // The Parent Trap
    {
        id: 1,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/po.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "I've never seen.", translation: "Я никогда не видел." },
        ]
    },
    {
        id: 2,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/po.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "I've never seen.", translation: "Я никогда не видел." },
        ]
    },
    {
        id: 3,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/po.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "I've never seen.", translation: "Я никогда не видел." },
        ]
    },
    {
        id: 4,
        title: "Friends Forever",
        subtitle: "Дружба на века",
        lessonTitle: "Friends Forever: Дружба на века",
        module: "friends",
        videoUrl: "videos/po.mp4", 
        thumbnail: "foto/The_parent_trap.png",
        transript: [
            { original: "I've never seen.", translation: "Я никогда не видел." },
        ]
    },
    // Jumanji: Welcome to the Jungle
    {
        id: 5,
        title: "Wild Adventures",
        subtitle: "Дикие приключения",
        lessonTitle: "Wild Adventures: Дикие приключения",
        module: "adventures",
        videoUrl: "videos/jungle.mp4",
        thumbnail: "foto/jumanji.png",
        transript: [
            { original: "Wait a second.", translation: "Подожди секунду." },
            { original: "Like it or not.", translation: "Нравится тебе это или нет" },
            { original: "We have to do this together.", translation: "Мы должны сделать это вместе." },
            { original: "I don't know.", translation: "Я не знаю." },
            { original: "Where we part.", translation: "Там, где наши пути расходятся / Место нашей разлуки." }
        ]
    },
     {
        id: 6,
        title: "Wild Adventures",
        subtitle: "Дикие приключения",
        lessonTitle: "Wild Adventures: Дикие приключения",
        module: "adventures",
        videoUrl: "videos/jungle.mp4",
        thumbnail: "foto/jumanji.png",
        transript: [
            { original: "Wait a second.", translation: "Подожди секунду." },
            { original: "Like it or not.", translation: "Нравится тебе это или нет" },
            { original: "We have to do this together.", translation: "Мы должны сделать это вместе." },
            { original: "I don't know.", translation: "Я не знаю." },
            { original: "Where we part.", translation: "Там, где наши пути расходятся / Место нашей разлуки." }
        ]
    },
     {
        id: 7,
        title: "Wild Adventures",
        subtitle: "Дикие приключения",
        lessonTitle: "Wild Adventures: Дикие приключения",
        module: "adventures",
        videoUrl: "videos/jungle.mp4",
        thumbnail: "foto/jumanji.png",
        transript: [
            { original: "Wait a second.", translation: "Подожди секунду." },
            { original: "Like it or not.", translation: "Нравится тебе это или нет" },
            { original: "We have to do this together.", translation: "Мы должны сделать это вместе." },
            { original: "I don't know.", translation: "Я не знаю." },
            { original: "Where we part.", translation: "Там, где наши пути расходятся / Место нашей разлуки." }
        ]
    },
     {
        id: 8,
        title: "Wild Adventures",
        subtitle: "Дикие приключения",
        lessonTitle: "Wild Adventures: Дикие приключения",
        module: "adventures",
        videoUrl: "videos/jungle.mp4",
        thumbnail: "foto/jumanji.png",
        transript: [
            { original: "Wait a second.", translation: "Подожди секунду." },
            { original: "Like it or not.", translation: "Нравится тебе это или нет" },
            { original: "We have to do this together.", translation: "Мы должны сделать это вместе." },
            { original: "I don't know.", translation: "Я не знаю." },
            { original: "Where we part.", translation: "Там, где наши пути расходятся / Место нашей разлуки." }
        ]
    },
    // Wonder
    {
        id: 9,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        module: "talk",
        videoUrl: "videos/wo.mp4",
        thumbnail: "foto/wonder.png",
        transript: [
            { original: "Choose kind.", translation: "Выбирай доброту." },
            { original: "You're not alone.", translation: "Ты не один." },
            { original: "If they stare, let them stare.", translation: "Если они глазеют, пусть глазеют." },
            { original: "A great deal of courage.", translation: "Много мужества." },
            { original: "You can't blend in.", translation: "Ты не сможешь слиться с толпой." },
            { original: "Stand out.", translation: "Выделяйся." }
        ]
    },
    {
        id: 10,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        module: "talk",
        videoUrl: "videos/wo.mp4",
        thumbnail: "foto/wonder.png",
        transript: [
            { original: "Choose kind.", translation: "Выбирай доброту." },
            { original: "You're not alone.", translation: "Ты не один." },
            { original: "If they stare, let them stare.", translation: "Если они глазеют, пусть глазеют." },
            { original: "A great deal of courage.", translation: "Много мужества." },
            { original: "You can't blend in.", translation: "Ты не сможешь слиться с толпой." },
            { original: "Stand out.", translation: "Выделяйся." }
        ]
    },
    {
        id: 11,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        module: "talk",
        videoUrl: "videos/wo.mp4",
        thumbnail: "foto/wonder.png",
        transript: [
            { original: "Choose kind.", translation: "Выбирай доброту." },
            { original: "You're not alone.", translation: "Ты не один." },
            { original: "If they stare, let them stare.", translation: "Если они глазеют, пусть глазеют." },
            { original: "A great deal of courage.", translation: "Много мужества." },
            { original: "You can't blend in.", translation: "Ты не сможешь слиться с толпой." },
            { original: "Stand out.", translation: "Выделяйся." }
        ]
    },
    {
        id: 12,
        title: "Deep Talk",
        subtitle: "Глубокие беседы",
        lessonTitle: "Deep Talk: Глубокие беседы",
        module: "talk",
        videoUrl: "videos/wo.mp4",
        thumbnail: "foto/wonder.png",
        transript: [
            { original: "Choose kind.", translation: "Выбирай доброту." },
            { original: "You're not alone.", translation: "Ты не один." },
            { original: "If they stare, let them stare.", translation: "Если они глазеют, пусть глазеют." },
            { original: "A great deal of courage.", translation: "Много мужества." },
            { original: "You can't blend in.", translation: "Ты не сможешь слиться с толпой." },
            { original: "Stand out.", translation: "Выделяйся." }
        ]
    },
    // Mamma Mia!
    {
        id: 13,
        title: "Festival Fun",
        subtitle: "Праздничное веселье",
        lessonTitle: "Festival Fun: Праздничное веселье",
        module: "festival",
        videoUrl: "videos/mamma.mp4",
        thumbnail: "foto/mama.png",
        transript: [
            { original: "You found him?", translation: "Ты нашёл его?" },
            { original: "Not exactly.", translation: "Не совсем." },
            { original: "Come on!", translation: "Давай же! / Пошли!" },
            { original: "to have fun", translation: "весело проводить время" },
            { original: "Oh, we are!", translation: "О, ещё как! / О, именно это мы и делаем!" }
        ]
    },
    {
        id: 14,
        title: "Festival Fun",
        subtitle: "Праздничное веселье",
        lessonTitle: "Festival Fun: Праздничное веселье",
        module: "festival",
        videoUrl: "videos/mamma.mp4",
        thumbnail: "foto/mama.png",
        transript: [
            { original: "You found him?", translation: "Ты нашёл его?" },
            { original: "Not exactly.", translation: "Не совсем." },
            { original: "Come on!", translation: "Давай же! / Пошли!" },
            { original: "to have fun", translation: "весело проводить время" },
            { original: "Oh, we are!", translation: "О, ещё как! / О, именно это мы и делаем!" }
        ]
    },
    {
        id: 15,
        title: "Festival Fun",
        subtitle: "Праздничное веселье",
        lessonTitle: "Festival Fun: Праздничное веселье",
        module: "festival",
        videoUrl: "videos/mamma.mp4",
        thumbnail: "foto/mama.png",
        transript: [
            { original: "You found him?", translation: "Ты нашёл его?" },
            { original: "Not exactly.", translation: "Не совсем." },
            { original: "Come on!", translation: "Давай же! / Пошли!" },
            { original: "to have fun", translation: "весело проводить время" },
            { original: "Oh, we are!", translation: "О, ещё как! / О, именно это мы и делаем!" }
        ]
    },
    {
        id: 16,
        title: "Festival Fun",
        subtitle: "Праздничное веселье",
        lessonTitle: "Festival Fun: Праздничное веселье",
        module: "festival",
        videoUrl: "videos/mamma.mp4",
        thumbnail: "foto/mama.png",
        transript: [
            { original: "You found him?", translation: "Ты нашёл его?" },
            { original: "Not exactly.", translation: "Не совсем." },
            { original: "Come on!", translation: "Давай же! / Пошли!" },
            { original: "to have fun", translation: "весело проводить время" },
            { original: "Oh, we are!", translation: "О, ещё как! / О, именно это мы и делаем!" }
        ]
    }
];

// DOM‑элементы
const clipsContainer = document.getElementById('clipsContainer');
const moduleFilter = document.getElementById('moduleFilter');
const clipVideo = document.getElementById('clipVideo');
const transriptList = document.getElementById('transriptList');
const player = document.getElementById('player');
const closePlayerBtn = document.getElementById('closePlayer');
const lessonTitle = document.getElementById('lessonTitle');

// Отображение фрагментов в библиотеке
function renderClips() {
    clipsContainer.innerHTML = '';
    clipsData.forEach(clip => {
        const clipElement = document.createElement('div');
        clipElement.className = 'clip-card';
        clipElement.innerHTML = `
            <img src="${clip.thumbnail}" alt="${clip.title}" class="clip-thumbnail">
            <div class="clip-info">
                <h3>${clip.title}</h3>
                <p><strong>Тема:</strong> ${clip.subtitle}</p>
            </div>
        `;
        clipElement.addEventListener('click', () => openPlayer(clip));
        clipsContainer.appendChild(clipElement);
    });
}

// Открытие плеера с выбранным фрагментом
function openPlayer(clip) {
    lessonTitle.textContent = clip.lessonTitle;
    clipVideo.src = clip.videoUrl;
    clipVideo.load();
    renderTransript(clip.transript);
    player.classList.remove('hidden');
    document.body.classList.add('modal-open');
}

// Отображение списка фраз для изучения
function renderTransript(phrases) {
    transriptList.innerHTML = '';
    phrases.forEach(phrase => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="original">${phrase.original}</span><br>
            <span class="translation">${phrase.translation}</span>
        `;
        transriptList.appendChild(li);
    });
}

// Закрытие плеера
function closePlayer() {
    clipVideo.src = '';
    player.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

// Фильтрация фрагментов по модулю
function filterClips() {
    const selectedModule = moduleFilter.value;

    if (selectedModule === 'all') {
        renderClips();
        return;
    }

    const filteredClips = clipsData.filter(clip => clip.module === selectedModule);

    clipsContainer.innerHTML = '';
    filteredClips.forEach(clip => {
        const clipElement = document.createElement('div');
        clipElement.className = 'clip-card';
        clipElement.innerHTML = `
            <img src="${clip.thumbnail}" alt="${clip.title}" class="clip-thumbnail">
            <div class="clip-info">
                <h3>${clip.title}</h3>
                <p><strong>Тема:</strong> ${clip.subtitle}</p>
            </div>
        `;
        clipElement.addEventListener('click', () => openPlayer(clip));
        clipsContainer.appendChild(clipElement);
    });
}

// Обработчики событий
moduleFilter.addEventListener('change', filterClips);
closePlayerBtn.addEventListener('click', closePlayer);

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

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderClips();
});
