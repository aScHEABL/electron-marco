import { Modal, Flex, Box, Button, Kbd } from "@mantine/core"
import { Fragment, useEffect } from "react"

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

export default function MarcoModal({ props }) {

    useEffect(() => {
        // If pressedKeys array has equal or more than 3 keys, stop recording
        if (props.pressedKeys.length >= 3) {
            props.setIsRecording(false);
        }
        // If a key is pressed, and then if both recording and key is not repeated, record the key
        function handleKeyDown(event) {
            if (props.isRecording === true && !props.pressedKeys.includes(event.key)) {
                if (props.pressedKeys.length >= 3) {
                    return;
                } else props.setPressedKeys((prevPressedKeys) => [...prevPressedKeys, event.key]);
            }
        }
        // Add event listener for key down
        if (props.isRecording) {
            document.addEventListener('keydown', handleKeyDown);
        }
        // Clear the event listener after re-render
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [props.pressedKeys, props.isRecording])
    return (
        <Modal opened={props.openedMarcoModal} onClose={props.handleMarcoModalClose} title="" centered
            pos="absolute" style={{
                left: 0,
            }}
            >   
                    { props.isRecording === true ? 
                        <Fragment>
                            <p className="tip">
                                Press any <code>key</code> to bind shortcuts.<br />
                                Maximum 3 keys
                            </p>
                            { props.pressedKeys.length === 0 ? null : keyboardIcon(props.pressedKeys) }
                        </Fragment>
                    :
                        <Flex justify="space-around" align="center" mb={16}>
                            <Box>
                                { keyboardIcon(props.pressedKeys) }
                            </Box>
                            { props.isRecording === false ? <Button variant="outline" color='cyan'>Stratagem</Button> : null }
                        </Flex>
                        }

                <Flex justify="flex-end" gap="md">
                    {props.isRecording ? 
                    <Button onClick={() => {props.setIsRecording(false)}}>Stop Recording</Button>
                    :
                    <Button onClick={props.closeMarcoModal}>Save</Button>}
                </Flex>
            </Modal>
    )
}