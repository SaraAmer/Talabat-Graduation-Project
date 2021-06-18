import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const Flags = () => {
    const [selected, setSelected] = useState('EG');

    return (

        <
        ReactFlagsSelect countries = {
            ["EG", " KW", "AE", "BH", "QA", "OM", "JO", "SA"]
        }
        showSelectedLabel = { false }
        alignOptionsToRight fullWidth = { false }
        selected = { selected }
        onSelect = { code => setSelected(code) }


        />

    )
};

export default Flags;