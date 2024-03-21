import { Modal, Flex, Box, Button } from "@mantine/core"
import { Fragment } from "react"

export default function MarcoModal() {
    return (
        <Modal opened={openedAddMarcoModal} onClose={handleAddMenuClose} title="" centered
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
                        <Flex justify="space-around" align="center" mb={16}>
                            <Box>
                                { keyboardIcon(pressedKeys) }
                            </Box>
                            { isRecording === false ? <Button variant="outline" color='cyan'>Stratagem</Button> : null }
                        </Flex>
                        }

                <Flex justify="flex-end" gap="md">
                    {isRecording ? 
                    <Button onClick={() => {setIsRecording(false)}}>Stop Recording</Button>
                    :
                    <Button onClick={closeAddMarcoModal}>Save</Button>}
                </Flex>
            </Modal>
    )
}