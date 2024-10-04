<h1 align="center">Shape Editor</h1>

### О приложении:

В этом приложении реализовано добавление, и возможность перемещение фигур на холсте.

### О проекте:

Shape Editor построен на классической архитектуре React-а. Сборщик проекта Vite. Фигуры располагаются на Canvas. Используется React Context для избежания проброса пропсов. Данное приложение выполнено с возмоностью простой масштабируемости и т.о. комопнент ShapeFactory отвечает за создание фигур и вся логика работы с фигурами заключена в нём. Холст (CanvasWindow) только принимает любое количество фигур и торисовывает их. Для улучшения производительости компонент CanvasWindow использует мемоизацию React.memo, а фигуры при создании получают уникальный id, что позволяет реакту идентифицировать только новые фигуры и не перерисовывать уже имеющиеся.

Типизация фигур завязана на моковый объект данных и все возможные типы фигур читаются из этого файла. Это позволяет не думать о возможных типах, которые могут добавится при масштабировании.

### Используемый стек

![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
