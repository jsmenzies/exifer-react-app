import React from "react";
import {WrapperInfo} from "../../../app-domain/app-declarations";

const InfoPanel = (wrapper: WrapperInfo) => {
    const listItems = wrapper.wrapperKeys.map((key) => <li key={key}>{key}</li>);

    return <div className="flex-1 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-medium text-black">{wrapper.wrapperId}</h3>
        <p className="text-gray-500">{wrapper.wrapperSize} copies</p>
        <p className="text-gray-500">{listItems}</p>
    </div>
}

export default InfoPanel
