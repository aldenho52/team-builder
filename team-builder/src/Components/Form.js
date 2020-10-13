import React from 'react'

export default function Form(props) {
    const {values, update, submit} = props

    const onChange = e => {
        const {name, value} = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='inputs'>
                <label>
                    Name:
                    <input type='text' name='name' placeholder='enter name here' onChange={onChange} value={values.name} />
                </label>
                <label>
                    Email:
                    <input type='email' name='email' value={values.email} onChange={onChange} placeholder='enter email here'  />
                </label>
                <label>
                    Role
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value='' >---select role---</option>
                        <option value='Frontend Engineer' >Frontend Engineer</option>
                        <option value='BackendEngineer'>Backend Engineer</option>
                        <option value='UI/UX Designer'>UI/UX Designer</option>
                        <option value='Tech Lead'>Tech Lead</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}