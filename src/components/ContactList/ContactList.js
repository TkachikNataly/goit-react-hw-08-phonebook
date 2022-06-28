import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';
import { ContactsSelectors, ContactsOperations } from 'redux/contacts';

import PropTypes from 'prop-types';


export default function ContactList({ filter }) {
    const contacts = useSelector(ContactsSelectors.getContacts);
    const isLoading = useSelector(ContactsSelectors.getIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ContactsOperations.fetchContacts());
    }, [dispatch]);

    const getVisibleContacts =
        contacts && contacts.filter(contact =>
            contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );

    // const getFilteredContacts = () => {
    //     const normalizedFilter = filter.toLowerCase();

    //     return contacts.filter((contact) =>
    //         contact.name.toLowerCase().includes(normalizedFilter)
    //     );
    // };
    // const filteredContacts = getFilteredContacts();

    // const dispatch = useDispatch();
    return (
        <div>
            {isLoading ? (
                <h2>Loading...
                </h2>
            ) : getVisibleContacts?.length ? (
                <ul className={s.list}>
                    {getVisibleContacts.map(({ id, name, number }) => (
                        <ContactItem key={id} id={id} name={name} number={number} />
                    ))
                    }
                </ul>
            ) : (
                <h2>No contacts</h2>
            )
            }
        </div >


    );
}

ContactList.propTypes = {
    filter: PropTypes.string.isRequired

};

