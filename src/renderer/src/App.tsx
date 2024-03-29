import { useState, Fragment, useEffect } from "react";

import { Flex, ActionIcon, Stack, Kbd } from "@mantine/core";
import { useDisclosure, useListState } from "@mantine/hooks";

import helldiversLogo from './assets/icons/helldivers-logo.webp';

import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import MarcoModal from "./components/MarcoModal";
import SettingDrawer from "./components/SettingDrawer";
import DndListHandle from "./components/DndListHandle";

function App() {
  // const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [recordedKeys, setRecordedKeys] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  // const [activeMarcos, setActiveMarco] = useState<string[]>([]);
  const [activeMarcos, activeMarcosHandlers] = useListState([]);

  const [openedSetting, { open: openSetting, close: closeSetting }] = useDisclosure(false);
  const [openedMarcoModal, { open: openMarcoModal, close: closeMarcoModal }] = useDisclosure(false);

  const modalProps = {
    recordedKeys,
    setRecordedKeys,
    isRecording,
    setIsRecording,
    openedMarcoModal,
    openMarcoModal,
    closeMarcoModal,
    handleMarcoModalClose,
    activeMarcos,
    activeMarcosHandlers,
    keyboardIcon,
  }

  const settingProps = {
    openedSetting,
    openSetting,
    closeSetting,
  }

  const DndListProps = {
    activeMarcos,
    activeMarcosHandlers,
    keyboardIcon,
  }

  function handleMarcoModalOpen() {
    setRecordedKeys([]);
    openMarcoModal();
    setIsRecording(true);
  }

  function handleMarcoModalClose() {
    setRecordedKeys([]);
    closeMarcoModal();
    setIsRecording(false);
  }

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

  useEffect(() => {
    if (activeMarcos.length >= 1) {
      console.log(activeMarcos);
    }
  }, [activeMarcos]);

  return (
    <>
            {

              activeMarcos.length >= 1 ?
                // <DndListHandle props={DndListProps} />
                <Fragment>
                </Fragment>
              :
                <Stack justify="center" align="center" mih="100vh" maw="30vw"
                style={{
                  overflow: "hidden",

                }}
                >
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
                </Stack>
            }
      <MarcoModal props={modalProps} />
      <SettingDrawer props={settingProps} />
    </>
  )
}

export default App
