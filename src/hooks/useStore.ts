import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface RepoOwnerNameStore {
  repoOwnerName: string;
  changeRepoOwnerName: (newRepoOwnerName: string) => void;
  initializeRepoOwnerName: () => void;
}

export const useRepoOwnerNameStore = create<RepoOwnerNameStore>()(
  devtools(set => ({
    repoOwnerName: '',
    changeRepoOwnerName: newRepoOwnerName => set({ repoOwnerName: newRepoOwnerName }),
    initializeRepoOwnerName: () => set({ repoOwnerName: '' }),
  })),
);

interface RepoNameStore {
  repoName: string;
  changeRepoName: (newRepoName: string) => void;
  initializeRepoName: () => void;
}

export const useRepoNameStore = create<RepoNameStore>()(
  devtools(set => ({
    repoName: '',
    changeRepoName: newRepoName => set({ repoName: newRepoName }),
    initializeRepoName: () => set({ repoName: '' }),
  })),
);

interface IsSearchModeStore {
  isSearchMode: boolean;
  toggleIsSearchMode: () => void;
}

export const useIsSearchModeStore = create<IsSearchModeStore>()(
  devtools(set => ({
    isSearchMode: true,
    toggleIsSearchMode: () => set(state => ({ isSearchMode: !state.isSearchMode })),
  })),
);

interface PageNumberStore {
  pageNumber: number;
  increasePageNumber: () => void;
  initializePageNumber: () => void;
}

export const usePageNumberStore = create<PageNumberStore>()(
  devtools(set => ({
    pageNumber: 1,
    increasePageNumber: () => set(state => ({ pageNumber: state.pageNumber + 1 })),
    initializePageNumber: () => set({ pageNumber: 1 }),
  })),
);
