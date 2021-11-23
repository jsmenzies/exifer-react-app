import {fromCognitoIdentityPool} from '@aws-sdk/credential-provider-cognito-identity'
import {CognitoIdentityClient} from "@aws-sdk/client-cognito-identity";
import {ListObjectsV2Command, ListObjectsV2CommandOutput, S3Client} from "@aws-sdk/client-s3";

const REGION = 'eu-west-1';
const IDENTITY_POOL = '';
const BUCKET_NAME = '';

const s3 = new S3Client({
    region: REGION,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({region: REGION}),
        identityPoolId: IDENTITY_POOL,
    })
})

export const listFolders: () => Promise<string[]> = async () => {
    try {
        const response: ListObjectsV2CommandOutput = await s3.send(
            new ListObjectsV2Command({Delimiter: "/", Bucket: BUCKET_NAME}),
        );

        if (response.CommonPrefixes) {
            return response.CommonPrefixes
                .map(value => value.Prefix)
                .filter((folder): folder is string => !!folder)
                .slice();
        }
    } catch (err: any) {
        return err;
    }
}
