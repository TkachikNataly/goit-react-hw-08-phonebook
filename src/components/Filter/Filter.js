import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {

    return (
        <label className={s.title}>
            Find contact by name
            <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={e => onChange(e.target.value)}
            />
        </label>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
