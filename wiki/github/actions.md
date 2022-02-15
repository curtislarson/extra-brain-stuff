# Github Actions

## Notes

- Github actions has a lot of software pre-installed in their runners that you can use (including stuff like mySQL). See [This Link](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md) for more info.

- [Configure AWS Credentials](https://github.com/aws-actions/configure-aws-credentials) is very helpful for setting up AWS with github actions

- If you hit error 255 and have aws functionality and are running ubuntu `20.04` setting the env variable `AWS_EC2_METADATA_DISABLED=true` should fix it

- `workflow_run` will run a workflow after the completion of a previous workflow. The workflow has the same payload as the calling workflow

- `workflow_dispatch` is triggered via api call, gh cli, or web interface.

- `workflow_call` is a workflow that can be called or used by other workflows and does not run by itself

## Links

- [Ubuntu 20.04.3 Installed Software List](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)

- [Virtual Env Repo](https://github.com/actions/virtual-environments)
