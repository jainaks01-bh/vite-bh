import {
  BhTabularListOption,
  BhTabularListSchemaPartialOption,
} from '@bh-digitalsolutions/ui-toolkit/dist/types/components/bh-tabular-list/bh-tabular-list.types';
import { BhTabularListSchema } from '@bh-digitalsolutions/ui-toolkit/dist/types/components/bh-tabular-list/bh-tabular-list.types';

export const bhTabularListOptions: BhTabularListOption = {
  spacing: 'medium',
  paginationMode: 'auto',
  searchMode: 'column',
  paginationOptions: [10, 25, 100],
  hideCellVerticalBorder: false,
  dataLoadingMode: 'sync',
  columnReorderingDisabled: true,
  freezeFirstColumn: true,
};
export const bhTabularListOptionsString = JSON.stringify(bhTabularListOptions);
export const modulesTableOptions = {
  ...bhTabularListOptions,
  paginationOptions: [3, 5, 10, 25, 100],
};
export const modulesTableOptionsString = JSON.stringify(modulesTableOptions);

export const deploymentHistoryTableOptions = {
  ...bhTabularListOptions,
  paginationOptions: [10, 25, 100],
};
export const deploymentHistoryTableOptionsString = JSON.stringify(deploymentHistoryTableOptions);

export const defaultTabularListData = {
  data: [],
  length: 0,
};

export const commonTableOptions: BhTabularListSchemaPartialOption & { widthRatio: number } = {
  isFixed: false,
  width: 200,
  isCustomSort: true,
  overflowWrap: true,
  isSortable: true,
  widthRatio: 1,
  columnWithUnit: 'px',
};

/**
 * Maps the width of the table columns based on the screen width.
 * @param {typeof deviceTableSchema} schema - The schema of the table.
 * @param {number} width - The screen width.
 * @returns {typeof deviceTableSchema} The schema with the updated width of the table columns.
 */
export const mapOptionWidth = (schema: any[], width: number): BhTabularListSchema => {
  return schema.map((item) => {
    // if (!item.option.widthRatio) return item;
    return {
      ...item,
      option: {
        ...item.option,
        width: width * (item.option.widthRatio || 1),
        columnWithUnit: 'px',
      },
    };
  });
};
