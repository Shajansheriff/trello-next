// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import faker from "faker";

export type Color = "red" | "greeen" | "blue" | "yellow" | "purple";
type Labels = Partial<Record<Color, string>>;
export interface Task {
  id: string;
  name: string;
  createdAt: Date;
  labels?: Labels;
  commentsCount?: number;
  totalSubTasksCount?: number;
  completedSubTasksCount?: number;
}

interface Data {
  columns: Record<string, { id: string; title: string; items: Task[] }>;
  columnOrder: string[];
}

const colors: Color[] = ["red", "greeen", "blue", "yellow", "purple"];
function getItems(count: number): Task[] {
  return Array.from({ length: count }, (v, index) => {
    const colorIndex = faker.datatype.number({
      min: 0,
      max: colors.length - 1,
    });
    const color = colors[colorIndex];
    return {
      id: faker.datatype.uuid(),
      name: faker.random.words(faker.datatype.number({ min: 1, max: 10 })),
      createdAt: faker.date.recent(),
      labels: color && {
        [color]: faker.commerce.department(),
      },
      commentsCount: [1, 5, 11, 15, 21, 35].includes(index)
        ? faker.datatype.number({ min: 1, max: 7 })
        : undefined,
      totalSubTasksCount: [1, 4, 20, 10, 15, 35, 40].includes(index)
        ? faker.datatype.number({ min: 3, max: 7 })
        : undefined,
      completedSubTasksCount: [1, 4, 20, 10, 15, 35, 40].includes(index)
        ? faker.datatype.number({ min: 0, max: 3 })
        : undefined,
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
