import React, {useState, useStates} from "react";

import "../Testimonials/Testimonials.css";

const Testimonials = () => {

    const arrTestimonials = [
        {
            name:"Kiril",
            date:"12.12.2020",
            text:"N1-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name:"Dmytro",
            date:"12.02.2021",
            text:"N2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }

    ]

    const [testimonials,setTestimonials] = useState(arrTestimonials)

    const [newTestimonials,setNewTestimonials] = useState({
        name:"",
        date:"",
        text:"",
    })

    const handleNameChange = (e) => (
        setNewTestimonials((value) => ({
            ...value,
            name:e.target.value
        }))
    )

    const handleDateChange = (e) => (
        setNewTestimonials((value) => ({
            ...value,
            date:e.target.value
        }))
    )

    const handleTextChange = (e) => (
        setNewTestimonials((value) => ({
            ...value,
            text:e.target.value
        }))
    )

    const Send = (e) => {
        e.preventDefault();
        setNewTestimonials({
            name:"",
            date:"",
            text:"",
        })
        setTestimonials((value) => {
            return [...value,newTestimonials]
        })
    }
    
    return (
        <>
            {
                testimonials.map((item,i) => (
                    <div className="container" key={i}>
                        <div className="row imonials-box">
                            <div className="">
                                <div className="name">Name: {item.name} - {item.date}</div>
                                <div className="text">Message: {item.text}</div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                ))
            }
            <form
                onSubmit={Send}
            >
                <div className="container">
                    <div className="row grid-testimonials">
                        <div>
                            <input
                                placeholder="Name" 
                                type="text"
                                value={newTestimonials.name}
                                onChange={handleNameChange} 
                            />
                        </div>
                        <div>
                            <input 
                                type="date"
                                value={newTestimonials.date}
                                onChange={handleDateChange}  
                            />
                        </div>
                        <div>
                            <textarea 
                                placeholder="Your message" 
                                cols="30" 
                                rows="10"
                                value={newTestimonials.text}
                                onChange={handleTextChange} 
                            ></textarea>
                        </div>
                        <button>Leave message</button>
                    </div>
                </div>  
            </form>
        </>
    )
}

export default Testimonials