import { RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

import clsxm from '@/lib/clsxm';

type FilterProps<T extends RowData> = {
  table: Table<T>;
  placeholder?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Filter<T extends RowData>({
  className,
  table,
  placeholder = 'Cari Data',
  ...rest
}: FilterProps<T>) {
  const [filter, setFilter] = React.useState('');

  const handleClearFilter = () => {
    table.setGlobalFilter('');
    setFilter('');
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      table.setGlobalFilter(filter);
    }, 360);
    return () => clearTimeout(timeout);
  }, [filter, table]);

  return (
    <div className={clsxm('relative', className)} {...rest}>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <IoIosSearch className='text-3xl text-[#9AA2B1]' />
      </div>
      <input
        type='text'
        value={filter ?? ''}
        onChange={(e) => {
          setFilter(String(e.target.value));
        }}
        className={clsxm(
          'block w-full rounded-lg py-2 pl-12 pr-16 text-base shadow-sm transition duration-100',
          'border-1 border-typo-outline-1 focus:border-typo-outline-1 focus:ring-0',
          'text-typo-main placeholder:text-[#9AA2B1]',
        )}
        placeholder={placeholder}
      />
      {table.getState().globalFilter !== '' && (
        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <button type='button' onClick={handleClearFilter} className='p-1'>
            <IoClose className='text-xl text-typo-main' />
          </button>
        </div>
      )}
    </div>
  );
}
