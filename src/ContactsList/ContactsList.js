import styles from './ContactsList.module.css';

import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li>
            <span className={styles.item}>
                {name}:{phone}
            </span>{' '}
            <button className={styles.button} onClick={() => onRemove(id)}>
                delete
            </button>
        </li>
    );
};

const ContactsList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null;
    return (
        <ul className={styles.title}>
            {contacts.map(contact => (
                <ContactListItem {...contact} onRemove={onRemove} />
            ))}
        </ul>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    onRemove: PropTypes.func,
};

export default ContactsList;
