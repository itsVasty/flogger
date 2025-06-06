# FROM python:3.11-slim

# WORKDIR /app

# COPY pyproject.toml poetry.lock* /app/

# RUN pip install poetry && poetry install --no-root

# COPY . /app

# EXPOSE 8000

# CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
# Use a slim Python image

FROM python:3.11-slim

WORKDIR /app

RUN pip install poetry

RUN poetry config virtualenvs.create false

COPY pyproject.toml poetry.lock* ./
RUN poetry install --no-root --no-interaction

COPY . .

# Run FastAPI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
