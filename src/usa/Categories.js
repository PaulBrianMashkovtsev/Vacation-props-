import React from 'react';
import Settings from "./Settings";


const Categories = (props) => {
    return (

        <div className="col">

            <h4>{props.categories.state}</h4>
            {props.categories.expense}

            {props.expense.filter(el =>
                props.categories.state === el.state)
                .map(el =>
                    <Settings key={el.id} expense={el}/>
                )}

            {props.expense.filter(el =>
                props.expense.img===el.img)
                .map(el =>
                    <Settings key={el.id} expense={el}/>
                )}





        </div>

    );
};

export default Categories;