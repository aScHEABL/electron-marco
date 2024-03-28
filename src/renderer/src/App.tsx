import { useEffect, useState } from "react";

import { Flex, ActionIcon, Container, Box, Text, Stack } from "@mantine/core";
import { useDisclosure, useListState } from "@mantine/hooks";

import helldiversLogo from './assets/icons/helldivers-logo.webp';

import { IoMdAdd } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import MarcoModal from "./components/MarcoModal";
import SettingDrawer from "./components/SettingDrawer";
import DndListHandle from "./components/DndListHandle";

function App() {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  // const [activeMarcos, setActiveMarco] = useState<string[]>([]);
  const [activeMarcos, activeMarcosHandlers] = useListState([]);

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
    activeMarcos,
    activeMarcosHandlers,
  }

  const settingProps = {
    openedSetting,
    openSetting,
    closeSetting,
  }

  const DndListProps = {
    activeMarcos,
    activeMarcosHandlers,
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

  // useEffect(() => {
  //   if (activeMarcos.length >= 1) {
  //     console.log(activeMarcos);
  //   }
  // }, [activeMarcos]);

  return (
    <>
            {

              activeMarcos.length >= 1 ?
              // <Container>
              //   {activeMarcos.map((item, index) => (
              //     <Box key={index}>
              //         <Text>
              //           {item}
              //         </Text>
              //     </Box>
              //   ))}
              // </Container>
                // <>
                  <DndListHandle props={DndListProps} />
                // </>
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
