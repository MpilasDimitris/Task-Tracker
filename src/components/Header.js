import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd ,showAdd}) => {
    
    return (
        <header className='header'>
            <h1>
                {title}
            </h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Κλείσιμο' : 'Προσθήκη'} onClick={onAdd} />
        </header>
    )
}

Header.protoTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
