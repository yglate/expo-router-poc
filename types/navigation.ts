export enum NavigationList {
  CHAT_HISTORY_SCREEN = "/(root)/workspace/chatHistory/[id]",
  CHAT_DETAILS_SCREEN = "/(root)/workspace/chatDetails/[id]",
  SEARCH_SCREEN = "/(root)/search/[type]",
  SECTION_LIST_SCREEN = "/(root)/workspace/sectionList/[type]",
}

export type NavigationStackParamList = {
  [NavigationList.CHAT_HISTORY_SCREEN]: {
    id: string;
    data: string;
    chatType?: string;
    sectionType?: string;
  };
  [NavigationList.CHAT_DETAILS_SCREEN]: {
    id: string;
    data: string;
    chatType?: string;
    sectionType?: string;
  };
  [NavigationList.SEARCH_SCREEN]: {
    type: string;
  };
  [NavigationList.SECTION_LIST_SCREEN]: {
    type: string;
  };
};
