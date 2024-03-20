import { ActionIcon, Flex, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import helldiversLogo from '../assets/images/helldivers-logo.webp'
import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


export default function InitialState(): JSX.Element {
    const [openedSettings, { open: openSettings, close: closeSettings }] = useDisclosure(false);

    const sendMarco = () => {
        // window.electron.ipcRenderer.send('set-marco', { oribitalAirbrust: "D+D+D" })
        window.electron.ipcRenderer.send('set-marco', { eagleClusterBomb: "W+D+S+S+D" })
    }

    return (
        <>  
            <Drawer opened={openedSettings} onClose={closeSettings} title="Settings">

            </Drawer>
            
            <img alt="logo" className="logo" src={helldiversLogo} />
            <div className="creator">Developed by Defalt</div>
            {/* <p className="tip">
                Press any <code>key</code> to bind shortcuts
            </p> */}
            <Flex gap="md">
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="add-button" onClick={sendMarco}>
                    <IoMdAdd />
                </ActionIcon>
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="settings-button" onClick={openSettings}>
                    <IoSettingsOutline />
                </ActionIcon>
            </Flex>
        </>
    )
}