import { Drawer } from "@mantine/core"

export default function SettingDrawer() {
    return (
        <Drawer opened={openedSettings} onClose={closeSettings} title="Settings">

        </Drawer>
    )
}