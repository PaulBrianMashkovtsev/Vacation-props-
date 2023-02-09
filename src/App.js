import {v4 as uuidv4} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from "./usa/Categories";
import React from "react";





function App() {
    const expense = [
        {

            id: uuidv4(),
            city: "Boston",
            state: "Massachusetts",
            sale: ' ' + 45 + '%',
        },
        {
            id: uuidv4(),
            city: "Bronx",
            state: "NY",
            sale: ' ' + 20 + '%',
        },
        {
            id: uuidv4(),
            city: "Brooklyn",
            state: "NY",
            sale: ' ' + 20 + '%',
        },
        {
            id: uuidv4(),
            city: "Clearwater",
            state: "Florida",
            sale: ' ' + 75 + "%",
        },
        {
            id: uuidv4(),
            city: "Dallas",
            state: "Texas",
            sale: ' ' + 15 + "%",
        },
        {
            id: uuidv4(),
            city: "Huston",
            state: "Texas",
            sale: ' ' + 15 + "%",
        },
        {
            id: uuidv4(),
            city: "Manhattan",
            state: "NY",
            sale: ' ' + 20 + "%",
        },
        {
            id: uuidv4(),
            city: "Miami",
            state: "Florida",
            sale: ' ' + 75 + "%",
        },
        {
            id: uuidv4(),
            city: "Oklahoma city",
            state: "Oklahoma",
            sale: ' ' + 81 + "%",
        },
        {
            id: uuidv4(),
            city: "Queens",
            state: "NY",
            sale: ' ' + 20 + "%",
        },
        {
            id: uuidv4(),
            city: "Salem",
            state: "Massachusetts",
            sale: ' ' + 45 + "%",
        },
        {
            id: uuidv4(),
            city: "Staten Island",
            state: "NY",
            sale: ' ' + 20 + "%",
        }
        ]

    const categories = [
        {
           id:uuidv4(),
           state: "NY",
        },
        {
            id:uuidv4(),
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
            id:uuidv4(),
            state: "Massachusetts",
        }
    ]



  return (
        <div>

        <h1>Sales!!!</h1>

        <div className="row align-items-start">
        {categories.map(el=>

        <Categories key={el.id} categories={el}
        expense={expense}
        />

        )
        }

        </div>

    </div>
  );
}

export default App;
