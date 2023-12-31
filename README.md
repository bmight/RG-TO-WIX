## Software Prerequisites

- NodeJS v18.15.0+
- Yarn 1.22+
- git 2.40+

## Account Prerequisites 

- RescueGroups Username/Password
- RescueGroups Account Number
- [WIX Token](https://dev.wix.com/docs/rest/articles/getting-started/api-keys)
- [WIX Collection](https://support.wix.com/en/article/cms-formerly-content-manager-creating-a-collection) (with the following columns)

  - animalId
  - breed
  - description
  - descriptionNoHtml
  - exactBirthdate
  - generalAge
  - location
  - locationPublic
  - name
  - needsAFoster
  - picture1
  - picture1Url
  - relativeAge
  - rescueId
  - sex
  - gallery   

## Install

```
git clone
cd RG-TO-WIX
yarn install
```

## Manual Usage

```
  yarn start -u {RG_USERNAME} -p {RG_PASSWORD} -a {RG-ACCOUNTID} -t {WIX_TOKEN} -c {WIX_COLLECTION}
```

## AWS Lambda Deployment

1. Install Code
1. Build Code (`yarn build`)
1. ZIP `dist` and `node_modules` folder
1. Upload ZIP to S3 Bucket
1. [Deploy CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-console-create-stack.html) using `cloudformation.yaml`