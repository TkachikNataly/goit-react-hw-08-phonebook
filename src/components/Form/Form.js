import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { addContact, getContacts } from 'redux/contactsSlice';
import s from './Form.module.css';
import sBtn from '../../App.module.css';
// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsOperations, ContactsSelectors } from 'redux/contacts';



export default function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(ContactsSelectors.getContacts);
    const isRefreshing = useSelector(ContactsSelectors.getIsRefreshing);
    const dispatch = useDispatch;



    const handleChangeName = e => {
        setName(e.target.value);
    };

    const handleChangeNumber = e => {
        setNumber(e.target.value);


    };

    const handleSubmit = e => {
        e.preventDefault();
        if (
            contacts.find(
                contact =>
                    contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
            )
        ) {
            toast.warning(`${name} is alredy in contacts`);
            return;
        }
        dispatch(ContactsOperations.addContact({ name, number }));


        setName('');
        setNumber('');
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <p className={s.title}>Name</p>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChangeName}
                />
                <p className={s.title}>Number</p>
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChangeNumber}
                />
                <button className={sBtn.btn + '' + s.button} type="submit" disabled={isRefreshing}>Add Contact</button>

            </form>
        </div>


    );
}
// Form.propTypes = {
//     onFormSubmit: PropTypes.func.isRequired,
// };