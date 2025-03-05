import { BhTabularList } from '@bh-digitalsolutions/ui-toolkit-react/dist/components';
import { useMemo } from 'react';
import { bhTabularListOptions, mapOptionWidth } from '../constants/table';
import {
  BhTabularListHeader,
  BhTabularListOption,
} from '@bh-digitalsolutions/ui-toolkit/dist/types/components/bh-tabular-list/bh-tabular-list.types';

type onClick1 = (e: CustomEvent) => void;
type onClick2 = () => void;
type onClickPromise = (e: CustomEvent) => Promise<void>;

export type TablePropsT = {
  onClick?: onClick1 | onClick2 | onClickPromise;
  onHeaderCtaClick?: onClick1 | onClick2 | onClickPromise;
  onbhEventSelected?: onClick1 | onClick2 | onClickPromise;
  schema: any[];
  payload: any;
  id: string;
  isLoading?: boolean;
  testId?: string;
  widthOffset?: number;
  options?: BhTabularListOption;
  header?: BhTabularListHeader;
  selectedItems?: any;
};

export const Table: React.FC<TablePropsT> = ({
  onClick,
  onHeaderCtaClick,
  onbhEventSelected: onRowSelectionChange,
  schema,
  payload,
  id,
  isLoading = false,
  widthOffset = 160,
  options = {},
  header,
  selectedItems,
}) => {
  const width = window.innerWidth - widthOffset;

  const tableSchema = useMemo(() => mapOptionWidth(schema, width), [width]);
  const optString = { ...bhTabularListOptions, ...options };
  return (
    <BhTabularList
      className='w-full ofse-bh-tabular-list-container'
      id={id}
      schema={tableSchema}
      payload={payload}
      option={optString}
      onBhEventAppended={onClick}
      isLoading={isLoading}
      data-testid={id}
      header={header}
      onBhEventCtaClick={onHeaderCtaClick}
      onBhEventSelected={onRowSelectionChange}
      selectedItems={selectedItems}
    />
  );
};
