import React from "react";
import ArrowBackItem from "./Atom/ArrowBackNav";

const Form = ({
    name, setName, 
    email, setEmail, shipping, setShipping,
    phone, setPhone
}) => {
    return (
        <form action="#" className="form">
            <div className="show-on-mobile">
                <div>
                    <label htmlFor="name"> *Full Name </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jay" />
                </div>
               
               <div>
                    <label htmlFor="email"> *Email </label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndeo@gmail.com" />
               </div>
               
                <div>
                    <label htmlFor="shipping"> *Shipping Address </label>
                    <input type="text" id="shipping" value={shipping} onChange={(e) => setShipping(e.target.value)} placeholder="Enter full Shipping Address" />
                </div>

                <div>
                    <label htmlFor="phone"> *Phone Number </label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="eg. +234" />
                </div>
                
            </div>

            <button className="lg shown-on-laptop">Next</button>


            <div className="shown-on-laptop">
                <div>
                    <label htmlFor="name">Full Name </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                </div>
               
               <div>
                    <label htmlFor="email">Phone </label>
                    <input type="tel" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="eg +234" />
               </div>
               
                <div>
                    <label htmlFor="shipping"> City </label>
                    <input type="text" id="shipping" value={shipping} onChange={(e) => setShipping(e.target.value)}  />
                </div>

                <div>
                    <label htmlFor="phone"> *Postal Code </label>
                    <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  />
                </div>
                
            </div> 

            <div className="shown-on-laptop">
                <div>
                    <label htmlFor="name"> Email </label>
                    <input type="text" id="email" value={name} onChange={(e) => setName(e.target.value)} placeholder="johndeo@gmail.com" />
                </div>
               
               <div>
                    <label htmlFor="email"> Address </label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
               </div>
               
                <div>
                    <label htmlFor="shipping"> State </label>
                    <input type="text" id="shipping" value={shipping} onChange={(e) => setShipping(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="phone1"> Country </label>
                    <input type="tel" id="phone1" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="eg. +234" />
                </div>
                
            </div>         
            <div className="btn-div">
                <button className="btn-back">
                    <ArrowBackItem text= "Back" />
                </button>

                <button className="btn-next">Next</button>
            </div>
        </form>
    )
}

export default Form;