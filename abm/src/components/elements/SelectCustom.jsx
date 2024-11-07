import Select from 'react-select';
import { SelectCustomProps } from '../PropTypes';
import { Container } from '../../styles/Input.styles';
import LabelCustom from './LabelCustom';

const SelectCustom = ({ options, onChange, placeholder="Select an option...", label }) => {
    const customStyles = {
        container: (provided) => ({
            ...provided,
            width: '100%',
            marginBottom: '1rem',
        }),
        control: (provided, state) => ({
            ...provided,
            borderWidth: '2px',
            borderColor: state.isFocused ? '#54473F' : '#9A7E6F',
            boxShadow: state.isFocused ? '0 0 0 0.3rem rgba(154, 126, 111, 0.25)' : 'none',
            '&:hover': {
                borderColor: '#9A7E6F',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#54473F' : 'white',
            color: state.isSelected ? '#9A7E6F' : '#212529',
            borderRadius: '0.25rem',
            padding: '8px',
            width: '90%',
            margin: '2px auto',
            display: 'flex',
            justifyContent: 'center',
            '&:hover': {
                backgroundColor: state.isSelected ? '#54473F' : '#FFC55A',
            },
        }),     
        singleValue: (provided) => ({
            ...provided,
            color: 'black',
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0.25rem',
            boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.25)',
            zIndex: 1000,
        }),
    };

    return (
        <Container>
            <LabelCustom {...label}/>
            <Select
                options={options}
                onChange={onChange}
                styles={customStyles}
                placeholder={placeholder}
            />
        </Container>
    );
};

SelectCustom.propTypes = SelectCustomProps;

export default SelectCustom;
