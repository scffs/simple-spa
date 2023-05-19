# Simple SPA App

## Task

### Necessary to use
- React
- React-bootstrap
- React-router
- Axios
- Redux
- Redux-saga
- Git

### Task Description
- Список постов (главная страница)
  - Тест
  - Автор
  - Комментарии
    - email
    - текст
- Обо мне
- Подробности о юзере

### Known problems
- Запросы не оптимизированы, по хорошему бы какое-то кеширование прикрутить и окей (в тулките есть `RTK Query`, но я с ним еще не работал)
- Дизайн оставляет желать лучшего
- Возможны лишние ререндеры, может потребоваться что-то типа `useMemo` / `useCallback`
