import { BhTabularListSchemaPartialOption } from '@bh-digitalsolutions/ui-toolkit/dist/types/components/bh-tabular-list/bh-tabular-list.types';
import {
  addBtnHtml,
  deleteBtnHtml,
  getLinkHtml,
  nameHtml,
  statusChipHtml,
  // deleteSCHtml,
  // consumerRedirectHtml,
  nameHtmlText,
} from '../utils/html';
import { texts } from '../utils/text';
import { commonTableOptions } from './table';

/*
 * @section Device Table Schema
 */

const DeviceNameSchema = {
  label: texts.name,
  prop: 'name',
  html: {
    template: getLinkHtml('{0}', '/devices/{1}'),
    keys: ['name', 'id'],
    events: [{ type: 'click', func: 'event.preventDefault(); event.key="name"' }],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.13,
  },
};

const DeviceIdSchema = {
  label: texts.id,
  prop: 'id',
  option: {
    ...commonTableOptions,
    width: 100,
    widthRatio: 0.15,
  },
};

const DevicestatusSchema = {
  label: texts.status,
  prop: 'status',
  html: {
    template: statusChipHtml,
    keys: ['status', 'status'],
  },
  option: {
    ...commonTableOptions,
    width: 130,
    widthRatio: 0.1,
  },
};

const DeviceStatusUpdateTimeSchema = {
  label: texts.statusUpdateTime,
  prop: 'statusUpdateTime',
  option: {
    ...commonTableOptions,
    width: 150,
    widthRatio: 0.15,
  },
};
/*

INFO - Can be used later

const DeviceGroupSchema = {
  label: texts.deviceGroup,
  prop: 'deviceGroupId',
  option: {
    ...commonTableOptions,
    width: 140,
    widthRatio: 0.14,
  },
};
const SystemTagsSchema = {
  label: texts.systemTags,
  prop: 'systemTags',
  option: {
    ...commonTableOptions,
    widthRatio: 0.4,
  },
};
*/
const DeviceCustomTagsSchema = {
  label: texts.tags,
  prop: 'tags',
  option: {
    ...commonTableOptions,
    widthRatio: 0.42,
  },
};

export const deviceTableSchema = [
  DeviceNameSchema,
  DeviceIdSchema,
  DevicestatusSchema,
  DeviceStatusUpdateTimeSchema,
  // DeviceGroupSchema,
  // SystemTagsSchema,
  DeviceCustomTagsSchema,
];

/*
 * @section Device Module Table Schema
 */
const DevModIdSchema = {
  label: texts.id,
  prop: 'id',
  option: {
    ...commonTableOptions,
    widthRatio: 0.1,
  },
};
// const DevModModuleTypeSchema = {
//   label: 'Type',
//   prop: 'type',
//   option: {
//     ...commonTableOptions,
//     widthRatio: 0.1,
//   },
// };

const DevModConnectionStatusSchema = {
  label: texts.status,
  prop: 'status',
  html: {
    template: statusChipHtml,
    keys: ['status', 'status'],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.13,
  },
};
const DevModStatusUpdateTimeSchema = {
  label: texts.statusUpdateTime,
  prop: 'statusUpdateTime',
  option: {
    ...commonTableOptions,
    widthRatio: 0.15,
  },
};
export const DevModNameSchema = {
  label: texts.name,
  prop: 'name',
  html: {
    template: getLinkHtml('{0}', '/modules/{1}'),
    keys: ['name', 'id'],
    events: [{ type: 'click', func: 'event.preventDefault();event.name=true;' }],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.15,
  },
};
export const deviceModuleTableSchema = [
  DevModNameSchema,
  DevModIdSchema,
  DevModConnectionStatusSchema,
  DevModStatusUpdateTimeSchema,
];

/*
 * @section Module Table Schema
 */
const ModuleIdSchema = {
  label: 'ID',
  prop: 'id',
  option: {
    ...commonTableOptions,
    widthRatio: 0.2,
  },
};

const ModuleNameSchema = {
  label: 'Name',
  prop: 'name',
  html: {
    template: getLinkHtml('{0}', '/modules/{1}'),
    keys: ['name', 'id'],
    events: [{ type: 'click', func: 'event.preventDefault();' }],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.2,
  },
};

const ModuleTypeSchema = {
  label: 'Type',
  prop: 'type',
  option: {
    ...commonTableOptions,
    widthRatio: 0.1,
  },
};

/* const ModuleTagsSchema = {
  label: 'Tags',
  prop: 'tags',
  option: {
    ...commonTableOptions,
    widthRatio: 0.5,
  },
};
 */
const ModuleDescriptionSchema = {
  label: 'Description',
  prop: 'description',
  option: {
    ...commonTableOptions,
    widthRatio: 0.5,
  },
};

export const modulesSchema = [ModuleNameSchema, ModuleIdSchema, ModuleTypeSchema, ModuleDescriptionSchema];

/*
 * @section DeviceGroup Table Schema
 */
const DeviceGroupIdSchema = {
  label: texts.id,
  prop: 'id',
  html: {
    template: getLinkHtml('{0}', '/device-groups/{1}'),
    keys: ['id', 'id'],
    events: [{ type: 'click', func: 'event.preventDefault(); event.id=true;' }],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.25,
  },
};

const DeviceGroupDescriptionSchema = {
  label: 'Description',
  prop: 'description',
  option: {
    ...commonTableOptions,
    widthRatio: 0.25,
  },
};

const DeviceGroupUpdatedBy = {
  label: 'Updated By',
  prop: 'updatedBy', //'createdBy',// TODO: to update back
  option: {
    ...commonTableOptions,
    widthRatio: 0.25,
  },
};

const DeviceGroupUpdatedAt = {
  label: 'Updated At',
  prop: 'updatedAt', //'createdAt',// TODO: to update back
  option: {
    ...commonTableOptions,
    widthRatio: 0.25,
  },
};

export const deviceGroupsSchema = [
  DeviceGroupIdSchema,
  DeviceGroupDescriptionSchema,
  DeviceGroupUpdatedBy,
  DeviceGroupUpdatedAt,
];

/*
 * @section DataHub Table Schema
 */
const DatahubNameSchema = {
  label: texts.name,
  prop: 'name',
  html: {
    template: getLinkHtml('{0}', '/datahubs/{1}'),
    keys: ['name', 'id'],
    events: [{ type: 'click', func: 'event.preventDefault();event.key="name"' }],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.19,
  },
};

const DatahubIdSchema = {
  label: texts.id,
  prop: 'id',
  option: {
    ...commonTableOptions,
    width: 100,
    widthRatio: 0.23,
  },
};
const DatahubConnectionStatusSchema = {
  label: texts.connectionStatus,
  prop: 'status',
  html: {
    template: statusChipHtml,
    keys: ['status', 'status'],
  },
  option: {
    ...commonTableOptions,
    width: 130,
    widthRatio: 0.08,
  },
};
const DatahubStatusUpdateTimeSchema = {
  label: texts.statusUpdateTime,
  prop: 'statusUpdateTime',
  option: {
    ...commonTableOptions,
    width: 150,
    widthRatio: 0.15,
  },
};
const DatahubTagsSchema = {
  label: texts.tags,
  prop: 'tagsChips',
  option: {
    ...commonTableOptions,
    widthRatio: 0.35,
  },
};

export const dataHubsTableSchema = [
  DatahubNameSchema,
  DatahubIdSchema,
  DatahubConnectionStatusSchema,
  DatahubStatusUpdateTimeSchema,
  DatahubTagsSchema,
];

/*
 * @section Device Consumer Schema
 */
export const deviceConsumerTableSchema = [
  {
    label: texts.name,
    prop: 'name',
    html: {
      template: getLinkHtml('{0}', '/consumers/{1}'),
      keys: ['name', 'id'],
      events: [{ type: 'click', func: 'event.preventDefault();event.name=true;' }],
    },
    option: {
      ...commonTableOptions,
      widthRatio: 0.2,
    },
  },
  {
    label: texts.id,
    prop: 'id',
    option: {
      ...commonTableOptions,
      widthRatio: 0.2,
    },
  },
  {
    label: texts.tags,
    prop: 'tagsChips',
    option: {
      ...commonTableOptions,
      widthRatio: 0.6,
    },
  },
];

/*
 * @section DataHubConsumer Table Schema
 */
export const datahubConsumerTableSchema = [
  {
    label: 'Name',
    prop: 'name',
    html: {
      template: nameHtml,
      keys: ['name'],
      events: [{ type: 'click', func: 'event.preventDefault();event.name=true;' }],
    },
    option: {
      ...commonTableOptions,
      widthRatio: 0.2,
    },
  },
  {
    label: 'ID',
    prop: 'id',
    option: {
      ...commonTableOptions,
      widthRatio: 0.2,
    },
  },
  {
    label: 'Tags',
    prop: 'tagsChips',
    option: {
      ...commonTableOptions,
      widthRatio: 0.6,
    },
  },
];

/*
 * @section Consumer Device Table Schema
 */
const ConDevNameSchema = {
  label: texts.name,
  prop: 'name',
  html: {
    template: nameHtml,
    keys: ['name'],
    events: [{ type: 'click', func: 'event.preventDefault();event.name=true;' }],
  },
  option: { ...commonTableOptions, widthRatio: 0.2 },
};

const ConDevIdSchema = {
  label: texts.id,
  prop: 'id',
  option: { ...commonTableOptions, widthRatio: 0.2 },
};

const ConDevCustomTagsSchema = {
  label: texts.tags,
  prop: 'tagsChips',
  option: { ...commonTableOptions, widthRatio: 0.4 },
};
export const consumerDeviceTableSchema = [ConDevNameSchema, ConDevIdSchema, ConDevCustomTagsSchema];

/*
 * @section ConsumerDatahub Table Schema
 */
const ConDhNameSchema = {
  label: texts.name,
  prop: 'name',
  html: {
    template: nameHtml,
    keys: ['name'],
    events: [{ type: 'click', func: 'event.preventDefault();event.name=true;' }],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.24,
  },
};

const ConDhIdSchema = {
  label: texts.id,
  prop: 'id',
  option: {
    ...commonTableOptions,
    width: 100,
    widthRatio: 0.26,
  },
};
const ConDhConnectionStatusSchema = {
  label: texts.status,
  prop: 'status',
  html: {
    template: statusChipHtml,
    keys: ['status', 'status'],
  },
  option: {
    ...commonTableOptions,
    width: 90,
    widthRatio: 0.09,
  },
};
const ConDhStatusUpdateTimeSchema = {
  label: texts.statusUpdateTime,
  prop: 'statusUpdateTime',
  option: {
    ...commonTableOptions,
    width: 150,
    widthRatio: 0.15,
  },
};
const ConDhCustomTagsSchema = {
  label: texts.tags,
  prop: 'customTagsChips',
  option: {
    ...commonTableOptions,
    widthRatio: 0.22,
  },
};
export const ConDhremoveSchema = {
  label: '',
  prop: 'action',
  key: 'remove',
  html: {
    template: deleteBtnHtml('{1}'),
    events: [{ type: 'click', func: 'event.preventDefault();event.remove=true' }],
    keys: ['id', 'type'],
  },
  option: {
    ...commonTableOptions,
    width: 150,
    isSortable: false,
    isSearchable: false,
    widthRatio: 0.12,
  },
};

export const consumerDataHubTableSchema = [
  ConDhNameSchema,
  ConDhIdSchema,
  ConDhConnectionStatusSchema,
  ConDhStatusUpdateTimeSchema,
  ConDhCustomTagsSchema,
];

/**
 * @section Consumer Add DataHub Table Schema
 */

const ConAddDhNameSchema = {
  label: texts.name,
  prop: 'name',
  html: {
    template: getLinkHtml('{0}', '/datahubs/{1}'),
    keys: ['name', 'id'],
    events: [{ type: 'click', func: 'event.preventDefault();' }],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.2,
  },
};

const ConAddDhIdSchema = {
  label: texts.id,
  prop: 'id',
  option: {
    ...commonTableOptions,
    width: 100,
    widthRatio: 0.28,
  },
};
const ConAddDhConnectionStatusSchema = {
  label: texts.connectionStatus,
  prop: 'status',
  html: {
    template: statusChipHtml,
    keys: ['status', 'status'],
  },
  option: {
    ...commonTableOptions,
    width: 90,
    widthRatio: 0.09,
  },
};
const ConAddDhStatusUpdateTimeSchema = {
  label: texts.statusUpdateTime,
  prop: 'statusUpdateTime',
  option: {
    ...commonTableOptions,
    width: 150,
    widthRatio: 0.15,
  },
};
const ConAddDhCustomTagsSchema = {
  label: texts.tags,
  prop: 'customTagsChips',
  option: {
    ...commonTableOptions,
    widthRatio: 0.18,
  },
};

export const addSchema = {
  label: '',
  prop: 'action',
  html: {
    template: addBtnHtml,
    events: [{ type: 'click', func: 'event.preventDefault();event.add=true' }],
    keys: ['id'],
  },
  option: {
    ...commonTableOptions,
    width: 150,
    isSortable: false,
    isSearchable: false,
    widthRatio: 0.04,
  },
};
export const consumerAddDataHubTableSchema = [
  ConAddDhNameSchema,
  ConAddDhIdSchema,
  ConAddDhConnectionStatusSchema,
  ConAddDhStatusUpdateTimeSchema,
  ConAddDhCustomTagsSchema,
  addSchema,
];

/*
 * @section Service Account Schema
 */

const ScIdSchema = {
  label: 'ID',
  prop: 'id',
  html: {
    template: nameHtmlText,
    keys: ['id'],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.24,
  },
};

const ScStatusSchema = {
  label: 'Status',
  prop: 'status',
  html: {
    template: statusChipHtml,
    keys: ['status', 'status'],
  },
  option: {
    ...commonTableOptions,
    widthRatio: 0.24,
  },
};

const ScAllocationTime = {
  label: 'Allocation Time',
  prop: 'allocationTime',
  option: {
    ...commonTableOptions,
    widthRatio: 0.24,
  },
};

const ScUpdatedBy = {
  label: 'Updated By',
  prop: 'updatedBy',
  option: {
    ...commonTableOptions,
    widthRatio: 0.2,
  },
};

/* const ScConsumerRedirectBtn = {
  label: '',
  prop: 'consumer',
  key: 'removeconsumerRedirect',
  html: {
    template: consumerRedirectHtml,
    keys: ['status'],
    events: [{ type: 'click', func: 'event.preventDefault();event.consumerDetail=true' }],
  },
  option: {
    ...commonTableOptions,
    isSortable: false,
    isSearchable: false,
    widthRatio: 0.05,
  },
};

const ScDeleteBtn = {
  label: '',
  prop: 'action',
  key: 'remove',
  html: {
    template: deleteSCHtml,
    events: [{ type: 'click', func: 'event.preventDefault();event.remove=true' }],
  },
  option: {
    ...commonTableOptions,
    isSortable: false,
    isSearchable: false,
    widthRatio: 0.05,
  },
}; */

export const serviceAccountsSchema = [
  ScIdSchema,
  ScStatusSchema,
  ScAllocationTime,
  ScUpdatedBy,
  // ScConsumerRedirectBtn,
  // ScDeleteBtn,
];

/*
 * @section Consumer Table Schema
 */
const ConsumerIdSchema = {
  label: texts.id,
  prop: 'id',
  option: { ...commonTableOptions, width: 250, widthRatio: 0.2 },
};
const ConsumerNameSchema = {
  label: texts.name,
  prop: 'name',
  html: {
    template: getLinkHtml('{0}', '/consumers/{1}'),
    keys: ['name', 'id'],
    events: [{ type: 'click', func: 'event.preventDefault();' }],
  },
  option: { ...commonTableOptions, width: 250, widthRatio: 0.15 },
};

const ConsumerTagsSchema = {
  label: texts.tags,
  prop: 'tagsChips',
  option: { ...commonTableOptions, width: 840, widthRatio: 0.65 },
};

export const consumerTableSchema = [ConsumerNameSchema, ConsumerIdSchema, ConsumerTagsSchema];

/*
 * @section Module Table Schema
 */

const AddModIdSchema = {
  label: texts.id,
  prop: 'id',
  option: { ...commonTableOptions, widthRatio: 0.2 },
};

const AddModNameSchema = {
  label: texts.name,
  prop: 'name',
  option: { ...commonTableOptions, width: 200, widthRatio: 0.15 },
};

const AddModTypeSchema = {
  label: texts.type,
  prop: 'type',
  option: { ...commonTableOptions, width: 100, widthRatio: 0.1 },
};

const AddModTagsSchema = {
  label: texts.tags,
  prop: 'tags',
  html: {
    template: '<span>{0}</span>',
    keys: ['tags'],
  },
  option: { ...commonTableOptions, width: 600, widthRatio: 0.4 },
};

const AddModActionSchema = {
  label: '',
  prop: 'action',
  html: {
    template:
      '<bh-button label="Add" size="small" class="p-0 m-0 relative top-[-6px] [&_button]:h-[32px]"></bh-button>',
    events: [{ type: 'click', func: 'event.preventDefault();' }],
    keys: ['id'],
  },
  option: {
    ...commonTableOptions,
    width: 150,
    isSortable: false,
    isSearchable: false,
  },
};

const historyCommonOptions: BhTabularListSchemaPartialOption & { isSearchable: boolean } = {
  isFixed: true,
  width: 230,
  isCustomSort: true,
  overflowWrap: true,
  isSortable: true,
  columnWithUnit: 'px',
  isSearchable: true,
};

const historyIdSchema = {
  label: texts.id,
  prop: 'id',
  option: { ...historyCommonOptions, widthRatio: 0.2 },
  html: {
    template: getLinkHtml('{0}', '/devices/{1}'),
    keys: ['id'],
    events: [{ type: 'click', func: 'event.preventDefault();' }],
  },
};
const statusSchema = {
  label: texts.status,
  prop: 'status',
  html: {
    template: statusChipHtml,
    keys: ['status', 'status'],
  },
  option: { ...historyCommonOptions, widthRatio: 0.2 },
};
const statusReasonSchema = {
  label: texts.statusReason,
  prop: 'statusReason',
  html: {
    template: '<span>{0}</span>',
    keys: ['statusReason'],
  },
  option: { ...historyCommonOptions, widthRatio: 0.2 },
};
const statusUpdateTimeSchema = {
  label: texts.statusReasonUpdateTime,
  prop: 'statusReasonUpdatedAt',
  option: { ...historyCommonOptions, widthRatio: 0.2 },
};
const createdAtSchema = {
  label: texts.createdAt,
  prop: 'createdAt',
  option: { ...historyCommonOptions, widthRatio: 0.2 },
};
/** ----------- schema --------------- */
export const moduleDeploymentHistoryTableSchema = [
  historyIdSchema,
  statusSchema,
  statusReasonSchema,
  statusUpdateTimeSchema,
  createdAtSchema,
];

export const moduleTableSchema = [
  AddModIdSchema,
  AddModNameSchema,
  AddModTypeSchema,
  AddModTagsSchema,
  AddModActionSchema,
];
export const deviceModuleAddSchema = [AddModNameSchema, AddModIdSchema, AddModTypeSchema, AddModTagsSchema, addSchema];
export const deviceModuleRemoveSchema = [
  DevModNameSchema,
  { ...AddModIdSchema, prop: 'id' },
  AddModTypeSchema,
  ConDhremoveSchema,
];
export const deviceDeployedModuleSchema = [DevModNameSchema, { ...AddModIdSchema, prop: 'moduleId' }, AddModTypeSchema];

export const eventLogSchema = [
  { ...DeviceIdSchema, option: { ...commonTableOptions, widthRatio: 0.1 } },
  {
    label: texts.eventTime,
    prop: 'timestamp',
    option: { ...commonTableOptions, widthRatio: 0.15 },
  },
  {
    label: texts.eventType,
    prop: 'type',
    option: { ...commonTableOptions, widthRatio: 0.15 },
  },
  {
    label: texts.eventMessage,
    prop: 'message',
    option: { ...commonTableOptions, widthRatio: 0.35 },
  },
  {
    label: 'User',
    prop: 'user',
    option: { ...commonTableOptions, widthRatio: 0.2 },
  },
];
