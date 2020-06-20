# Старт проекта
1. Установите [NodeJS](https://nodejs.org/).

2. Установите Pug:
```
npm i pug -g
```

3. Установите GulpJS:
```
npm i gulp -g
```

4. Склонируйте проект:
```
git clone git@gitlab.com:teslaroom/frontend.git
```

5. Установите модули:
```
npm i
```

# Основные команды

## Gulp

### Запуск на Unix-системах
Запустить с отслеживанием. С поддержкой карт для JS и Stylus.
```
npm start
```

Сделать сборку для продакшена. Все минимизируется и убирается лишнее.
```
npm run build
```
---

### Запуск на Windows
Запустить с отслеживанием. С поддержкой карт для JS и Stylus.
```
npm run start_win
```

Сделать сборку для продакшена. Все минимизируется и убирается лишнее.
```
npm run build_win
```
---

## Конфиг
Для изменения настройки путей следует создать файл `config.user.json` на основе файла `config.user.sample.json` и переопределить необходимые пути. Значение `startServer` определяет нужно ли запускать локальный сервер при сборке проекта с отслеживанием.

---

## Шрифты
Есть автоматическое подключение шрифтов. Для подключение шрифт в формате otf, ttf, woff или woff2 нужно положить в папку fonts и дать ему название в формате **ИмяШрифта-начетаниеШрифта-стиль**. Например:
- OpenSans
- OpenSans-bold
- OpenSans-italic
- OpenSans-800-italic


# Структура папок и файлов
```
├── app/                       # Исходники
│   ├── blocks/                # Блоки
│   │   └── block/             # Блок
│   │       ├── block.jade     # Разметка блока
│   │       ├── block.js       # Скрипт блока
│   │       └── block.styl     # Стили блока
│   ├── favicons/              # Фавиконки
│   ├── fonts/                 # Шрифты
│   ├── images/                # Изображения
│   ├── pages/                 # Страницы
│   │   └── index.jade         # Разметка страницы
│   ├── scripts/               # Скрипты
│   │   └── libs/              # Подключаемые библиотеки
│   │   └── app.js             # Главный скрипт
│   └── styles/                # Стили
│       ├── helpers/           # Помощники
│       │   ├── global.styl    # Глобальные стили сайта
│       │   ├── mixins.styl    # Примеси
│       │   ├── optimize.styl  # Сброс стилей и фиксы
│       │   └── variables.styl # Переменные
│       ├── libs/              # Подключаемые библиотеки
│       └── app.styl           # Главный стилевой файл, в него инклюдятся остальные
├── dist/                      # Сборка (автогенерация)
│   ├── assets/                # Подключаемые ресурсы
│   │   ├── images/            # Изображения
│   │   ├── scripts/           # Скрипты
│   │   └── styles/            # Стили
│   └── index.html             # Страница
├── .gitignore                 # Список исключённых файлов из Git
├── gulpfile.js                # Настройка автоматизации
├── package.json               # Список модулей и прочей информации
└── readme.md                  # Документация шаблона
```
