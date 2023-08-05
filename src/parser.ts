/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { PullRequestResponseSchema } from './types/response';

export const parseRawData = (rawData: PullRequestResponseSchema) => {
  const data = {
    repo: rawData.head.repo?.name,
    user: rawData.user.login,
    url: rawData.html_url,
    mergedAt: rawData.merged_at,
    title: rawData.title,
    commitCount: rawData.commits,
    changedFiles: rawData.changed_files,
    additions: rawData.additions,
    deletions: rawData.deletions,
  };
  const row = [
    data.mergedAt,
    data.repo,
    data.user,
    data.title,
    data.url,
    data.commitCount,
    data.changedFiles,
    data.additions,
    data.deletions,
  ].map(value => String(value));
  return { data, row };
};
