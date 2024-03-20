import { useState, useEffect } from 'react';

import { ActionIcon, Flex, Drawer, Modal, Button, Kbd, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import helldiversLogo from '../assets/images/helldivers-logo.webp';
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


export default function InitialState(): JSX.Element {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);
    const [isRecording, setIsRecording] = useState(false);
    const [openedSettings, { open: openSettings, close: closeSettings }] = useDisclosure(false);
    const [openedAddMarcoMenu, { open: openAddMarcoMenu, close: closeAddMarcoMenu }] = useDisclosure(false);

    const sendMarco = () => {
        // window.electron.ipcRenderer.send('set-marco', { oribitalAirbrust: "D+D+D" })
        // window.electron.ipcRenderer.send('set-marco', { eagleClusterBomb: "W+D+S+S+D" });
        setIsRecording(true);
    }

    useEffect(() => {
        const handlekeyDown = (event) => {
            if (isRecording === true && !pressedKeys.includes(event.key)) {
                setPressedKeys((prevPressedKeys) => [...prevPressedKeys, event.key]);
                if (pressedKeys.length >= 2) setIsRecording(false);
            }
        }
    })

    return (
        <>  
            <Drawer opened={openedSettings} onClose={closeSettings} title="Settings">

            </Drawer>

            <Modal opened={openedAddMarcoMenu} onClose={closeAddMarcoMenu} title="" centered
            pos="absolute" style={{
                left: 0,
            }}
            >   
                { isRecording === true ? 
                <p className="tip">
                    Press any <code>key</code> to bind shortcuts
                </p>
                :
                null }

                {/* <Center>
                    <Button variant="outline" color="cyan">Record</Button>
                </Center> */}

                

                <Flex justify="flex-end" gap="md">
                    <Button onClick={closeAddMarcoMenu}>Save</Button>
                </Flex>
            </Modal>

            <img alt="logo" className="logo" src={helldiversLogo} />
            <div className="creator">Developed by Defalt</div>
            <Flex gap="md">
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="add-button" onClick={() => { sendMarco(); openAddMarcoMenu(); }}>
                    <IoMdAdd />
                </ActionIcon>
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="settings-button" onClick={openSettings}>
                    <IoSettingsOutline />
                </ActionIcon>
            </Flex>
        </>
    )
}