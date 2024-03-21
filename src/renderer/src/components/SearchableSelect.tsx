import { useEffect, useState } from "react";
import { Combobox, InputBase, useCombobox } from '@mantine/core';

import { selectOptions } from "@renderer/stratagem";


const allSelectOptions = 
selectOptions.reduce<string[]>((acc, group) => [...acc, ...group.options], []);

export default function SearchableSelect({ value, setValue }) {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    // const [value, setValue] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    const shouldFilterOptions = allSelectOptions.every((item) => item !== search);
    const filteredGroups = selectOptions.map((group) => {
        const filteredOptions = shouldFilterOptions
          ? group.options.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
          : group.options;

        return { ...group, options: filteredOptions };
    })

    const totalOptions = filteredGroups.reduce((acc, group) => acc + group.options.length, 0);

    const groups = filteredGroups.map((group) => {
        const options = group.options.map((item) => (
          <Combobox.Option value={item} key={item}>
            {item}
          </Combobox.Option>
        ));
    
        return (
          <Combobox.Group label={group.label} key={group.label}>
            {options}
          </Combobox.Group>
        );
    });

    useEffect(() => {
        console.log(value);
    }, [value])
    return (
        <Combobox
            store={combobox}
            withinPortal={true}
            onOptionSubmit={(val) => {
                setValue(val);
                setSearch(val);
                combobox.closeDropdown();
            }}
        >
          <Combobox.Target>
            <InputBase
              rightSection={<Combobox.Chevron />}
              value={search}
              onChange={(event) => {
                combobox.openDropdown();
                combobox.updateSelectedOptionIndex();
                setSearch(event.currentTarget.value);
              }}
              onClick={() => combobox.openDropdown()}
              onFocus={() => combobox.openDropdown()}
              onBlur={() => {
                combobox.closeDropdown();
                setSearch(value || '');
              }}
              placeholder="Search value"
              rightSectionPointerEvents="none"
            />
          </Combobox.Target>
    
          <Combobox.Dropdown>
            <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
              {totalOptions > 0 ? groups : <Combobox.Empty>Nothing found</Combobox.Empty>}
            </Combobox.Options>
          </Combobox.Dropdown>
        </Combobox>
    );
}