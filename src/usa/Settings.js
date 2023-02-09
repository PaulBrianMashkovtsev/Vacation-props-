import React from 'react';
import button from 'react-bootstrap/button';


const Settings = (props) => {
    return (


    <div className="Card">

        <div className="p-3 mb-2 bg-info-subtle text-info">

            <div className="Card-body">
                <div class="p-3 mb-2 bg-warning-subtle text-info">
                    <h5 className="Card-title">Sale{props.expense.sale}</h5>
                    <p><a href="#" class="text-danger">
                        <p className="Card-text">{props.expense.state}</p>
                    </a></p>
                    <p><a href="#" class="text-success">
                        <p className="Card-text">{props.expense.city}</p>
                    </a></p>
                    <button href='#' class="btn btn-primary"> Buy now!!!</button>
                </div>
            </div>
        </div>

    </div>


)
    ;
};

export default Settings;