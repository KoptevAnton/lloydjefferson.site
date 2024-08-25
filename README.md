![100](https://github.com/user-attachments/assets/d3b44210-78fb-4e0c-83c4-fbc172c94673)

## Опис сайту: 🔗 [Lloydjefferson](https://lloydjefferson.site) — це сучасний веб-сайт, створений для представлення особистих та професійних проектів.


### Опису переваг:

• Максимальна доступність з підтримкою різних розмірів і типів дисплеїв від 270px.

• Оптимізована графіка з різними форматами зображень і роздільною здатністю.

• Підтримка кількох кольорових тем із збереженням у Local Storage.

• Вдосконалена естетика з анімованими фоновими зображеннями(за рахунок css) і плавним відображенням.

• Покращений юзер-експірієнс з ефективною навігацією по сайту.

• Підвищена ефективність та продуктивність застосунку.

• Використання Sass і методології BEM для організації CSS.

• Адаптивна верстка для забезпечення комфортного перегляду на різних пристроях.


## Загальна інформація про проєкт та команду розробників

Цей проєкт є командним проєктом студентів GoIT 106-го потіку курсу FullStack
Developer, частина JavaScript, група №5

Учасники проєкту:

- **Team Lead** - [Антон Коптєв](https://github.com/KoptevAnton)
- **Scrum Master** - [Сергій Решетняк](https://github.com/ReshetS)
- [Артем Кандиба](https://github.com/kandyy9)
- [Вадим Котляров](https://github.com/Rourkes)
- [Ксенія Борисова](https://github.com/Kseniya-Igorivna)
- [Олександр Стельмах](https://github.com/alex-stelmakh)
- [Тетяна Дубовик](https://github.com/TetianaDubovyk1)
- [Юлія Боіштян](https://github.com/Juliia-Boi)
- [Юлія Дмитрук](https://github.com/julia-dm)

## Інформація для розробників

### Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

### Файли і папки

- Файли розмітки компонентів сторінки повинні лежати в папці `src/partials` та
  імпортуватись до файлу `index.html`. Наприклад, файл з розміткою хедера
  `header.html` створюємо у папці `partials` та імпортуємо в `index.html`.
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів
  сторінок. Наприклад, для `index.html` файл стилів називається `index.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при
  деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

### Деплой

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту.

#### Статус деплою

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки чи деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікні, що випадає, перейти за посиланням `Details`.

#### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою [https://lloydjefferson.site](https://lloydjefferson.site)

Якщо відкриється порожня сторінка, переконайся, що у вкладці `Console` немає
помилок пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**).

### Як це працює

1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.
