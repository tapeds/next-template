'use client';

import { ColumnDef } from '@tanstack/react-table';

import Table from '@/components/table/Table';
import Typography from '@/components/Typography';

type Ttable = {
  id: string;
  nama: string;
};

const data: Ttable[] = [
  {
    id: '1',
    nama: 'Nama 1',
  },
  {
    id: '2',
    nama: 'Nama 2',
  },
  {
    id: '3',
    nama: 'Nama 3',
  },
];

export default function TableSandbox() {
  const columns: ColumnDef<Ttable>[] = [
    {
      accessorKey: 'id',
      header: 'No',
      cell: (props) => <span>{`${props.getValue()}`}</span>,
    },
    {
      accessorKey: 'nama',
      header: 'Nama',
      cell: (props) => <span>{`${props.getValue()}`}</span>,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
  ];
  return (
    <main className='flex min-h-screen items-center justify-center bg-slate-200'>
      <div className='flex flex-col'>
        <Typography
          as='h1'
          variant='h3'
          font='Inter'
          weight='bold'
          className='text-gray-900'
        >
          Form Sandbox
        </Typography>
        <Table data={data} columns={columns} />
      </div>
    </main>
  );
}
