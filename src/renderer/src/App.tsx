import { Flex, ActionIcon, } from "@mantine/core";
import helldiversLogo from './assets/icons/helldivers-logo.webp';

import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function App() {
  return (
    <>
      <img alt="logo" className="logo" src={helldiversLogo} />
            <div className="creator">Developed by u/defalt0_0</div>
            <Flex gap="md">
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="add-button">
                    <IoMdAdd />
                </ActionIcon>
                <ActionIcon variant='outline' color='gray' radius="xl" aria-label="settings-button">
                    <IoSettingsOutline />
                </ActionIcon>
            </Flex>
    </>
  )
}

export default App
