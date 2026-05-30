// ========== 照片配置（在这里添加你的照片） ==========
const photos = [
    { file: '1.jpg', date: '2010年5月12日', msg: '宝宝这是你接近三岁时候的照片吧，你咋这么可爱这么萌呢' },
    { file: '2.jpg', date: '2011年8月31日', msg: '宝宝此时你四岁了，你小时候怎么这么可爱啊，以后如果我也有这么可爱的女儿就好了' },
    { file: '3.jpg', date: '小学', msg: '宝宝你小时候就那么爱笑了，现在也要常笑哦，希望你能少点烦恼' },
    { file: '4.jpg', date: '小学', msg: '谁小时候没试过用美颜相机给自己拍一张美美的照片' },
    { file: '5.jpg', date: '2022年6月15日', msg: '千金这时候要中考了吧，你笑起来真的好能打动我的心，以后要经常笑' },
    { file: '6.jpg', date: '高一', msg: '宝宝这是你刚转来邓中时候吧，寄人篱下以及自己一个人的感觉不太好吧，好心疼你啊，不过到后面就好了' },
    { file: '7.jpg', date: '高一暑假', msg: '宝宝这是你第一次化妆，这么对比下来，你化妆技术真的提高了好多耶' },
    { file: '8.jpg', date: '2024年2月2日', msg: '宝宝你这张照片真的很文艺啊，简直是文艺少女来的吧' },
    { file: '9.jpg', date: '2023年7月1x日', msg: '宝宝惠州好玩吗，下次我们一起去玩好不好' },
    { file: '10.jpg', date: '2024年11月7日', msg: '宝宝你笑得好明媚啊，难怪我会疯狂爱上你' },
    { file: '12.jpg', date: '2025年1月16日', msg: '喝啥呢，怎么不分我一口' },
    { file: '11.jpg', date: '2025年2月22日', msg: '宝宝你这是麻花辫吗，真的有点怀念高三时期了，好后悔没有早点追你' },
    { file: '13.jpg', date: '2025年2月23日', msg: '成人礼，你真是我女神来的，我爸妈也觉得你好漂亮啊，估计他们也没想到我能追到手' },
    { file: '14.jpg', date: '二模后', msg: '这个是谁偷拍的呢，我也不知道，不过好怀念暧昧期呢，既大胆又小心' },
    { file: '15.jpg', date: '2025年5月17日', msg: '你总问我什么时候表白，今晚我这不就表白了吗，终于把心爱的人追到手了' },
    { file: '16.jpg', date: '2025年5月31日', msg: '今天我宝宝十八岁生日了，从此以后就是一个大人了，但我希望你在我这里永远当一个小孩' },
    { file: '17.jpg', date: '2025年6月19日', msg: '宝宝你怎么这么美，这妆造也太好看了吧，以后我要和你一起去江南地方玩' },
    { file: '18.jpg', date: '2025年6月23日', msg: '宝宝这是我们第一次同床共枕，也是我第一次来广州找你，啥时候我们才能结束异地恋啊，啥时候我们才能拥有一个自己的小家' },
    { file: '19.jpg', date: '2025年8月18日', msg: '今天我带乖乖女进台球厅了，幸好里面少人没啥人抽烟，这也是为数不多和我一起在云浮的美好时光' },
    { file: '20.jpg', date: '2025年10月1日', msg: '宝宝我们终于见面了，和你一起在海边散步真的很幸福啊，迎面吹来的海风，蔚蓝的天空，还有身边的爱人，一切都很惬意，我也因为这一段路而爱上这一座城' },
    { file: '21.jpg', date: '2025年10月17日', msg: '这是宝宝第一次来中山找我，我真的想能够多见面，中山唯一不好就是酒店不好，但是美食还是挺多的，但我都不想一个人去吃，我自己一个人在中山好难过，你也一个人在佛山也会难过吧' },
    { file: '22.jpg', date: '2025年11月9日', msg: '佛山欢乐海岸，就是这样笑起来才好看，爱笑总不会是坏事，这不我们就爽玩半天' },
    { file: '23.jpg', date: '2025年11月30日', msg: '这是我第一次去你学校找你吧，真的不是我不想来，而是我们不是经常在广州见面吗，不过你学校附加的小食街真的有好多好吃的东西，下次去我还要继续吃' },
    { file: '24.jpg', date: '2025年12月6日', msg: '宝宝你看起来怎么这么像顽皮小孩呢' },
    { file: '25.jpg', date: '2025年12月6日', msg: '宝宝你这张照片看起来就更像没长大的小孩了，在我这里你一直保持着你的纯真就好了，不用去想那么多烦心事，无忧无虑就好' },
    { file: '26.jpg', date: '2025年12月19日', msg: '宝宝你踏上柳州之旅了，这妆画得也是美美的，这光打下来真是氛围感女神啊' },
    { file: '27.jpg', date: '2025年12月19日', msg: '我也不知道为啥，我特别喜欢看你嘴角上扬，看你笑感觉能治愈我'},
    { file: '28.jpg', date: '2025年12月14日', msg: '你到底是拍你自己呢还是在拍我呢，但是看到我也被记录了我也很开心' },
    { file: '31.jpg', date: '2026年1月1日', msg: '宝宝这是我们第一次拍拍立得，以后我们也要拍好多好多照片来记录' },
    { file: '30.jpg', date: '2026年1月1日', msg: '新的一年是谁顶着个位数温度美美出片呢' },
    { file: '29.jpg', date: '2026年1月2日', msg: '这么这么有女神风范呢' },
    { file: '30.png', date: '2026年1月18日', msg: '宝宝来陪我过19岁生日了，我也好想陪宝宝过19岁生日，我不想缺席每一个生日和纪念日，我的生日愿望是希望能够陪宝宝走得更远，希望生活中我宝宝不会有太多烦恼' },
    { file: '32.jpg', date: '2026年5月16日', msg: '这是我写代码赚回来的钱买的礼物，希望宝宝以后只流幸福的眼泪' },
    { file: '33.jpg', date: '2026年5月17日', msg: '没想到这么快就一年了，又来拍拍立得了，可是我没化妆好丑啊，不过没关系啦，宝宝你好看就行' },
    { file: '34.jpg', date: '2026年5月23日', msg: '这条新裙子很适合宝宝啊，宝宝你这侧脸真的珏了' },
];


// ========== 全局变量 ==========
let track, viewport;
let isAutoPlaying = false;
let autoPlayTimer = null;
let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let currentTranslateX = 0;
let letterShown = false;

// ========== 图片缓存 ==========
async function cacheImages() {
    try {
        const cache = await caches.open('photo-cache-v1');
        const files = photos.map(p => p.file);
        
        for (const file of files) {
            const response = await fetch(file);
            if (response.ok) {
                await cache.put(file, response);
            }
        }
        console.log('图片缓存完成');
    } catch (e) {
        console.log('缓存失败:', e);
    }
}

// 加载图片时优先从缓存读取
async function loadImage(file) {
    try {
        const cache = await caches.open('photo-cache-v1');
        const cached = await cache.match(file);
        if (cached) {
            return URL.createObjectURL(await cached.blob());
        }
    } catch (e) {}
    return file;
}

// ========== 入场动画 ==========
function startIntro() {
    const stage = document.getElementById('introStage');
    const container = document.getElementById('introPhotos');
    
    // 确保显示
    stage.style.display = 'flex';
    stage.style.opacity = '1';

    // 随机均匀分布
    const cols = 6;
    const rows = Math.ceil(photos.length / cols);
    const cellW = 80 / cols;
    const cellH = 75 / rows;
    const cells = [];
    
    // 生成所有格子
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            cells.push({ x: 8 + c * cellW, y: 5 + r * cellH });
        }
    }
    
    // 打乱格子顺序
    for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
    }

    photos.forEach((p, i) => {
        const photo = document.createElement('div');
        photo.className = 'intro-photo';

        const cell = cells[i % cells.length];
        const x = cell.x + (Math.random() - 0.5) * cellW * 0.6;
        const y = cell.y + (Math.random() - 0.5) * cellH * 0.5;
        const rotate = (Math.random() - 0.5) * 16;

        photo.style.left = `${x}%`;
        photo.style.top = `${y}%`;
        photo.style.setProperty('--rotate', `${rotate}deg`);
        photo.style.width = '110px';
        photo.style.height = '145px';
        photo.dataset.date = p.date;
        photo.style.zIndex = i;

        const img = document.createElement('img');
        img.alt = `回忆 ${i + 1}`;
        img.onerror = function() { this.src = getPlaceholder(i); };
        
        // 从缓存加载
        loadImage(p.file).then(src => {
            img.src = src;
        });
        
        // 根据原图比例设置大小
        img.onload = function() {
            const ratio = this.naturalWidth / this.naturalHeight;
            const h = 145;
            photo.style.height = `${h}px`;
            photo.style.width = `${h * ratio}px`;
        };
        
        photo.appendChild(img);
        container.appendChild(photo);

        setTimeout(() => photo.classList.add('show'), 300 + i * 200);
    });

    const textTime = 300 + photos.length * 200 + 400;
    setTimeout(() => document.getElementById('introText').classList.add('show'), textTime);

    const fadeTime = textTime + 1500;
    setTimeout(() => {
        container.querySelectorAll('.intro-photo').forEach((p, i) => {
            setTimeout(() => p.classList.add('fade'), i * 60);
        });
    }, fadeTime);

    // 显示"开始回忆"按钮（等所有照片淡出后）
    const allFadedTime = fadeTime + photos.length * 60 + 1500;
    setTimeout(() => {
        document.getElementById('introText').classList.remove('show');
        document.getElementById('startRecall').style.display = 'flex';
    }, allFadedTime);
}

// ========== 胶片卷轴 ==========
function initFilmstrip() {
    track = document.getElementById('filmstripTrack');
    viewport = document.getElementById('filmstripViewport');

    track.innerHTML = '';

    // 生成胶片孔
    createSprocketHoles();

    // 生成照片卡片
    photos.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'film-card';

        const img = document.createElement('img');
        img.alt = `回忆 ${i + 1}`;
        img.loading = 'lazy';
        img.onerror = function() { this.src = getPlaceholder(i); };
        
        // 从缓存加载
        loadImage(p.file).then(src => {
            img.src = src;
        });
        
        // 根据原图比例设置宽度
        img.onload = function() {
            const ratio = this.naturalWidth / this.naturalHeight;
            const cardHeight = parseInt(getComputedStyle(card).height);
            card.style.width = `${cardHeight * ratio}px`;
        };
        
        card.appendChild(img);

        const overlay = document.createElement('div');
        overlay.className = 'card-overlay';
        overlay.innerHTML = `<div class="card-date">${p.date}</div>`;
        card.appendChild(overlay);

        card.addEventListener('click', () => openModal(i));
        track.appendChild(card);
    });

    // 拖拽滚动
    initDrag();

    // 键盘
    document.addEventListener('keydown', onKey);

    // 更新进度
    updateProgress();
}

function createSprocketHoles() {
    // 生成足够多的胶片孔填满屏幕
    const holesCount = 60;
    document.querySelectorAll('.sprocket-holes').forEach(el => {
        el.innerHTML = '';
        for (let i = 0; i < holesCount; i++) {
            const hole = document.createElement('div');
            hole.className = 'sprocket-hole';
            el.appendChild(hole);
        }
    });
}

// ========== 拖拽滚动 ==========
function initDrag() {
    // 鼠标
    viewport.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.pageX;
        scrollLeft = currentTranslateX;
        viewport.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        const dx = e.pageX - startX;
        currentTranslateX = scrollLeft + dx;
        setTrackPosition(currentTranslateX);
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        viewport.style.cursor = 'grab';
        updateProgress();
    });

    // 触摸
    viewport.addEventListener('touchstart', e => {
        isDragging = true;
        startX = e.touches[0].pageX;
        scrollLeft = currentTranslateX;
    }, { passive: true });

    document.addEventListener('touchmove', e => {
        if (!isDragging) return;
        const dx = e.touches[0].pageX - startX;
        currentTranslateX = scrollLeft + dx;
        setTrackPosition(currentTranslateX);
    }, { passive: true });

    document.addEventListener('touchend', () => {
        isDragging = false;
        updateProgress();
    });

    // 滚轮横向
    viewport.addEventListener('wheel', e => {
        e.preventDefault();
        currentTranslateX -= e.deltaY * 1.5;
        clampPosition();
        setTrackPosition(currentTranslateX);
        updateProgress();
    }, { passive: false });
}

function setTrackPosition(x) {
    track.style.transition = isDragging ? 'none' : 'transform 0.4s ease';
    track.style.transform = `translateX(${x}px)`;
}

function clampPosition() {
    const maxScroll = 50;
    const minScroll = -(track.scrollWidth - viewport.clientWidth + 50);
    currentTranslateX = Math.max(minScroll, Math.min(maxScroll, currentTranslateX));
}

// ========== 按钮控制 ==========
function scrollToCard(index) {
    const cards = track.querySelectorAll('.film-card');
    if (index < 0 || index >= cards.length) return;

    const card = cards[index];
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    const viewWidth = viewport.clientWidth;

    currentTranslateX = -(cardLeft - viewWidth / 2 + cardWidth / 2) + 50;
    clampPosition();
    setTrackPosition(currentTranslateX);
    updateProgress();
}

function getCurrentIndex() {
    const cards = track.querySelectorAll('.film-card');
    const viewCenter = -currentTranslateX + viewport.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    cards.forEach((card, i) => {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(center - viewCenter);
        if (dist < minDist) {
            minDist = dist;
            closest = i;
        }
    });
    return closest;
}

// ========== 自动播放 ==========
function toggleAutoPlay() {
    const btn = document.getElementById('btnAuto');
    if (isAutoPlaying) {
        stopAutoPlay();
        btn.textContent = '▶ 自动';
        btn.classList.remove('active');
    } else {
        startAutoPlay();
        btn.textContent = '⏸ 暂停';
        btn.classList.add('active');
    }
}

function startAutoPlay() {
    isAutoPlaying = true;
    autoPlayTimer = setInterval(() => {
        currentTranslateX -= 1.5;
        // 到末尾停止
        const minScroll = -(track.scrollWidth - viewport.clientWidth + 50);
        if (currentTranslateX < minScroll) {
            currentTranslateX = minScroll;
            stopAutoPlay();
        }
        setTrackPosition(currentTranslateX);
        updateProgress();
    }, 30);
}

function stopAutoPlay() {
    isAutoPlaying = false;
    clearInterval(autoPlayTimer);
}

// ========== 进度 ==========
function updateProgress() {
    const idx = getCurrentIndex();
    document.getElementById('progressText').textContent = `${idx + 1} / ${photos.length}`;

    const percent = ((idx + 1) / photos.length) * 100;
    document.getElementById('progressFill').style.width = `${percent}%`;
}

// ========== 信件 ==========
function showLetter() {
    document.getElementById('letterOverlay').classList.add('show');
}

function closeLetter() {
    document.getElementById('letterOverlay').classList.remove('show');
    // 显示"再读一次信"按钮
    document.getElementById('readLetterBtn').style.display = 'block';
}

// ========== 模态框 ==========
let isLastPhotoModal = false;

function openModal(index) {
    const p = photos[index];
    loadImage(p.file).then(src => {
        document.getElementById('modalImg').src = src;
    });
    document.getElementById('modalDate').textContent = p.date;
    document.getElementById('modalMessage').textContent = p.msg;
    document.getElementById('modalOverlay').classList.add('show');
    stopAutoPlay();
    
    // 记录是否是最后一张
    isLastPhotoModal = (index === photos.length - 1);
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('show');
    // 如果关闭的是最后一张照片，弹出信件
    if (isLastPhotoModal && !letterShown) {
        letterShown = true;
        setTimeout(showLetter, 500);
    }
}

// ========== 键盘 ==========
function onKey(e) {
    if (e.key === 'ArrowRight') {
        scrollToCard(getCurrentIndex() + 1);
    } else if (e.key === 'ArrowLeft') {
        scrollToCard(getCurrentIndex() - 1);
    } else if (e.key === 'Escape') {
        closeModal();
    }
}

// ========== 工具 ==========
function getPlaceholder(i) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
    return `data:image/svg+xml;base64,${btoa(`<svg width="200" height="280" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${colors[i % 5]}"/><text x="50%" y="50%" font-family="Georgia" font-size="16" fill="white" text-anchor="middle" dy=".3em">${i + 1}</text></svg>`)}`;
}

// ========== 启动 ==========
let bgmAudio = null;

function createBGM() {
    if (bgmAudio) return;
    bgmAudio = new Audio('1.mp3');
    bgmAudio.loop = true;
    bgmAudio.volume = 0.6;
    bgmAudio.play().catch(() => {
        // 被拦截，等用户任意操作后播放
        const handler = () => {
            bgmAudio.play().catch(() => {});
            document.removeEventListener('click', handler);
            document.removeEventListener('touchstart', handler);
            document.removeEventListener('keydown', handler);
        };
        document.addEventListener('click', handler);
        document.addEventListener('touchstart', handler);
        document.addEventListener('keydown', handler);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 缓存图片
    cacheImages();
    
    // 加载后显示入场动画
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hide');
        setTimeout(startIntro, 300);
    }, 800);

    // 绑定"开始回忆"按钮
    document.getElementById('startRecallBtn').addEventListener('click', () => {
        // 播放BGM（用户交互）
        createBGM();
        
        // 切换到胶卷
        const stage = document.getElementById('introStage');
        stage.style.opacity = '0';
        setTimeout(() => {
            stage.style.display = 'none';
            document.getElementById('mainStage').classList.add('show');
            initFilmstrip();
            startAutoPlay();
        }, 500);
    });

    // 事件绑定
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.getElementById('letterClose').addEventListener('click', closeLetter);
    document.getElementById('readLetterBtn').addEventListener('click', showLetter);
});
