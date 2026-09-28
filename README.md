# product-assistant-ai

### Vite не может найти установленный npm-пакет

Если зависимость указана в `frontend/package.json`, но Vite сообщает
`Failed to resolve import`, обновите зависимости внутри Docker volume:

из корня проекта вызовите:
```bash
docker compose -f compose.dev.yaml exec frontend npm install
docker compose -f compose.dev.yaml restart frontend