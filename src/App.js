import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import Form from './Form';
import Homepage from './Homepage';
import schema from './formSchema';

const initialFormValues = {
  name: '',
  size: '',

  pepperoni: false,
  sausage: false,
  olives: false,
  anchovies: false,

  specialOrder: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  specialOrder: ''
}

const initialPizza = []
const initialDisabled = true

const App = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      console.log([...pizza, res.data])
      setPizza([...pizza, res.data])
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
     setFormValues(initialFormValues) 
    })
  }

const validate = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formError, [name]: ''
      })
    })
    .catch (err => {
      setFormErrors({
        ...formError,
        [name]:err.errors[0]
      })
    })
} 

const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({...formValues, [name]: value})
}

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    specialOrder: formValues.specialOrder.trim(),
    toppings: ['pepperoni', 'sausage', 'olives', 'anchovies'].filter(topps => !!formValues[topps])
  }
  postPizza(newPizza)
}

useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])


  return (
    <div>
      <nav>
        <h1>Pizza Time</h1>
          <div>
            <Link to= '/pizza'>
              <button id= 'order-pizza'>Order Pizza</button>
            </Link>
            <Switch>
            <Route exact path ='/'>
              <Homepage />  
            </Route>  
            <Route path= '/pizza'>
              <Form 
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formError}
              />
            </Route>
            </Switch>
          </div>
      </nav>
    </div>
  );
};
export default App;
