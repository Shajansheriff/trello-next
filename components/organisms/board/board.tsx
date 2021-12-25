import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import getInitialData from "./initial-data";
import { reorderList } from "./reorder";
import { styled } from "stitches.config";
import {
  CardDetails,
  CardLabels,
  ListCard,
  ListCards,
  CardLabelModFront,
  CardTitle,
} from "./card";

const BoardMain = styled("div", {
  flexGrow: 1,
  height: "100%",
  flexDirection: "column",
  position: "relative",
  display: "flex",
});

const Columns = styled("div", {
  bottom: 0,
  left: 0,
  marginBottom: "8px",
  overflowX: "auto",
  overflowY: "hidden",
  paddingBottom: "8px",
  position: "relative",
  right: 0,
  top: 0,
  userSelect: "none",
  whiteSpace: "nowrap",
});

const FilterBar = styled("div", {
  height: "auto",
  padding: "$1",
});

function Item({ provided, item, style, isDragging }) {
  return (
    <ListCard
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`item ${isDragging ? "is-dragging" : ""}`}
    >
      <CardDetails>
        <CardLabels>
          <CardLabelModFront color="red"></CardLabelModFront>
        </CardLabels>
        <CardTitle>{item.text}</CardTitle>
      </CardDetails>
    </ListCard>
  );
}

const ItemList = React.memo(function ItemList({ column, index }) {
  return (
    <Droppable
      droppableId={column.id}
      renderClone={(provided, snapshot, rubric) => (
        <Item
          provided={provided}
          isDragging={snapshot.isDragging}
          item={column.items[rubric.source.index]}
        />
      )}
    >
      {(dropProvided) => {
        return (
          <ListCards ref={dropProvided.innerRef}>
            {column.items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => <Item provided={provided} item={item} />}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </ListCards>
        );
      }}
    </Droppable>
  );
});

const ColumnWrapper = styled("div", {
  height: "100%",
  width: "272px",
  display: "inline-block",
  boxSizing: "border-box",
  margin: "0 4px",
  "&:first-child": {
    marginLeft: "12px",
  },
});

const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ebecf0",
});

const ListHeader = styled("div", {
  flex: "0 0 auto",
  minHeight: "20px",
  padding: "10px 8px",
  position: "relative",
});

const Column = React.memo(function Column({ column, index }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <ColumnWrapper
          className="column-wrapper"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <List>
            <ListHeader>
              <h3 className="column-title">{column.title}</h3>
            </ListHeader>
            <ListCards>
              <ItemList column={column} index={index} />
            </ListCards>
          </List>
        </ColumnWrapper>
      )}
    </Draggable>
  );
});

export default function () {
  const [state, setState] = useState(() => getInitialData());

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.type === "column") {
      // if the list is scrolled it looks like there is some strangeness going on
      // with react-window. It looks to be scrolling back to scroll: 0
      // I should log an issue with the project
      const columnOrder = reorderList(
        state.columnOrder,
        result.source.index,
        result.destination.index
      );
      setState({
        ...state,
        columnOrder,
      });
      return;
    }

    // reordering in same list
    if (result.source.droppableId === result.destination.droppableId) {
      const column = state.columns[result.source.droppableId];
      const items = reorderList(
        column.items,
        result.source.index,
        result.destination.index
      );

      // updating column entry
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [column.id]: {
            ...column,
            items,
          },
        },
      };
      setState(newState);
      return;
    }

    // moving between lists
    const sourceColumn = state.columns[result.source.droppableId];
    const destinationColumn = state.columns[result.destination.droppableId];
    const item = sourceColumn.items[result.source.index];

    // 1. remove item from source column
    const newSourceColumn = {
      ...sourceColumn,
      items: [...sourceColumn.items],
    };
    newSourceColumn.items.splice(result.source.index, 1);

    // 2. insert into destination column
    const newDestinationColumn = {
      ...destinationColumn,
      items: [...destinationColumn.items],
    };
    // in line modification of items
    newDestinationColumn.items.splice(result.destination.index, 0, item);

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn,
      },
    };

    setState(newState);
  }

  return (
    <BoardMain>
      <FilterBar />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <Columns
              className="columns"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {state.columnOrder.map((columnId, index) => (
                <Column
                  key={columnId}
                  column={state.columns[columnId]}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </Columns>
          )}
        </Droppable>
      </DragDropContext>
    </BoardMain>
  );
}
