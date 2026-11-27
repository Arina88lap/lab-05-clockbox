# Clockbox

Express-приложение возвращает `Hello World!` на `/` и статус JSON на `/health`.

```sh
npm ci
npm test
npm start
```

```sh
docker build -t arina-vis-clockbox:lab5 .
docker run --rm -p 127.0.0.1:8405:4000 arina-vis-clockbox:lab5
```

## GitHub Actions и Docker Hub

До первого push в `main` создайте репозиторий `vis-clockbox` в своём пространстве имён Docker Hub. В настройках репозитория GitHub откройте **Secrets and variables → Actions** и добавьте `DOCKERHUB_USERNAME` и `DOCKERHUB_TOKEN`. Токен Docker Hub должен иметь право записи в выбранный репозиторий.

Workflow сначала запускает тесты. После их прохождения push в `main` или ручной запуск с ветки `main` публикует образ Linux для `amd64` и `arm64` с тегами `latest` и SHA коммита. В pull request выполняются только тесты. После публикации проверьте платформы образа через `docker buildx imagetools inspect <DOCKERHUB_USERNAME>/vis-clockbox:latest`.
