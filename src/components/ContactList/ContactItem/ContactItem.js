import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
// import sBtn from '../../../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsOperations, ContactsSelectors } from 'redux/contacts';
import { toast } from 'react-toastify';
import { useState } from 'react';


export default function ContactItem({ id, name, number }) {
    const [changeName, setChangeName] = useState(name);
    const [changeNumner, setChangeNumber] = useState(number);
    const [changeContact, setChangeContact] = useState(false);
    const contacts = useSelector(ContactsSelectors.getContacts);
    const dispatch = useDispatch();
    const handleChangeContact = () => {
        if (changeContact) {
            if (name === changeName && number === changeNumner) {
                setChangeContact(!changeContact);
                return;
            }
            if (
                contacts.find(
                    contact =>
                        contact.name.toLocaleLowerCase() ===
                        changeName.toLocaleLowerCase() && contact.id !== id
                )
            ) {
                toast.warning(`${changeName} is a alredy in contacts`);
                return;
            }
            dispatch(
                ContactsOperations.changeContact({
                    id,
                    name: changeName,
                    number: changeNumner,
                })
            );
        }
        setChangeContact(!changeContact);
    };
    return (
        <li key={id} className={s.list__item}>
            {changeContact ? (
                <>
                    <input
                        className={s.input}
                        type="name"
                        name="name"
                        value={changeName}
                        placeholder="Name Lastname"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={e => setChangeName(e.target.value)}
                    />
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        value={changeNumner}
                        placeholder="XXX-XX-XX"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={e => setChangeNumber(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <p>{name}</p>
                    <p>{number}</p>
                </>
            )}
            <div className={s.button}>
                <button
                    type="button"
                    onClick={handleChangeContact}>
                    {changeContact ? 'Save' : 'Edit'}
                </button>
            </div>

        </li>

    );
}

ContactItem.propType = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};