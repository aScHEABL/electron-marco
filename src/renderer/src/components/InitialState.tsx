import { useState, useEffect, ReactElement, Fragment } from 'react';

import { ActionIcon, Flex, Drawer, Modal, Button, Kbd, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import helldiversLogo from '../assets/icons/helldivers-logo.webp';
// import stratagem from '../stratagem.js';

import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


function keyboardIcon(array: string[]) {
    return (
        <Fragment>
            {array.map((element, index) => (
                <Fragment key={index}>
                    <Kbd>{element}</Kbd>
                    {index < array.length - 1 && " + "}
                </Fragment>
            ))}
        </Fragment>
    )
}

export default function InitialState(): JSX.Element {
    const [pressedKeys, setPressedKeys] = useState<string[]>([]);
    const [isRecording, setIsRecording] = useState(false);
    const [openedSettings, { open: openSettings, close: closeSettings }] = useDisclosure(false);
    const [openedAddMarcoMenu, { open: openAddMarcoMenu, close: closeAddMarcoMenu }] = useDisclosure(false);

    const sendMarco = () => {
        // window.electron.ipcRenderer.send('set-marco', { oribitalAirbrust: "D+D+D" })
        // window.electron.ipcRenderer.send('set-marco', { eagleClusterBomb: "W+D+S+S+D" });
    }

    const handleAddMenuOpen = () => {
        setPressedKeys([]);
        openAddMarcoMenu();
        setIsRecording(true);
    }

    const handleAddMenuClose = () => {
        setPressedKeys([]);
        closeAddMarcoMenu();
        setIsRecording(false);
    }

    useEffect(() => {
        // If pressedKeys array has equal or more than 3 keys, stop recording
        if (pressedKeys.length >= 3) {
            setIsRecording(false);
        }
        // If a key is pressed, and then if both recording and key is not repeated, record the key
        const handleKeyDown = (event) => {
            if (isRecording === true && !pressedKeys.includes(event.key)) {
                if (pressedKeys.length >= 3) {
                    return;
                } else setPressedKeys((prevPressedKeys) => [...prevPressedKeys, event.key]);
            }
        }
        // Add event listener for key down
        if (isRecording) {
            document.addEventListener('keydown', handleKeyDown);
        }
        // Clear the event listener after re-render
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [pressedKeys, isRecording])

    return (
        <>  
            <Drawer opened={openedSettings} onClose={closeSettings} title="Settings">

            </Drawer>

            <Modal opened={openedAddMarcoMenu} onClose={handleAddMenuClose} title="" centered
            pos="absolute" style={{
                left: 0,
            }}
            >   
                { isRecording === true ? 
                    <Fragment>
                        <p className="tip">
                            Press any <code>key</code> to bind shortcuts.<br />
                            Maximum 3 keys
                        </p>
                        { pressedKeys.length === 0 ? null : keyboardIcon(pressedKeys) }
                    </Fragment>
                :
                    keyboardIcon(pressedKeys) }

                {/* { isRecording === true ?
                null
                :
                <p>{stratagem[0].englishName}</p>} */}

                {/* <Center>
                    <Button variant="outline" color="cyan">Record</Button>
                </Center> */}

                

                <Flex justify="flex-end" gap="md">
                    {isRecording ? 
                    <Button onClick={() => {setIsRecording(false)}}>Stop Recording</Button>
                    :
                    <Button onClick={closeAddMarcoMenu}>Save</Button>}
                </Flex>
            </Modal>

            <img alt="logo" className="logo" src={helldiversLogo} />
            <div className="creator">Developed by Defalt</div>
            <Flex gap="md">
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="add-button" onClick={() => { handleAddMenuOpen(); }}>
                    <IoMdAdd />
                </ActionIcon>
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="settings-button" onClick={openSettings}>
                    <IoSettingsOutline />
                </ActionIcon>
            </Flex>
        </>
    )
}