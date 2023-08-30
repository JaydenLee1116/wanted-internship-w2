export const BASE_GITHUB_API_URL = 'https://api.github.com/repos';

export const GITHUB_API_PATH = Object.freeze({
  getIssues: (owner: string, repo: string, page: number) =>
    `${BASE_GITHUB_API_URL}/${owner}/${repo}/issues?per_page=10&page=${page}`,
  getIssue: (owner: string, repo: string, issueNumber: number) =>
    `${BASE_GITHUB_API_URL}/${owner}/${repo}/issues/${issueNumber}`,
});
