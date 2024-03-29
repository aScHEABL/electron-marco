interface TestSelectOption {
    label: string;
    options: TestOption[];
}

interface TestOption {
    englishName: string;
    chineseName: string;
    keyCombinations: string;
}

export const stratagem = [
    {
        englishName: "MG-43 Machine Gun",
        chineseName: "MG-43 機關槍",
        keyCombinations: "saswd"
    },
    {
        englishName: "Anti-Material Rifle",
        chineseName: "反器材步槍",
        keyCombinations: "sadws"
    },
    {
        englishName: "Stalwart",
        chineseName: "",
        keyCombinations: "saswwa"
    },
    {
        englishName: "Expendable Anti-Tank",
        chineseName: "",
        keyCombinations: "ssawd"
    },
    {
        englishName: "Gatling Barrage",
        chineseName: "",
        keyCombinations: "wsaww"
    },
    {
        englishName: "Airburst Strike",
        chineseName: "",
        keyCombinations: "ddd"
    },
    {
        englishName: "120MM HE Barrage",
        chineseName: "",
        keyCombinations: "dssasdss",
    }
]

export const selectOptions = [
    {
        label: 'Weapons',
        options: ['MG-43 Machine Gun', 'Anti-Material Rifle', 'Stalwart',
        'Expendable Anti-Tank', 'Recoilless Rifle', 'Flamethrower',
        'Autocannon', 'Railgun', 'Spear'] 
    },
    {
        label: 'Orbital',
        options: ['Gatling Barrage', 'Airburst Strike', '120MM HE Barrage',
        '380MM HE Barrage', 'Walking Barrage', 'Laser Strike']
    }
]

export const testSelectOptions: TestSelectOption[] = [
    {
        label: 'Weapons',
        options: [
            {
                englishName: "MG-43 Machine Gun",
                chineseName: "MG-43 機關槍",
                keyCombinations: "saswd"
            },
            {
                englishName: "Anti-Material Rifle",
                chineseName: "反器材步槍",
                keyCombinations: "sadws"
            },
            {
                englishName: "Stalwart",
                chineseName: "",
                keyCombinations: "saswwa"
            },
            {
                englishName: "Expendable Anti-Tank",
                chineseName: "",
                keyCombinations: "ssawd"
            }
        ]
    },
    {
        label: 'Orbital',
        options: [
            {
                englishName: "Gatling Barrage",
                chineseName: "",
                keyCombinations: "wsaww"
            },
            {
                englishName: "Airburst Strike",
                chineseName: "",
                keyCombinations: "ddd"
            },
            {
                englishName: "120MM HE Barrage",
                chineseName: "",
                keyCombinations: "dssasdss",
            }
        ]
    }
]