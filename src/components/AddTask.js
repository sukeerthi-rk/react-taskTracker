import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, settext] = useState('')
    const [day, setday] = useState('')
    const [reminder, setreminder] = useState('false')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert("please add task name")
            return
        }
        onAdd({ text, day, reminder })
        settext('')
        setday('')
        setreminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => settext(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder='Add Day & TIme' value={day} onChange={(e) => setday(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setreminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value='Save Task' className='btn btn-block' />


        </form>
    )
}

export default AddTask
