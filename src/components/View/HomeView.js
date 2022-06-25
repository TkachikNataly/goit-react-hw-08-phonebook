import { useState } from "react";
import Form from "components/Form/Form";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import UserMenu from "components/UserMenu/UserMenu";


export default function HomeView() {
    const [filter, setFilter] = useState('');

    return (
        <>
            <UserMenu />
            <h1>Phonebook</h1>
            <Form />
            <h2>Contacts</h2>
            <Filter filter={filter} onChange={setFilter} />
            <ContactList filter={filter} />

        </>
    );
}