import React from 'react';
import button from 'react-bootstrap/button';
import Boston from './img/Boston.jpg';
import Bronx from './img/Bronx.jpg';
import brooklyn from './img/brooklyn.jpg';
import Clearwater from './img/Clearwater.webp';
import Dallas from './img/Dallas.webp';
import Huston from './img/Huston.jpg';
import Keywest from './img/Keywest.jpg';
import manhattan from './img/Manhattan.jpg';
import Miami from "./img/Miami.jpg";
import Oklahoma from './img/Oklahomacity.jpg';
import Queens from './img/Queens.jpg';
import Salem from './img/Salem.jpg';
import Statenisland from './img/Statenisland.jpg';

const Settings = (props) => {
    return (


        <div className="Card">
            <div className="p-3 mb-2 bg-info-subtle text-info">
                <div className="Card-body">
                    {/*<div>*/}
                    {/*        <img className='Boston' src={Boston} alt="Img" height={100}/>*/}
                    {/*        <img className='Bronx' src={Bronx} alt="Img" height={100}/>*/}
                    {/*        <img className='Brooklyn' src={brooklyn} alt="Img" height={100}/>*/}
                    {/*        <img className='Clearwater' src={Clearwater} alt="Img" height={100}/>*/}
                    {/*        <img className='Dallas' src={Dallas} alt="Img" height={100}/>*/}
                    {/*        <img className="Huston" src={Huston} alt="Img" height={100}/>*/}
                    {/*        <img className='Keywest' src={Keywest} alt="Img" height={100}/>*/}
                    {/*        <img className='Manhattan' src={manhattan} alt="Img" height={100}/>*/}
                    {/*        <img className='Miami' src={Miami} alt="Img"height={100}/>*/}
                    {/*        <img className="Oklahoma" src={Oklahoma} alt="Img" height={100}/>*/}
                    {/*        <img className="Queens" src={Queens} alt="Img" height={100}/>*/}
                    {/*        <img className='Salem' src={Salem} alt="Img" height={100}/>*/}
                    {/*        <img className='Statenisland' src={Statenisland} alt="Img" height={100}/>*/}
                    {/*</div>*/}



                    <div className="p-3 mb-2 bg-warning-subtle text-info">
                        <img src={props.expense.img} alt="Img" height={100}/>
                        <h5 className="Card-title">Sale{props.expense.sale}</h5>
                        <p><a href="#" class="text-danger">
                            <p className="Card-text">{props.expense.state}</p>
                        </a></p>
                        <p><a href="#" class="text-success">
                            <p className="Card-text">{props.expense.city}</p>
                        </a></p>

                        <button href='#'class="btn btn-primary"> Buy now!!!</button>
                    </div>


                    {/*</div>*/}
                    {/*<Boston/>*/}
                    {/*<Bronx/>*/}
                    {/*<brooklyn/>*/}
                    {/*<Clearwater/>*/}
                    {/*<Dallas/>*/}
                    {/*<Huston/>*/}
                    {/*<Keywest/>*/}
                    {/*<manhattan/>*/}
                    {/*<Miami/>*/}
                    {/*<Oklahoma/>*/}
                    {/*<Queens/>*/}
                    {/*<Salem/>*/}
                    {/*<Statenisland/>*/}

                </div>

              </div>

        </div>


    )
        ;
};

export default Settings;