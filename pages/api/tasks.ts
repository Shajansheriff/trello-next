// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import faker from "faker";

interface Phase {
  id: string;
  name: string;
}

export type Color = "red" | "greeen" | "blue" | "yellow" | "purple";
type Labels = Partial<Record<Color, string>>;
export interface Task {
  id: string;
  name: string;
  createdAt: Date;
  labels?: Labels;
}

interface Data {
  columns: Record<string, { id: string; title: string; items: Task[] }>;
  columnOrder: string[];
}

const colors: Color[] = ["red", "greeen", "blue", "yellow", "purple"];
function getItems(count: number): Task[] {
  return Array.from({ length: count }, (v, k) => {
    const colorIndex = faker.datatype.number({
      min: 0,
      max: colors.length - 1,
    });
    const color = colors[colorIndex];
    return {
      id: faker.datatype.uuid(),
      name: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      labels: color && {
        [color]: faker.commerce.department(),
      },
    };
  });
}

const availableColumns = ["To-do", "In progress", "Done"];

const columnsData = availableColumns.map((title) => ({
  id: faker.datatype.uuid(),
  title,
}));

const columnOrder = columnsData.map(({ id }) => id);

const columns = columnsData.reduce((previous, column) => {
  return {
    ...previous,
    [column.id]: { ...column, items: getItems(faker.datatype.number(50)) },
  };
}, {});

const initial: Data = {
  columns,
  columnOrder,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(initial);
}
