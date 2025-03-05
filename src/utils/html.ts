export const getTagHTMLString = (tag: string) => {
  return `<span class="text-app2 bg-secondary px-[12px] py-[2px] rounded-[30px]">${tag}</span>`;
};
export const getCustomTagsHTMLString = (tags: string[]) => {
  return Array.isArray(tags) ? tags.map((tag) => getTagHTMLString(tag)).join(' ') : tags;
};
export const getCustomTagsHTMLStringOnly = (tags: string[]) => {
  return Array.isArray(tags) ? tags.map((tag) => getTagHTMLString(tag)).join(' ') : tags;
};
export const getContentsFromSpanStrings = (str: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  const spans = doc.querySelectorAll('span');
  return Array.from(spans).map((span) => span.innerHTML);
};

export const getLinkHtml = (text: string, link: string) =>
  `<a font="typography--body-medium" target="_self" href="${link}" class="">${text}</a>`;

export const nameHtml = '<p class="text-primary cursor-pointer underline">{0}</p>';
export const nameHtmlText = '<p class="text-primary">{0}</p>';
export const statusChipHtml =
  '<div class="rounded-[30px] m-2 px-[16px] py-[2px] inline-flex flex-row justify-center items-center {0}"><span>{1}</span></div>';
export const addBtnHtml =
  '<bh-button label="" size="small" left-icon="add" class="[&_button]:w-[32px] [&_button]:h-[32px]"></bh-button>';
export const deleteBtnHtml = (type: string) =>
  `<bh-icon icon="delete" size="medium" class="[&_button]:w-[32px] [&_button]:h-[32px] remove-module-type-${type}" color="critical"></bh-icon>`;
export const deleteSCHtml =
  '<bh-button left-icon="delete" size="medium" class="[&_button]:w-[32px] [&_button]:h-[32px]" type="critical"></bh-button>';
export const consumerRedirectHtml =
  '<bh-button left-icon="open_in_new" size="medium" class="[&_button]:w-[32px] [&_button]:h-[32px] consumer-redirect-{0}" type="primary"></bh-button>';
export const scActionItemsHtml = `<div class="flex flex-row items-center gap-2">${consumerRedirectHtml}${deleteSCHtml}</div>`;
