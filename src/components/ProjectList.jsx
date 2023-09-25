import React from "react";
import PropTypes from 'prop-types';

// Изображения самих проектов отображаются компонентом без состояния ProjectList, которому от Portfolio мы передаём список проектов — в свойство projects.
// Отображение проектов — это единственная ответственность компонента ProjectList.
export default function ProjectList({projects}) {
    if (projects.length === 0 ) {
        return null;
    }

    return (
        <div className="gallery">
            {projects.map((el, index) => <div key={index} className="galery__img"><img src={el.img} alt={el.category} /></div>)}
        </div>
    )
}

// проверка на тип
ProjectList.propTypes = {
    projects: PropTypes.array,
}

