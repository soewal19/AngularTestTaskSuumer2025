# Text Analyzer Web App

## Project Description

Text Analyzer is a modern Angular web application for analyzing and editing text with interactive synonym replacement, word/character statistics, and clipboard support. It features a clean UI (Angular Material + Tailwind CSS), e2e tests, Docker support, and CI/CD integration for Azure Web App.

## Project Folder Structure (Tree)

```
TestTaskAngular/
├── text-analyzer/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   └── text-analyzer/
│   │   │   │       ├── text-analyzer.ts
│   │   │   │       └── text-analyzer.html
│   │   │   └── services/
│   │   │       └── synonym.ts
│   │   └── environments/
│   │       └── environment.ts
│   ├── app.config.ts
│   ├── Dockerfile
│   ├── nginx.conf
│   └── ...
├── e2e/
│   └── text-analyzer.cy.ts
├── CI_CD/
│   └── ...
├── .azure-pipelines.yml
├── README.md
└── ...
```

## Key Files Description (English)

- **text-analyzer/text-analyzer.ts** — Main Angular component. Contains all logic for text input, synonym fetching and replacement, statistics, clipboard operations, and uses Angular signals for state management.
- **text-analyzer/text-analyzer.html** — UI template: textarea for input, action buttons, synonym list, and statistics display.
- **services/synonym.ts** — Angular service for interacting with the Datamuse API to fetch synonyms for selected words or phrases.
- **environments/environment.ts** — Environment variables for the Angular app (e.g., API base URL).
- **app.config.ts** — Application configuration, providers, and module setup for Angular.
- **e2e/text-analyzer.cy.ts** — Cypress end-to-end tests covering all main user scenarios and flows.
- **Dockerfile, nginx.conf** — Dockerfile for building the production container and nginx.conf for serving the Angular app as a static site.
- **.azure-pipelines.yml, CI_CD/** — Azure Pipeline configuration and CI/CD scripts for automated build, test, and deployment to Azure Web App.

---

## English

### Features
- Enter and edit text
- Get synonyms for selected words/phrases (Datamuse API)
- Replace selected word/phrase with synonym
- Character and word count
- Copy all text to clipboard
- Modern UI (Angular Material)
- Docker & Azure CI/CD ready

### Usage
1. Clone the repo
2. `npm install`
3. `ng serve` (dev) or build Docker image
4. For Docker: `docker build -t text-analyzer . && docker run -p 4200:80 text-analyzer`

### Environment variables
- `API_BASE_URL` — Datamuse API base URL (default: https://api.datamuse.com)

### CI/CD
- Azure Pipelines: see `.azure-pipelines.yml`

---

## Русский

### Возможности
- Ввод и редактирование текста
- Получение синонимов для выделенных слов/фраз (Datamuse API)
- Замена выделенного слова/фразы на синоним
- Подсчёт символов и слов
- Копирование всего текста в буфер обмена
- Современный UI (Angular Material)
- Docker и Azure CI/CD

### Использование
1. Клонируйте репозиторий
2. `npm install`
3. `ng serve` (для разработки) или сборка Docker-образа
4. Для Docker: `docker build -t text-analyzer . && docker run -p 4200:80 text-analyzer`

### Переменные окружения
- `API_BASE_URL` — базовый URL Datamuse API (по умолчанию: https://api.datamuse.com)

### CI/CD
- Azure Pipelines: см. `.azure-pipelines.yml` 



### Key Files Description

- **src/app/components/text-analyzer/text-analyzer.ts**  
  Main component. Handles text input, selection, synonym fetching, replacement, statistics, and clipboard. Uses Angular signals for state.

- **src/app/components/text-analyzer/text-analyzer.html**  
  Template for the main UI: textarea, buttons, synonym list, stats.

- **src/app/services/synonym.ts**  
  Service for interacting with the Datamuse API to fetch synonyms.

- **src/environments/environment.ts**  
  Stores environment variables (e.g., API base URL).

- **src/app/app.config.ts**  
  Angular app configuration, providers, and module setup.

- **e2e/text-analyzer.cy.ts**  
  Cypress end-to-end tests for all main user flows.

- **Dockerfile, nginx.conf**  
  For containerization and static serving in production.

- **.azure-pipelines.yml, CI_CD/**  
  CI/CD pipeline and scripts for Azure deployment.

--- 
