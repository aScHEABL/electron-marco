import { Drawer } from "@mantine/core"

export default function SettingDrawer({ props }) {
    return (
        <Drawer opened={props.openedSetting} onClose={props.closeSetting} title="Settings">

        </Drawer>
    )
}