





const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0];
    arrowIcons = document.querySelectorAll(".wrapper i");


    let isDragStart = false, prevPageX, prevScrollLeft;
    let firstImgWidth = firstImg.clientWidth + 14;

    arrowIcons.forEach(icon =>{
        icon.addEventListener("click", () =>{
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        })
    });

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
    if(!isDragStart) return; 
    e.preventDefault();  
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX; 
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);








let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}





















































function changeLanguage() {
    const languageSelector = document.getElementById('language-selector');
    const selectedLanguage = languageSelector.value;

    // Define translations for both languages
    const languages = {
        ru: {
            'home-menu': 'Главная',
            'shop-menu': 'Часы',
            'brands-menu': 'Бренды',
            'delivery-menu': 'Доставка',
            'about-menu': 'О нас',
            'contact-menu': 'Контакт',
            'welcome': 'Добро пожаловать в',
            'dlv': 'Драгоценные часы с',
            'home-btn': 'Заказать сейчас',
            'all': 'Посмотреть все часы',
            'brs': 'Все бренды',
            'now': 'Смотреть сейчас',
            'get': 'Получить сейчас',
            'tg': 'Заказать через телеграм-канал',
            'dlv-txt': 'Сегодня заслуживают доставки',
            'dv1': 'В TimeCity мы стремимся обеспечить быструю и эффективную доставку ваших заказов. Ниже вы найдете все, что вам  нужно знать о нашем процессе доставки. Все заказы, размещенные до [крайнего времени, например, с 7:00 до 12:00], будут обработаны и отправлены в тот же день.',
            'dv2': 'Заказы, размещенные после этого времени, будут обработаны на следующий рабочий день. На данный момент мы доставляем в следующие регионы: • (Доставляем по всему Узбекистану). Если вашего местоположения нет в списке, пожалуйста, свяжитесь с нашей службой поддержки клиентов, чтобы проверить наличие мест',
            'order': 'Заказать сейчас',
            'abt': 'О нашем',
            'magazine': 'Магазине',
            'welcome2': 'Добро пожаловать в TimeCity, где качество сочетается с удобством!',
            'abt1': 'В TimeCity мы гордимся тем, что предлагаем широкий выбор (часов, высококачественных товаров, модной одежды, электроники и т. д.),призванных удовлетворить ваши потребности и превзойти ваши ожидания.',
            'abt2': 'Почему выбирают нас?',
            'abt3': '• Премиальное качество: мы отбираем каждый продукт вручную, чтобы гарантировать его соответствие нашим высоким стандартам качества.',
            'abt4': '• Доступные цены: Исключительная ценность без ущерба для качества.',
            'abt5': '• Удовлетворенность клиентов: ваше счастье является нашим приоритетом, и мы делаем все возможное, чтобы обеспечить вам положительные впечатления от покупок.',
            'abt6': '• Быстрая доставка: мы осуществляем доставку по всему Узбекистану, гарантируя, что ваши заказы будут доставлены вам быстро и безопасно.',
            'abt7': 'Наша задача',
            'abt8': 'Наша задача — обеспечить удобство покупок для наших клиентов, предлагая первоклассные продукты и отличный сервис.',
            'abt9': 'Делайте покупки с уверенностью в TimeCity, где каждая покупка сделана качественно и с заботой.',
            'cnt': 'Контакты и Социальные сети',
            'dlv2': 'доставкой',
            'unq': 'Уникальная, прочная и незаменимая коллекция Classic Fusion по-новому интерпретирует классическую элегантность с несравненным подходом Hublot. Решительно уникальныйстиль, доступный в широком разнообразии механизмов, дизайнов, материалов и цветов.'
        },
        uz: {
            'home-menu': 'Bosh Sahifa',
            'shop-menu': 'Soatlar',
            'brands-menu': 'Brendlar',
            'delivery-menu': 'Yetkazib berish xizmatlari',
            'about-menu': 'Biz haqimizda',
            'contact-menu': 'Aloqa',
            'welcome': 'Xush kelibsiz',
            'dlv': 'yetkazib berish bilan',
            'home-btn': 'Buyurtma berish',
            'all': 'Barcha soatlarni ko`rish',
            'brs': 'Barcha brendlar',
            'now': 'Hoziroq ko`rish',
            'get': 'Hoziroq harid qilish',
            'tg': 'Telegram orqali buyurtma berish',
            'dlv-txt': 'Hozirda yetkazib berish xizmatingizda',
            'dv1': 'TimeCity-da biz sizning buyurtmalaringizni tez va samarali yetkazib  berishni ta`minlashga intilamiz. Quyida bizning yuk tashish jarayoni haqida bilishingiz kerak bo`lgan hamma narsani topasiz. [oxirgi vaqt, masalan, soat 7:00 dan 12:00 gacha] oldin berilgan barcha buyurtmalar o`sha kuni qayta ishlanadi va jo`natiladi.',
            'dv2': 'Bu vaqtdan keyin berilgan buyurtmalar keyingi ish kunida ko`rib chiqiladi. Biz hozirda quyidagi hududlarga yetkazib beramiz: (Biz butun O`zbekiston bo`ylab yetkazib beramiz). Agar sizning joylashuvingiz ro`yxatda bo`lmasa, mavjudligini tekshirish uchun mijozlarga xizmat ko`rsatish bilan bog`laning.',
            'order': 'Buyurtma berish',
            'abt': 'Bizning',
            'magazine': 'Do`konimiz haqida',
            'welcome2': 'TimeCity-da barchasi sifat va qulaylik bilan ishlanadi!',
            'abt1': 'TimeCity`da biz sizning ehtiyojlaringizga javob beradigan va kutganingizdan ham keng tanlovni (soatlar, yuqori sifatli mahsulotlar, moda, elektronika va boshqalar) taklif qilishdan faxrlanamiz.',
            'abt2': 'Nega bizni tanlashadi ?',
            'abt3': '• Yuqori sifat: Biz har bir mahsulotni yuqori sifat standartlarimizga mos kelishini ta`minlash uchun tanlaymiz.',
            'abt4': '• Qulay narxlar: sifatni yo`qotmagan holda ajoyib qiymat.',
            'abt5': '• Mijozlarning qoniqishi: Sizning baxtingiz bizning ustuvor vazifamizdir va biz sizga ijobiy xarid tajribasini taqdim etish uchun yuqorida va undan ham ko`proq harakat qilamiz.',
            'abt6': '• Tez yetkazib berish: Buyurtmalaringiz sizga tez va xavfsiz yetib borishini taʼminlab, butun Oʻzbekiston boʻylab yetkazib beramiz.',
            'abt7': 'Bizning vazifamiz',
            'abt8': 'Bizning vazifamiz yuqori sifatli mahsulotlar va mukammal xizmatni taklif qilish orqali mijozlarimizga uzluksiz xarid qilish tajribasini taqdim etishdir.',
            'abt9': 'TimeCity’da ishonch bilan xarid qiling, bu yerda har bir xarid sifatli va ehtiyotkorlik bilan amalga oshiriladi.',
            'cnt': 'Kontaktlar va ijtimoiy tarmoqlar',
            'dlv2': 'bilan',
            'unq': 'Noyob, bardoshli va zarur bo`lgan Classic Fusion to`plami klassik nafislikni beqiyos Hublot sensori bilan qayta talqin qiladi. O`ziga xosuslub, turli xil mexanizmlar, dizaynlar, materiallar va ranglarda mavjud.'
        }
    };

    const selectedText = languages[selectedLanguage];

    // Loop through each item and update the text content
    for (let id in selectedText) {
        document.getElementById(id).textContent = selectedText[id];
    }
}











function selectCat(catImage) {
    localStorage.setItem("selectedCat", catImage); // Mushuk rasmini saqlash
    window.location.href = "page.html"; // Qo‘shimcha sahifaga o'tish
}