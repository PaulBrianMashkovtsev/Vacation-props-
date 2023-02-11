import React from 'react';
import Categories from "../usa/Categories";
import {v4 as uuidv4} from 'uuid';
import Boston from "../usa/img/Boston.jpg";
import Bronx from "../usa/img/Bronx.jpg";
import brooklyn from "../usa/img/brooklyn.jpg";
import Clearwater from "../usa/img/Clearwater.webp";
import Dallas from "../usa/img/Dallas.webp";
import Huston from "../usa/img/Huston.jpg";
import Keywest from "../usa/img/Keywest.jpg";
import manhattan from "../usa/img/Manhattan.jpg";
import Miami from "../usa/img/Miami.jpg";
import Oklahoma from "../usa/img/Oklahomacity.jpg";
import Queens from "../usa/img/Queens.jpg";
import Salem from "../usa/img/Salem.jpg";
import Statenisland from "../usa/img/Statenisland.jpg";

function Clearance () {

    const expense = [
        {
            id: uuidv4(),
            img:  Boston,
            city: "Boston",
            state: "Massachusetts",
            sale: ' ' + 45 + '%',
        },
        {
            id: uuidv4(),
            img: Bronx,
            city: "Bronx",
            state: "NY",
            sale: ' ' + 20 + '%',
        },
        {
            id: uuidv4(),
            img: brooklyn,
            city: "Brooklyn",
            state: "NY",
            sale: ' ' + 20 + '%',
        },
        {
            id: uuidv4(),
            img: Clearwater,
            city: "Clearwater",
            state: "Florida",
            sale: ' ' + 75 + "%",
        },
        {
            id: uuidv4(),
            img: Dallas,
            city: "Dallas",
            state: "Texas",
            sale: ' ' + 15 + "%",
        },
        {
            id: uuidv4(),
            img: Huston,
            city: "Huston",
            state: "Texas",
            sale: ' ' + 15 + "%",
        },
        {
            id: uuidv4(),
            img: manhattan,
            city: "Manhattan",
            state: "NY",
            sale: ' ' + 20 + "%",
        },
        {
            id: uuidv4(),
            img: Miami,
            city: "Miami",
            state: "Florida",
            sale: ' ' + 75 + "%",
        },
        {
            id: uuidv4(),
            img: Oklahoma,
            city: "Oklahoma city",
            state: "Oklahoma",
            sale: ' ' + 81 + "%",
        },
        {
            id: uuidv4(),
            img: Queens,
            city: "Queens",
            state: "NY",
            sale: ' ' + 20 + "%",
        },
        {
            id: uuidv4(),
            img: Salem,
            city: "Salem",
            state: "Massachusetts",
            sale: ' ' + 45 + "%",
        },
        {
            id: uuidv4(),
            img: Statenisland,
            city: "Staten Island",
            state: "NY",
            sale: ' ' + 20 + "%",
        },
        {
            id: uuidv4(),
            img: Keywest,
            city: "Key West",
            state: "Florida",
            sale: ' ' + 75 + "%",
        }
    ]

    const categories = [
        {
            id: uuidv4(),
            state: "NY",
        },
        {
            id: uuidv4(),
            state: "Florida",
        },
        {
            id: uuidv4(),
            state: "Texas",
        },
        {
            id: uuidv4(),
            state: "Oklahoma",
        },
        {
            id: uuidv4(),
            state: "Massachusetts",
        }
    ]


    return (
        <div>

            <h1>Sales!!!</h1>

            <div className="row align-items-start">
                {categories.map(el =>

                    <Categories key={el.id} categories={el}
                                expense={expense}
                    />
                )
                }


            </div>
        </div>
    );
}
export default Clearance;