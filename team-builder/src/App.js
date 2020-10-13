import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Components/Form'
import Member from './Components/Member'

const teamMembers = [
  {name: 'Alden', email: 'ach52@gmail.com', role: 'Tech Lead'},
  {name: 'Justin', email: 'fuj@gmail.com', role: 'Frontend Engineer'},
  {name: 'Kevin', email: 'tone@gmail.com', role: 'Backend Engineer'}
]

  const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

  function App() {
  const [team, setTeam] = useState(teamMembers)
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeam([...team, newMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>CodeBusters</h1>
      <h2>Entry Form</h2>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      <h2>Team Members</h2>
      {
        team.map(member => {
          return (
            <Member key={Member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
