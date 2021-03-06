import {Multiselect} from "multiselect-react-dropdown";
import React from "react";

export default (props) => {
    const selected = ((selectedList, selectedItem) => {
        props.updateValue({
            value: selectedItem,
            action: 'add',
            name: props.name
        });
    });
    const unSelected = ((selectedList, selectedItem) => {
        props.updateValue({
            value: selectedItem,
            action: 'remove',
            name: props.name
        });
    });
    return (
        <div className={`${props.divClass || 'col-lg-6 col-md-12'}`}>
            <div className="form-group">
                <label htmlFor={props.name}>{props.label}</label>
                <Multiselect
                    isObject={props.isObject || false}
                    onRemove={unSelected}
                    displayValue={props.displayValue || 'name'}
                    onSelect={selected}
                    options={props.options}
                    selectedValues={props.value}
                    singleSelect={!props.multiple}
                    selectionLimit={!props.multiple ? 1 : -1}
                    hidePlaceholder={true}
                    showArrow={true}
                    avoidHighlightFirstOption={true}
                    styleListContainer={{height: 56}}
                />
                {props.errors && props.errors.map(error => (<div className="invalid-input">{error}</div>))}
            </div>
        </div>
    )
}
