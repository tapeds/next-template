import { RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import Button from '@/components/buttons/Button';
import clsxm from '@/lib/clsxm';
import { buildPaginationControl } from '@/lib/pagination';

type PaginationState = {
  page: number;
  size: number;
};

type PaginationControlProps<T extends RowData> = {
  data: T[];
  table: Table<T>;
  setParams: React.Dispatch<React.SetStateAction<PaginationState>>;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 *
 * @see https://javascript.plainenglish.io/create-a-pagination-in-a-react-way-df5c6fe1e0c7
 */
export default function PaginationControl<T extends RowData>({
  className,
  data,
  table,
  setParams,
  ...rest
}: PaginationControlProps<T>) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();
  const paginationControl = buildPaginationControl(currentPage, pageCount);

  const handlePageControlClick = (page: string | number) => {
    if (page !== '...') {
      table.setPageIndex((page as number) - 1);
    }
  };

  return (
    <div
      className={clsxm(
        'flex items-center justify-between gap-x-2 md:justify-end',
        className,
      )}
      {...rest}
    >
      <div className='flex items-center gap-1'>
        <Button
          className={clsxm(
            'flex min-w-[38px] justify-center rounded-md !border-none bg-transparent !p-2 !font-semibold text-primary-info-dark drop-shadow-sm',
            'disabled:cursor-not-allowed',
          )}
          disabled={!table.getCanPreviousPage()}
          onClick={() => {
            setParams((params) => ({
              ...params,
              page: Number(params.page) - 1,
            }));
            table.previousPage();
          }}
        >
          <HiChevronLeft size={20} />
        </Button>
        {paginationControl.map((pageIndex, index) => (
          <Button
            key={index}
            className={clsxm(
              'flex min-w-[38px] justify-center rounded-md border-2 border-primary-info-dark bg-white !p-2 !font-semibold text-primary-info-dark drop-shadow-sm',
              currentPage === pageIndex &&
                'bg-primary-info-hover text-typo-white',
            )}
            onClick={() => {
              setParams((params) => ({
                ...params,
                page: pageIndex as number,
              }));
              handlePageControlClick(pageIndex);
            }}
          >
            {pageIndex}
          </Button>
        ))}
        <Button
          color='basic'
          className={clsxm(
            'flex min-w-[38px] justify-center rounded-md !border-none bg-transparent !p-2 !font-semibold text-primary-info-dark drop-shadow-sm ',
            'disabled:cursor-not-allowed',
          )}
          disabled={
            !table.getCanNextPage() ||
            data.length < table.getState().pagination.pageSize
          }
          onClick={() => {
            setParams((params) => ({
              ...params,
              page: Number(params.page) + 1,
            }));
            table.nextPage();
          }}
        >
          <HiChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}
