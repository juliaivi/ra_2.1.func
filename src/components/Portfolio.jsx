import React from "react";
import { useState } from "react";
import { arrProjects } from './data';
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";


export default function Portfolio() {
    const filters = ['All', 'Websites', 'Flayers', 'Business Cards']; // список фильтров
    const [state, setCount] = useState('All'); // текущее состояние 'All'

    function onSelectFilter(props) {
        setCount(props.target.textContent);
    }

    let projects = []; // массив для отфильтрованных данных
    if (state === 'All') {
        projects = [...arrProjects]; // выводит копию всех данных
    } else { // проходимся и сравниваем состояние
        for (let i = 0; i < arrProjects.length; i++) {
           if (arrProjects[i].category === state) {
            projects.push(arrProjects[i]);
           }
        }
    }
        // Изображения самих проектов отображаются компонентом без состояния ProjectList, которому от Portfolio мы передаём список проектов — в свойство projects.
        // Отображение проектов — это единственная ответственность компонента ProjectList.
        
        // передаем в Toolbar
        // filters — список фильтров, название которых совпадает с категориями проектов;
        // selected — активный фильтр;
        // onSelectFilter(filter) — обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра.
     return (
        <>
            <Toolbar filters={filters} selected={state} onSelectFilter={onSelectFilter} />
            <ProjectList projects={projects} />
        </>
    )



}