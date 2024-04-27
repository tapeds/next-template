'use client';
import { flexRender, RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type THeadProps<T extends RowData> = {
  omitSort: boolean;
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function THead<T extends RowData>({
  className,
  omitSort,
  table,
  ...rest
}: THeadProps<T>) {
  return (
    <thead
      className={clsxm(
        'border-b-2 border-typo-inline bg-reeva-primary-4 text-white',
        className,
      )}
      {...rest}
    >
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className='divide-x-2 divide-typo-inline'>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              scope='col'
              className={clsxm(
                'group py-1 pr-3 text-left text-sm font-semibold sm:text-base',
                !omitSort && header.column.getCanSort() ? 'pl-4' : 'pl-[30px]',
              )}
            >
              {header.isPlaceholder ? null : (
                <div
                  className={clsxm(
                    'relative flex items-center justify-center gap-2 py-1',
                    !omitSort && header.column.getCanSort()
                      ? 'cursor-pointer select-none'
                      : '',
                  )}
                  onClick={
                    omitSort
                      ? () => null
                      : header.column.getToggleSortingHandler()
                  }
                >
                  {!omitSort &&
                  header.column.getCanSort() &&
                  !header.column.getIsSorted() ? (
                    <AiFillCaretDown className='w-1.5 rotate-180 fill-transparent group-hover:fill-typo-white' />
                  ) : (
                    {
                      asc: (
                        <AiFillCaretDown className='w-1.5 rotate-180 fill-typo-white' />
                      ),
                      desc: (
                        <AiFillCaretDown className='w-1.5 fill-typo-white' />
                      ),
                    }[header.column.getIsSorted() as string] ?? null
                  )}
                  <Typography
                    font='Futura'
                    variant='t'
                    weight='bold'
                    className='text-white'
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </Typography>
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
