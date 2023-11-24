# UI KIT

Репозиторий для разработки библиотеки компонентов в рамках it-day.

### Настройка окружения

0. Если на машине не настроен `git`, выполнить команды `git config --global user.name "Ваше имя"` и `git config --global user.email "Ваш email"`
1. Склонировать репозиторий `git clone https://github.com/ithubspb/ui-longread.git`
2. Открыть директорию в редакторе кода
3. На всякий случай изменить имя локальной главной ветки `git branch -M main` 
4. Установить зависимости `npm i` и `npm i --dev`
5. При возникновении ошибок установить недостающие пакеты
6. Запустить среду разработки через `npm run lib:dev`
7. Для перехода в песочницу используйте адрес вида `http://localhost:5173/sandbox/`

### Флоу разработки

1. Откликнуться на соответствующий `issue`, оставив под ним комментарий
2. Когда вас прикрепили к задаче, на всякий случай обновить главную ветку `git checkout main` и `git pull` 
3. Создать ветку командой `git checkout -b Название ветки`, где название ветки в идеале это [N]-[feature/fix]-[краткое_описание], `2-fix-button-paddings`
4. Создать директорию под компонент `lib`, например `lib\Button`, создать в ней файлы `lib\Button\Button.jsx` и `lib\Button\style.css`
5. Вести разработку, проверяя отображение компонента внутри `sandbox`, временами фиксируя изменения через `git commit`
6. По завершению разработки необходимо сделать ребейс от главной ветки командой `git pull origin main --rebase`, разрешить конфликты, после чего выполнить пуш в репозиторий командой `git push -u origin Название ветки`, ввести токен (указан ниже)
7. Далее создаем `pull-request` на гитхабе на соответствующей вкладке, ждем одобрения или комментариев тимлида
8. Если всё ок, переключаемся на главную ветку `git checkout main`, ждем следующих задач

### Токен

`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`

### Технический стэк:
  - react 18
  - vite + swc
  - eslint
  - ladle
