import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

type Passer = {
    updateFunc: any
    labels: string[]
}

const BucketOptions = (passer: Passer) => {
    const handleLabels = (event: any, newLabels: string[]) => {
        passer.updateFunc(newLabels)
    };

    return <div className={"flex"}>
        <ToggleButtonGroup value={passer.labels} onChange={handleLabels}>
            <ToggleButton value="old">Old</ToggleButton>
            <ToggleButton value="family">Family</ToggleButton>
            <ToggleButton value="archive">Archive</ToggleButton>
            <ToggleButton value="other">Other</ToggleButton>
        </ToggleButtonGroup>
    </div>
}

export default BucketOptions
