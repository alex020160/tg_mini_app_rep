Telegram Mini App – Pet Care Tracker

Backend API для Telegram Mini App, предназначенного для отслеживания питомцев и событий ухода за ними (вакцинации, визиты к ветеринару, обработки и т.д.).

Backend реализован на FastAPI с использованием PostgreSQL, SQLAlchemy и Alembic.

Основные возможности API
Пользователи
авторизация через Telegram Mini App
JWT-аутентификация
Питомцы
создание питомца
редактирование данных питомца
удаление питомца
список питомцев пользователя
События
создание события
редактирование события
удаление события
отметка выполнения
фильтрация событий
Dashboard

Агрегированный endpoint для главного экрана:

пользователь
список питомцев
ближайшее событие каждого питомца
ближайшие события пользователя
Календарь

API для календарного экрана:

события по месяцу
события конкретного дня
Технологии

Backend:

Python 3.11
FastAPI
SQLAlchemy 2
Alembic
PostgreSQL
JWT authentication
Docker / Docker Compose

Frontend:

Telegram Mini App
React Native (Web)

Установка и запуск

1. Клонировать репозиторий
   git clone <repo-url>
   cd telegram_mini_app

2. Создать файл .env

- в папке backend:
  cp backend/.env.example backend/.env

пример:
APP_NAME=TG MiniApp API
ENV=dev

DATABASE_URL=postgresql+psycopg://postgres:postgres@db:5432/tg_miniapp

JWT_SECRET=supersecret
JWT_ALG=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60

TELEGRAM_BOT_TOKEN=your_bot_token

CORS_ORIGINS=http://localhost:3000

3. Запустить проект
   docker compose up --build

После запуска API будет доступен по адресу:
http://localhost:8000

Swagger документация:
http://localhost:8000/docs

Работа с базой данных:
-Применить миграцию
docker compose exec backend sh -lc "cd /app && alembic upgrade head"

-Создать новую миграцию
docker compose exec backend sh -lc "cd /app && alembic revision --autogenerate -m 'migration name'"
