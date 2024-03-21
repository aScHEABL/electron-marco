import { useState } from "react";

import { Flex, ActionIcon, } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import helldiversLogo from './assets/icons/helldivers-logo.webp';

import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import MarcoModal from "./components/MarcoModal";
import SettingDrawer from "./components/SettingDrawer";

function App() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [openedSetting, { open: openSetting, close: closeSetting }] = useDisclosure(false);
  const [openedMarcoModal, { open: openMarcoModal, close: closeMarcoModal }] = useDisclosure(false);

  const modalProps = {
    pressedKeys,
    setPressedKeys,
    isRecording,
    setIsRecording,
    openedMarcoModal,
    openMarcoModal,
    closeMarcoModal,
    handleMarcoModalClose,
  }

  const settingProps = {
    openedSetting,
    openSetting,
    closeSetting,
  }

  function handleMarcoModalOpen() {
    setPressedKeys([]);
    openMarcoModal();
    setIsRecording(true);
  }

  function handleMarcoModalClose() {
    setPressedKeys([]);
    closeMarcoModal();
    setIsRecording(false);
  }

  return (
    <>
      <img alt="logo" className="logo" src={helldiversLogo} />
        <div className="creator">Developed by u/defalt0_0</div>
          <Flex gap="md">
              <ActionIcon variant='outline' color='gray' radius="xl" aria-label="add-button" onClick={handleMarcoModalOpen}>
                  <IoMdAdd />
              </ActionIcon>
              <ActionIcon variant='outline' color='gray' radius="xl" aria-label="settings-button" onClick={openSetting}>
                  <IoSettingsOutline />
              </ActionIcon>
          </Flex>
      <MarcoModal props={modalProps} />
      <SettingDrawer props={settingProps} />
    </>
  )
}

export default App
