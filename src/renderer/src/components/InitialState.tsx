import { ActionIcon } from '@mantine/core';
import helldiversLogo from '../assets/images/helldivers-logo.webp'
import { IoMdAdd } from "react-icons/io";


export default function InitialState(): JSX.Element {
    const sendMarco = () => {
        window.electron.ipcRenderer.send('set-marco', { oribitalAirbrust: "D+D+D" })
    }
    return (
        <>
            <img alt="logo" className="logo" src={helldiversLogo} />
            <div className="creator">Developed by Defalt</div>
            <p className="tip">
                Press any <code>key</code> to bind shortcuts
            </p>
            <ActionIcon variant='outline' aria-label="add-button" onClick={sendMarco}>
                <IoMdAdd />
            </ActionIcon>
        </>
    )
}