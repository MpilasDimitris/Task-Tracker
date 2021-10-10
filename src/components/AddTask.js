import {useState} from 'react' 

const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Παρακαλώ να εισάγεται κείμενο!')
            return
        }

        onAdd( {text, day, reminder} )
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Εργασία</label>
            <input type='text' placeholder='Εισαγωγή Εργασίας'
            value={text} onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label>Ημέρα και ώρα</label>
            <input type='text' placeholder='Εισαγωγή ημέρας και ώρας'
            value={day} onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label>Υπενθύμιση</label>
            <input type='checkbox'
            checked={reminder}
            value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)}
            />
        </div>
        <input type='submit' className='btn btn-block' value='Αποθήκευση' ></input>
        </form>
    )
}

export default AddTask
