FROM python:3.11-slim

WORKDIR /app

RUN pip install --no-cache-dir -U pip

COPY backend/pyproject.toml /app/pyproject.toml

RUN pip install --no-cache-dir .

COPY backend /app

CMD ["sh", "-lc", "alembic upgrade head && uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]