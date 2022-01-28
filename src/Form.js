import React from "react";

export default function Form(props) {
    const { values, submit, change, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
        <form id='pizza-form' onSubmit={onSubmit}>
            <div>
                <h1>Build Your Pizza!</h1>
                <img className="formImg" src = 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' alt=''/>
            </div>
            <div>
                <h4>Enter your name!</h4>
                <label>Type Name Here
                    <input
                    id='name-input'
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>
            </div>
            <div>
                <h4>Select Size</h4>
                <label>Sizes
                    <select
                    id='size-dropdown'
                    name='size'
                    value={values.size}
                    onChange={onChange}
                    >
                    <option value=''>--Select Size--</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    </select>
                </label>
            </div>
            <div className="toppings">
                <h4>Pick your toppings</h4>
                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>Sausage
                    <input
                    type='checkbox'
                    name='sausage'
                    checked={values.sausage}
                    onChange={onChange}
                    />
                </label>
                <label>Olives
                    <input
                    type='checkbox'
                    name='olives'
                    checked={values.olives}
                    onChange={onChange}
                    />
                </label>
                <label>Anchovies
                    <input
                    type='checkbox'
                    name='anchovies'
                    checked={values.anchovies}
                    onChange={onChange}
                    />
                </label>
            </div>
            <div>
                <label>Special Order
                    <input 
                    id = 'special-text'
                    type='text'
                    name='specialOrder'
                    checked={values.specialOrder}
                    onChange={onChange}
                    />
                </label>
            </div>
            <div className="orderBtn">
                <button id='order-button'>Add to Order</button>
            </div>
            <div className="errors">
                <p>{errors.name}</p>
            </div>
        </form>
    )
}