## 📖 Описание проекта

Этот проект представляет собой адаптивный корпоративный сайт, созданный с нуля на `React`.
Особое внимание уделено:

- **Скорости загрузки**

- **Оптимизации под поисковые системы**

- **Адаптивности под разные устройства (подход Desktop-First)**

- **Доступности пользователей по стандарту A11Y**

- **Качественной структуре кода и удобству масштабирования проекта**

---

## 📸 Скриншоты проекта

Ниже представлены основные страницы проекта. Все страницы разработаны в едином стиле, адаптированы под разные устройства и оптимизированы для быстрой загрузки.

### 🖥️ Главная страница

- ➤ Блок 'О компании'

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937159/aboutSectionBig_vjp7dc.png" alt="Блок 'О наc' на большом экране" />

- **Реализованный функционал:**

  - При клике на кнопки "Рассчитать цену" или "Заказать звонок" открывается модальная форма отправки сообщения. Для устройств <768px — адаптивное бургер-меню.

<p>
  <img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937161/callbackForm_gf4e9g.png" alt="callbackForm" width = '48%' />
  <img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937160/burgerOnAbout_rnnmzo.png" alt="Блок 'О наc' на мобильном" width = '48%' />
</p>
<p>
  <img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937159/burgerMenu_pp35hg.png" alt="Бургер-меню с закрытой навигацией на мобильном" width = '48%' />
  <img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937159/burgerMenu1_un8hzb.png" alt="Бургер-меню с открытой навигацией на мобильном" width = '48%' />
</p>

---

- ➤ Блок 'Товары'

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937162/productsSectionBig_grskm0.png" alt="Блок 'Товары' на большом экране"/>

- **Реализованный функционал:**

  - Переключение товаров по категориям с помощью кнопок-табов.

  - Бесконечная карусель с подписью товара и с миниатюрами.

  - Возможность взаимодействия и просмотра товаров при помощи клавишы Tab и закрытия модального окна при помощи клавиши Esc для людей с ограниченными возможностями.

  - Невозможность выйти за пределы модального окна при переключения с помощью клавиши Tab при помощи `React-Focus-Lock`.

  - Оптимизированная загрузка изображений и данных через `Cloudinary`.

<p>
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937338/productsItem1_azpycx.png" alt="Открытая карусель в блоке 'Товары' на мобильном экране" width = '48%' />
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937338/productsItem2_ubxhnm.png" alt="Открытая карусель в блоке 'Товары' на мобильном экране" width = '48%' />
</p>

---

- ➤ Блок 'Примеры душевых перегородок в интерьере'

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937160/examples_j1gusm.png" alt="Блок 'Примеры душевых перегородок в интерьере' на большом экране"/>

- **Реализованный функционал:**

  - Бесконечная карусель с миниатюрами.

  - Возможность взаимодействия и просмотра товаров при помощи клавишы Tab и закрытия модального окна при помощи клавиши Esc для людей с ограниченными возможностями.

  - Невозможность выйти за пределы модального окна при навигации с помощью клавиши Tab при помощи `React-Focus-Lock`.

  - Реализована ленивая подгрузка изображений через кнопку "Загрузить еще фото".

  - Оптимизированная загрузка изображений и данных через `Cloudinary`.

<p>
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937160/examplesItem1_qptpo3.png" alt="Открытая карусель в блоке 'Примеры душевых перегородок в интерьере'" width = '48%' />
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937161/examplesItem2_k5ihbv.png" alt="Открытая карусель в блоке 'Примеры душевых перегородок в интерьере'" width = '48%' />
</p>

---

### 🖥️ Страница "Портфолио"

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937162/portfoloPage_ftqfi1.png" alt="Страница 'Портфолио' на большом экране"/>
<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937161/portfolioPage1_zn4efs.png" alt="Страница 'Портфолио' на большом экране"/>

- **Реализованный функционал:**

  - Бесконечная карусель и слайдер с миниатюрами.

  - Поддержка Tab-навигации\*\* и закрытия модалок по Esc для доступности.

  - Блокировка фокуса внутри модального окна с помощью `React Focus Lock`.

  - Ленивая подгрузка изображений по кнопке "Загрузить ещё".

  - Оптимизированная загрузка изображений и данных через `Cloudinary`.

<p>
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937161/portfolioPageItem1_msnsz8.png" alt="Изображение карточки выполненной работы на странице 'Портфолио'" width = '48%' />
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937162/portfolioPageItem2_y4mx43.png" alt="Открытая карусель на странице 'Портфолио'" width = '48%' />
</p>

---

### 🖥️ Страница "Полезная информация"

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937160/articlePage_jcgzid.png" alt="Страница 'Полезная информация' на большом экране"/>

- **Реализованный функционал:**

  - Реализован виджет для связи: заказ обратного звонка, звонок, переход в каталог и к примерам перегородок.

<p>
  <img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937160/articlePageItem1_faytrz.png" alt="Виджет 'Contacts Widget'" width = '48%' />
  <img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937158/articlePageItem2_lzaaez.png" alt="callBackForm при клике на кнопку 'заказать обратный звонок' в виджете 'Contacts Widget'" width = '48%' />
</p>

---

### 🖥️ Страница "Контакты"

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937161/contactsPage_cjddar.png" alt="Страница 'Контакты' на большом экране"/>

- **Реализованный функционал:**

  - Реализован виджет 'Контакты' с помощью которого можно увидеть время работы компании,позвонить по номеру телефона, написать на почту или задать вопрос в социальных сетях.

  - Добавлена форма отправки сообщения на почту.

  - Пользователь перенаправляется на страницу с результатом отправки формы (успешно/ошибка).

<p>
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937158/contactsPageItem1_yxddon.png" alt="Виджет 'Contacts'" width = '48%' />
	<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937158/contactsPageItem2_virjrh.png" alt="callBackForm" width = '48%' />
</p>

---

### 🖥️ Страница "Успешной отправки сообщения на почту компании"

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937162/successfulPage_oedcfo.png" alt="Страница 'Успешной отправки сообщения' на большом экране"/>

---

### 🖥️ Страница "Неудачной отправки сообщения на почту компании"

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937162/unsuccessfulPage_cafq2d.png" alt="Страница 'Неудачной отправки сообщения' на большом экране"/>

---

### 🖥️ Страница "404"

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937158/404_aduymo.png" alt="Страница 404 на большом экране"/>

---

### При ошибке запроса JSON с сервера отображается стильный fallback-блок вместо сбоя сайта.

<img src="https://res.cloudinary.com/dkcilxezg/image/upload/v1745937161/noContentBlock_hxc8fi.png" alt="Оповещение о ошибки получения контента"/>

---

## 🚀 Deploy

[Посмотреть сайт в действии →](https://w0x3r.github.io/Showers-Gomel/)

---

## 🛠 Технологии проекта

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Context](https://img.shields.io/badge/React_Context-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![React Helmet](https://img.shields.io/badge/React_Helmet-191919?style=for-the-badge&logo=react&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

### 🔥 Ключевые особенности проекта

- Современная сборка на `Vite + React.`

- Используется `React.lazy` и `Suspense` для ленивой загрузки компонентов и оптимизации размера бандла.

- `SCSS`-модули с использованием переменных, миксинов, шаблонных селекторов и вложенности.

- `Desktop-first` подход к вёрстке.

- Проект структурирован по компонентной архитектуре.

- Анимации вынесены в отдельный `SCSS`-файл.

- Структурированные данные — хранятся в папке data, подгружаются через `.map().`

- Повторно используемые виджеты и утилиты вынесены в отдельные компоненты и папки.

- Используется `React Context` для глобального управления состоянием.

- SEO с помощью `React Helmet`.

- Используется `React Snap` для предрендеринга (SSG), чтобы улучшить SEO и скорость загрузки.

- Адаптивная и доступная верстка (`a11y`): aria-атрибуты, стили фокуса, клавиатурная навигация, поддержка Esc и `Focus Lock`.

- Кроссбраузерная совместимость (поддержка всех современных браузеров).

- Подключена базовая аналитика для отслеживания событий на сайте.

---

## ✨ Функционал проекта

- Переключение товаров по категориям с помощью кнопок-табов.

- Бесконечная карусель и слайдер с миниатюрами товаров и подписями.

- Ленивая подгрузка контента ("Показать больше") и изображений (Lazy Loading).

- Семантическая `HTML5`-разметка и доступность:

  - Навигация с клавиатуры (Tab), стили фокуса.

  - Закрытие модальных окон по клавише Esc.

- Хлебные крошки для удобной навигации по сайту.

- Виджеты связи:

  - На всех устройствах: звонок, обратный звонок, быстрый переход к ключевым разделам.
  - Для <768px: Telegram и звонок.

- Полная валидация формы (обязательные поля, email, телефон).

---

## 📈 SEO и оптимизация

- Уникальные `title`, `meta description`, `keywords` и Open Graph-теги через React Helmet.

- Микроразметка `Schema.org` для лучшей индексации.

- Генерация `sitemap.xml` и `robots.txt`.

- Пререндеринг через `React Snap` для улучшения скорости первой отрисовки.

- Оптимизация изображений и ресурсов через `Cloudinary` и ленивую загрузку.

- Минификация и оптимизация сборки.

- Все изображения переведены в современный формат `WebP` для уменьшения веса и ускорения загрузки.

- Предзагрузка критических изображений через `<link rel="preload">`.

- Подключены современные шрифты в формате `woff2`, очищенные от лишних символов и языков для минимизации размера, а также предзагрузка через `<link rel="preload">` для ускоренной отрисовки текста.

- Критически важные стили подключаются как инлайново в `<head>`, так и отдельным `SCSS`-файлом для быстрой отрисовки первого экрана (используется подход `Critical CSS`).

---

## 🧪 Сравнение с конкурентами

| Критерий                         | Мой проект ✅       | Типичный сайт конкурентов ❌ |
| -------------------------------- | ------------------- | ---------------------------- |
| ⚡ Скорость загрузки (Desktop)   | 90–100 баллов       | 50–70 баллов                 |
| 🧩 Микроразметка Schema.org      | ✅ Полная           | ❌ Отсутствует или частично  |
| 🕸️ OpenGraph (соц. предпросмотр) | ✅Поддерживается    | ❌ Часто отсутствует         |
| ♿ Доступность (a11y)            | ✅ Реализована      | ❌ Не реализована            |
| 🖼️ Lazy loading изображений      | ✅ Да               | ❌ Нет                       |
| 🔍 Sitemap и robots.txt          | ✅ Генерируются     | ❌ Отсутствуют               |
| 🔑 aria-атрибуты, Tab-фокус      | ✅ Полная поддержка | ❌ Не реализовано            |

---

### 📈 Метрики производительности и SEO

| Метрика                        | Значение (Mobile) |
| ------------------------------ | ----------------- |
| ⏱️ Скорость загрузки           | 95–100 баллов     |
| 🔍 SEO                         | 100/100           |
| ♿ Доступность (Accessibility) | 96-100/100        |
| 🧪 Best Practices              | 100/100           |

Протестировано через Google Lighthouse и PageSpeed Insights

![Lighthouse Desktop](https://res.cloudinary.com/dkcilxezg/image/upload/v1745937162/lightHouse_cbkj8q.png)
![PageSpeed Desktop](https://res.cloudinary.com/dkcilxezg/image/upload/v1745937163/pageSpeedInsights_ttkjqf.png)
![Rich Results Test](https://res.cloudinary.com/dkcilxezg/image/upload/v1745937158/googleRichResults_trsdpa.png)

---

## 🛠 Установка проекта

1. Клонировать репозиторий:

```bash
 git clone https://w0x3r.github.io/Showers-Gomel/
```

2. Перейти в папку проекта

```
 cd Showers-Gomel
```

3. Установить зависимости

```
 npm install
```

4. Запустить локальный сервер

```
npm run dev
```
