# Bakery — сучасна пекарня

Вебсайт для мережі пекарень. Сайт має сучасний дизайн, повністю адаптивний під мобільні, планшети й десктоп пристрої, з інтерактивними елементами на JavaScript.

## 🎓 Походження проєкту

Цей проєкт був створений у рамках курсу **з фронтенду на платформі Genius Space** з використанням матеріалів та концепцій курсу.

## 👤 Автор

**BetaButterfly**
- GitHub: [@BetaButterfly](https://github.com/BetaButterfly)
- Живий сайт: [betabutterfly.github.io/Project_Bakery](https://betabutterfly.github.io/Project_Bakery/)

## Що є на сайті

- **Хедер** з навігацією та бургер-меню на мобільних
- **Hero-секція** з фоновим зображенням
- **Переваги** мережі пекарень
- **Секція традицій** з описом та фото пекаря
- **Шеф-кухарі** — картки з фото та описами
- **Формати пекарень** — картки Walrus, Horseshoe, Handlebar
- **Контактна форма** з полями ім'я, телефон, email
- **Google-карта** з розташуванням
- **Футер** з контактами, соцмережами та навігацією
- **Модальне вікно** «Замовити дзвінок» (закривається по Esc, кліку на фон, кнопці)

## Стек технологій

- **HTML5** — семантична розмітка, доступність (a11y)
- **SCSS** — змінні, вкладеність, міксини, БЕМ-нейминг
- **CSS3** — Flexbox, медіа-запити, CSS-змінні, transitions
- **JavaScript** — модалка, мобільне меню
- **GitHub Actions** — автоматична компіляція SCSS → CSS при кожному пуші в `main`
- **GitHub Pages** — хостинг

## Як запустити локально

1. Склонуйте репозиторій:

   ```bash
   git clone https://github.com/BetaButterfly/Project_Bakery.git
   ```

2. Відкрийте `index.html` у вашому веб-браузері.

### Якщо хочете редагувати SCSS

1. Встановіть [Sass](https://sass-lang.com/install):

   ```bash
   npm install -g sass
   ```

2. Запустіть компіляцію у режимі спостереження:

   ```bash
   sass scss/main.scss css/main.min.css --style=compressed --watch
   ```

3. Редагуйте файли в `scss/` — CSS оновлюватиметься автоматично.

> При пуші в `main` GitHub Actions автоматично компілює SCSS і комітить оновлений `css/main.min.css`.

## Структура проєкту

```
Project_Bakery/
├── .github/workflows/      # GitHub Actions для автокомпіляції SCSS
├── css/                    # Скомпільовані стилі
│   └── main.min.css
├── fonts/                  # Шрифт Poppins (woff2)
├── images/                 # Зображення, іконки (SVG-спрайт), лого
├── js/                     # JavaScript
│   ├── modal.js
│   └── mobile-menu.js
├── scss/                   # Джерельні SCSS-файли
│   ├── components/         # Кнопки, картки, інпути
│   ├── layouts/            # Секції: header, hero, footer, modal тощо
│   ├── utils/              # Змінні, шрифти, міксини, тексти
│   └── main.scss
├── index.html
└── README.md
```

## Дизайн

- **Кольорова палітра:** теплі коричневі та зелені відтінки, що асоціюються з пекарнею та натуральністю.
- **Шрифт:** [Poppins](https://fonts.google.com/specimen/Poppins) (300, 400, 600, 900).
- **Адаптивність:** mobile-first підхід, точки перелому — 480px, 768px, 1024px.
