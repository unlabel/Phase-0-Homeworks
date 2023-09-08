# Шаблон главной страницы

При разработке сайта правильным выбором задачи первого этапа является создание шаблона (layout) - это позволит сразу понимать структуру страницы, особенности блоков и их стили.
Давай создадим стандартный шаблон для твоих будущих крутых проектов.


### Release 0. Подготовка

- Создай HTML-документ с именем index.html и следующим содержимым:
```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Positioning Exercise</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Header</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <main>
        <h2>Main Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, ipsum a blandit viverra, urna elit placerat quam, et pellentesque elit nulla id risus. Nam auctor quam in nisi fringilla, non malesuada elit tincidunt. Aliquam erat volutpat.</p>
    </main>
    <aside>
        <h3>Aside</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, ipsum a blandit viverra, urna elit placerat quam, et pellentesque elit nulla id risus. Nam auctor quam in nisi fringilla, non malesuada elit tincidunt. Aliquam erat volutpat.</p>
    </aside>
    <footer>
        <h4>Footer</h4>
    </footer>
</body>
</html>
```
- Создай файл стилей CSS с именем `style.css` и подключи его к основному файлу 

### Release 1. Позиционирование блоков

Позиционируйте следующие элементы:

- `header` должен всегда находиться вверху экрана (даже при прокрутке), занимать всю его ширину и иметь высоту 50px
- `nav` должен находиться слева, занимать 25% ширины экрана и занимать всю доступную высоту экрана
- `main` должен находиться правее nav, занимать 50% ширины экрана и занимать всю доступную высоту экрана
- `aside` должен находиться правее main, занимать 25% ширины экрана и занимать всю доступную высоту экрана
- `footer` должен находиться внизу экрана, занимать всю ширину экрана и иметь высоту 50px
- Добавь рамку вокруг каждого элемента, чтобы визуально отобразить их позиционирование
- Добавь отступы и стили по желанию, чтобы содержание блоков смотрелось гармонично

Готово? Делай `Pull request`!
