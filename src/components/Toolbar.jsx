import React from "react";
import PropTypes from 'prop-types';

// filters — список фильтров, название которых совпадает с категориями проектов;
// selected — активный фильтр;
// onSelectFilter(filter) — обработчик события, который реагирует на выбор пользователем одного из фильтров, обработчик принимает один аргумент — строку с названием фильтра.

export default function Toolbar({filters, selected, onSelectFilter}) {
    if (filters.length  === 0) {
        return null;
    }

    return (
        <div className="toolbar">
            {filters.map((el, index) => {
                return (
                    <button key={index} className={el === selected ? 'filter-button-selected' : '' } onClick={onSelectFilter}>{el}</button>
                )
            })}
        </div>
    )
}
// проверка на тип
Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func,
}
