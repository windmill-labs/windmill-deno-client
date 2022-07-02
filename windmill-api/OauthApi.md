# .OauthApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectCallback**](OauthApi.md#connectCallback) | **POST** /oauth/connect_callback/{client_name} | connect callback
[**connectSlackCallback**](OauthApi.md#connectSlackCallback) | **POST** /oauth/connect_slack_callback | connect slack callback
[**disconnectAccount**](OauthApi.md#disconnectAccount) | **POST** /w/{workspace}/oauth/disconnect/{account_id} | disconnect account
[**disconnectSlack**](OauthApi.md#disconnectSlack) | **POST** /w/{workspace}/oauth/disconnect_slack | disconnect slack
[**listOAuthConnects**](OauthApi.md#listOAuthConnects) | **GET** /oauth/list_connects | list oauth connects
[**listOAuthLogins**](OauthApi.md#listOAuthLogins) | **GET** /oauth/list_logins | list oauth logins
[**setWorkspaceSlack**](OauthApi.md#setWorkspaceSlack) | **POST** /w/{workspace}/oauth/set_workspace_slack | set workspace&#39;s slack


# **connectCallback**
> InlineResponse2001 connectCallback(inlineObject12)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:.OauthApiConnectCallbackRequest = {
  // string
  clientName: "client_name_example",
  // InlineObject12
  inlineObject12: {
    code: "code_example",
    state: "state_example",
  },
};

apiInstance.connectCallback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject12** | **InlineObject12**|  |
 **clientName** | [**string**] |  | defaults to undefined


### Return type

**InlineResponse2001**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | oauth token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **connectSlackCallback**
> SlackToken connectSlackCallback(inlineObject11)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:.OauthApiConnectSlackCallbackRequest = {
  // InlineObject11
  inlineObject11: {
    code: "code_example",
    state: "state_example",
  },
};

apiInstance.connectSlackCallback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject11** | **InlineObject11**|  |


### Return type

**SlackToken**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | slack token |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disconnectAccount**
> string disconnectAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:.OauthApiDisconnectAccountRequest = {
  // string
  workspace: "workspace_example",
  // string
  account: "account_example",
};

apiInstance.disconnectAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] |  | defaults to undefined
 **account** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | disconnected client |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disconnectSlack**
> string disconnectSlack()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:.OauthApiDisconnectSlackRequest = {
  // string
  workspace: "workspace_example",
};

apiInstance.disconnectSlack(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | disconnected slack |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOAuthConnects**
> { [key: string]: Array<string>; } listOAuthConnects()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:any = {};

apiInstance.listOAuthConnects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: Array<string>; }**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of oauth connects clients |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOAuthLogins**
> Array<string> listOAuthLogins()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:any = {};

apiInstance.listOAuthLogins(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<string>**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of oauth login clients |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setWorkspaceSlack**
> string setWorkspaceSlack(slackToken)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:.OauthApiSetWorkspaceSlackRequest = {
  // string
  workspace: "workspace_example",
  // SlackToken
  slackToken: {
    accessToken: "accessToken_example",
    teamId: "teamId_example",
    teamName: "teamName_example",
    bot: {
      botAccessToken: "botAccessToken_example",
    },
  },
};

apiInstance.setWorkspaceSlack(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slackToken** | **SlackToken**|  |
 **workspace** | [**string**] |  | defaults to undefined


### Return type

**string**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | workspace slack is set |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


