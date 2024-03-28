import cx from 'clsx';
import { rem, Text } from '@mantine/core';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { IconGripVertical } from '@tabler/icons-react';
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
          <div>
            <Text>{item}</Text>
            {/* <Text c="dimmed" size="sm">
              Position: {item.position} • Mass: {item.mass}
            </Text> */}
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
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
  );
}