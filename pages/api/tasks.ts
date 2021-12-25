// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import faker from 'faker';

interface Phase {
  id: string,
  name: string,
}
interface Task {
  id: string;
  name: string,
  createdAt: Date,
}

interface Data {
  columns: Record<string, { id: string, title: string, items: Task[]}>,
  columnOrder: string[],
}


let uniqueId = 0;
function getItems(count: number): Task[] {
  return Array.from({ length: count }, (v, k) => {
    const id = uniqueId++;
    return {
      id: faker.datatype.uuid(),
      name: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
    };
  });
}

const availableColumns = ['To-do', 'In progress', 'Done']

const columnsData = availableColumns.map((title) => (
  {
    id: faker.datatype.uuid(),
    title
  }));

const columnOrder = columnsData.map(({ id }) => id)

const columns = columnsData.reduce((previous, column) => {
  return {
    ...previous,
    [column.id]: {...column, items: getItems(faker.datatype.number(50))}
  }
}, {});


const initial: Data = {
  columns,
  columnOrder,
};

export default function(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(initial)
}
