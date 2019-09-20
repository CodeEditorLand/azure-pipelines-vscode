export class Messages {
    public static acquireTokenFromRefreshTokenFailed: string = 'Acquiring token with refresh token failed. Error: %s.';
    public static addYmlFile: string = 'Add Azure Pipelines YAML definition.';
    public static analyzingRepo: string = 'Analyzing your repo';
    public static appKindIsNotSupported: string = 'App type "%s" is not yet supported.';
    public static azureAccountExntesionUnavailable: string = 'Azure-Account extension could not be fetched. Please ensure it\'s installed and activated.';
    public static azureLoginRequired: string = 'Please sign in to your Azure account first.';
    public static branchRemoteMissing: string = `The current branch doesn't have a tracking branch, and the selected repository has no remotes. We're unable to create a remote tracking branch. Please [set a remote tracking branch](https://git-scm.com/docs/git-branch#Documentation/git-branch.txt---track) first, and then try this again.`;
    public static browsePipeline: string = 'Browse Pipeline';
    public static cannotAddFileRemoteMissing: string = 'Couldn\'t add YAML file to your repo because the remote isn\'t set';
    public static cannotIdentifyRespositoryDetails: string = 'Couldn\'t get repository details. Ensure your repo is hosted on [Azure Repos](https://docs.microsoft.com/azure/devops/repos/get-started) or [GitHub](https://guides.github.com/activities/hello-world/).';
    public static commitAndPush: string = 'Commit & push';
    public static commitFailedErrorMessage: string =`Commit failed due to error: %s`;
    public static configuringPipelineAndDeployment: string = 'Configuring pipeline and proceeding to deployment...';
    public static couldNotAuthorizeEndpoint: string = 'Couldn\'t authorize endpoint for use in Azure Pipelines.';
    public static creatingAzureDevOpsOrganization: string = 'Creating Azure DevOps organization.';
    public static creatingAzureServiceConnection: string = 'Connecting Azure Pipelines with your subscription: %s';
    public static creatingGitHubServiceConnection: string = 'Creating GitHub service connection';
    public static discardPipeline: string = 'Discard pipeline';
    public static enterAzureDevOpsOrganizationName: string = 'Azure DevOps organization name where your pipeline will be hosted';
    public static enterGitHubPat: string = 'Enter GitHub personal access token (PAT)';
    public static failedToCreateAzureDevOpsProject: string = 'Couldn\'t create a project in the Azure DevOps organization. Error: %s.';
    public static failedToCreateAzurePipeline: string = 'Couldn\'t configure pipeline. Error: %s';
    public static failedToDetermineAzureRepoDetails: string = 'Failed to determine Azure Repo details from remote url. Please ensure that the remote points to a valid Azure Repos url.';
    public static githubPatTokenErrorMessage: string = 'GitHub PAT token cannot be empty.';
    public static githubPatTokenHelpMessage: string = 'GitHub personal access token (PAT) with following permissions: full access to repository webhooks and services, read and write access to all repository data.';
    public static modifyAndCommitFile: string = 'Modify and save your YAML file. %s will commit this file, push the branch \'%s\' to remote \'%s\' and proceed with deployment.';
    public static noAgentQueueFound: string = 'No agent pool found named "%s".';
    public static notAGitRepository: string = 'Selected workspace is not a [Git](https://git-scm.com/docs/git) repository. Please select a Git repository.';
    public static notAzureRepoUrl: string = 'The repo isn\'t hosted with Azure Repos.';
    public static noWorkSpaceSelectedError: string = 'Please select a workspace folder to configure pipeline.';
    public static operationCancelled: string = 'Operation cancelled.';
    public static operationTimedOut: string = 'Operation timed out.';
    public static organizationNameReservedMessage: string = 'The organization name %s isn\'t available. Please try another organization name.';
    public static organizationNameStaticValidationMessage: string = 'Organization names must start and end with a letter or number and can contain only letters, numbers, and hyphens.';
    public static pipelineSetupSuccessfully: string = 'Pipeline set up successfully!';
    public static remoteRepositoryNotConfigured: string = 'Remote repository is not configured. This extension is compatible with [Azure Repos](https://docs.microsoft.com/en-us/azure/devops/repos/get-started) or [GitHub](https://guides.github.com/activities/hello-world/).';
    public static resourceIdMissing: string = 'Required argument "resourceId" is missing. Please pass the argument for getting resource.';
    public static resourceTypeIsNotSupported: string = '"%s" resources are not yet supported for configuring pipelines.';
    public static selectFolderLabel: string = 'Select source folder for configuring pipeline';
    public static selectOrganization: string = 'Select an Azure DevOps organization';
    public static selectPipelineTemplate: string = 'Select an Azure Pipelines template...';
    public static selectProject: string = 'Select an Azure DevOps project';
    public static selectRemoteForBranch: string = 'Select the remote repository where you want to track your current branch';
    public static selectSubscription: string = 'Select an Azure subscription';
    public static selectWebApp: string = 'Select Web App';
    public static selectWorkspaceFolder: string = 'Select a folder from your workspace to deploy';
    public static signInLabel: string = 'Sign In';
    public static unableToCreateAzureServiceConnection: string = `Unable to store connection details for Azure subscription.\nOperation Status: %s\nMessage: %s\nService connection is not in ready state.`;
    public static unableToCreateGitHubServiceConnection: string =`Unable to store connection details for GitHub.\nOperation Status: %s\nService connection is not in ready state.`;
    public static retryFailedMessage: string =`Failed after retrying: %s times. Internal Error: %s`;
    public static azureServicePrincipalFailedMessage: string =`Failed while creating Azure service principal.`;
    public static roleAssignmentFailedMessage: string =`Failed while role assignement.`;
    public static waitForAzureSignIn: string =`Waiting for Azure sign-in...`;
    public static userCancelledExcecption = 'User cancelled the action';
    public static cannotFindPipelineUrlInMetaDataException = 'We were unable to find pipeline associated with the Azure Web App. Please click on "Browse Pipeline" to explore.';
    public static cannotFindOrganizationWithName = 'Unable to find organization with name: %s';
    public static browseNotAvailableConfigurePipeline = 'Unable to find a pipeline for this Azure Web App. Please click on "Configure Pipeline" to setup.';
    public static didNotRecieveAzureResourceNodeToProcess = 'Unable to browse the pipeline for you. Please raise an issue in the [repo](https://github.com/Microsoft/azure-pipelines-vscode/issues).';

}
