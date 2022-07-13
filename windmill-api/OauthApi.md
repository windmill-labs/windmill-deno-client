# .OauthApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectCallback**](OauthApi.md#connectCallback) | **POST** /oauth/connect_callback/{client_name} | connect callback
[**connectSlackCallback**](OauthApi.md#connectSlackCallback) | **POST** /oauth/connect_slack_callback | connect slack callback
[**createAccount**](OauthApi.md#createAccount) | **POST** /w/{workspace}/oauth/create_account | create OAuth account
[**disconnectAccount**](OauthApi.md#disconnectAccount) | **POST** /w/{workspace}/oauth/disconnect/{id} | disconnect account
[**disconnectSlack**](OauthApi.md#disconnectSlack) | **POST** /w/{workspace}/oauth/disconnect_slack | disconnect slack
[**listOAuthConnects**](OauthApi.md#listOAuthConnects) | **GET** /oauth/list_connects | list oauth connects
[**listOAuthLogins**](OauthApi.md#listOAuthLogins) | **GET** /oauth/list_logins | list oauth logins
[**refreshToken**](OauthApi.md#refreshToken) | **POST** /w/{workspace}/oauth/refresh_token/{id} | refresh token
[**setWorkspaceSlack**](OauthApi.md#setWorkspaceSlack) | **POST** /w/{workspace}/oauth/set_workspace_slack | set workspace&#39;s slack


# **connectCallback**
> TokenResponse connectCallback(inlineObject12)


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

**TokenResponse**

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

# **createAccount**
> string createAccount(inlineObject13)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:.OauthApiCreateAccountRequest = {
  // string
  workspace: "workspace_example",
  // InlineObject13
  inlineObject13: {
    refreshToken: "refreshToken_example",
    expiresIn: 1,
    owner: "owner_example",
    client: "client_example",
  },
};

apiInstance.createAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject13** | **InlineObject13**|  |
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
**200** | account set |  -  |

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
  id: "id_example",
};

apiInstance.disconnectAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


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

# **refreshToken**
> string refreshToken(inlineObject14)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OauthApi(configuration);

let body:.OauthApiRefreshTokenRequest = {
  // string
  workspace: "workspace_example",
  // string
  id: "id_example",
  // InlineObject14
  inlineObject14: {
    path: "path_example",
  },
};

apiInstance.refreshToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject14** | **InlineObject14**|  |
 **workspace** | [**string**] |  | defaults to undefined
 **id** | [**string**] |  | defaults to undefined


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
**200** | token refreshed |  -  |

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


