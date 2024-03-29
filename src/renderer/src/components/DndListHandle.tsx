import cx from 'clsx';
import { ActionIcon, rem, Text, Group, Container } from '@mantine/core';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
import { MdOutlineModeEdit } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import classes from './DndListHandle.module.css';


export default function DndListHandle({ props }) {

  const items = props.activeMarcos.map((item, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div {...provided.dragHandleProps} className={classes.dragHandle}>
            <IconGripVertical style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </div>
          {/* <Text className={classes.symbol}>{item.symbol}</Text> */}
          <Text>{item}</Text>
          <Group gap="xs" pos="absolute" right="5%">
            {/* <Text c="dimmed" size="sm">
              Position: {item.position} • Mass: {item.mass}
            </Text> */}
            <ActionIcon variant="outline" aria-label="Edit">
                <MdOutlineModeEdit />
            </ActionIcon>
            <ActionIcon variant="outline" aria-label="Settings">
                <IoSettingsOutline />
            </ActionIcon>
          </Group>
        </div>
      )}
    </Draggable>
  ));

  return (
    <Container w="22rem">
        <DragDropContext
        onDragEnd={({ destination, source }) =>
            props.activeMarcosHandlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
        >
            <Droppable droppableId="dnd-list" direction="vertical">
                {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
        </DragDropContext>
    </Container>
  );
}