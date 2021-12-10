import React, {useState} from "react";
import {DTValue} from "../../../app-domain/app-declarations";

const MetadataDTValueBox = (dtValue: DTValue) => {
    const [dateTimeValue, setDTValue] = useState<string>(dtValue.value);

    const updateDTValue = (val: string) => {
        setDTValue(val)
    }

    let defaulted: boolean = dtValue.value === 'N/A';
    return <div>
        <span className={defaulted ? 'text-red-400' : 'text-green-700'}>
        <input type={"checkbox"}
               onClick={() => dtValue.onClickFn(dateTimeValue)}/>
            {dtValue.name}
            <input
                type={"datetime-local"}
                defaultValue={dtValue.value}
                onChange={evt => updateDTValue(evt.target.value)}/>
            </span>
        <br/>
    </div>
}

export default MetadataDTValueBox;
