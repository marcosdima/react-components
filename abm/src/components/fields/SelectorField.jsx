import { useEffect } from "react";
import { SelectorFieldProps } from "../PropTypes"; 
import SelectCustom from "../elements/SelectCustom";
import statusType from "../../enums/statusType";
import LabelCustom from "../elements/LabelCustom";

const SelectorField = ({ hook, status, settings: { values } }) => {
    useEffect(() => {
        status(statusType.OK);
    }, [status]);

    const onChangeValue = ({ value }) => {
        hook.onChange(value);
    };

    return (
        <>
            <LabelCustom text={hook.name} capitalFirst={true} />
            <SelectCustom
                options={values}
                onChange={onChangeValue}
                placeholder="Selecciona una opción"
            />
        </>
    );
};

SelectorField.propTypes = SelectorFieldProps;

export default SelectorField;
