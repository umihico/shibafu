# Shibafu

Keep Track of Your PRs in a Spreadsheet

## Initial Deploy

Create .env file

```
PROD_DEPLOYMENT_ID=""
DEV_DEPLOYMENT_ID=""
```

Run `npm run deploy` and `npm run deploy:prod`. Note the deployment ID and update .env

```
PROD_DEPLOYMENT_ID="-i AKfycbxsIaEhIuMYnrirCt6KxtyoN0CMn0Xpk6kKPqNkWzZBh3r9FU6KPBaBHuaz86UP-6mwpA1"
DEV_DEPLOYMENT_ID="-i AKfycbxsIaEhIuMYnrirCt6KxtyoN0CMn0Xpk6kKPqNkWzZBh3r9FU6KPBaBHuaz86UP-6mwpA2"
```

After this, `npm run deploy` and `npm run deploy:prod` will overwrite same deployments, instead of creating new deployment each time.

## Useful Commands

```bash
# Create demo data
PULL=$(gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" repos/umihico/docker-selenium-lambda/pulls/176 | jq)

# Deploy dev & Run with demo data
npm run deploy && curl -H "Content-Type: application/json" -d $PULL -L "https://script.google.com/macros/s/$DEV_DEPLOYMENT_ID/exec"

# Deploy prod & Run with demo data
npm run deploy:prod && curl -H "Content-Type: application/json" -d $PULL -L "https://script.google.com/macros/s/$PROD_DEPLOYMENT_ID/exec"
```

## To get all past pull requests per repository

```bash
# gh pr list --base development --limit 10000 --state merged --json number | jq "[. | sort_by(.number) | .[].number] | join(\" \")"
array=( 1 2 3 4 5 )
for i in "${array[@]}"
do
  gh api -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" repos/umihico/hoge/pulls/${i} > pull_request.json
  curl -H "Content-Type: application/json" -d @pull_request.json -L "https://script.google.com/macros/s/${DEPLOYMENT_ID}/exec"
  sleep 1
done
```
