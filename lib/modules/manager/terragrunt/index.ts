import { GitTagsDatasource } from '../../datasource/git-tags';
import { GithubTagsDatasource } from '../../datasource/github-tags';
import { GitlabTagsDatasource } from '../../datasource/gitlab-tags';
import { TerraformModuleDatasource } from '../../datasource/terraform-module';

export { extractPackageFile } from './extract';

export const supportedDatasources = [
  GitTagsDatasource.id,
  GithubTagsDatasource.id,
  GitlabTagsDatasource.id,
  TerraformModuleDatasource.id,
];

export const defaultConfig = {
  commitMessageTopic: 'Terragrunt dependency {{depName}}',
  fileMatch: ['(^|/)terragrunt\\.hcl$'],
};
