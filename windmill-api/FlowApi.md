# .FlowApi

All URIs are relative to */api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**archiveFlowByPath**](FlowApi.md#archiveFlowByPath) | **POST** /w/{workspace}/flows/archive/{path} | archive flow by path
[**createFlow**](FlowApi.md#createFlow) | **POST** /w/{workspace}/flows/create | create flow
[**existsFlowByPath**](FlowApi.md#existsFlowByPath) | **GET** /w/{workspace}/flows/exists/{path} | exists flow by path
[**getFlowByPath**](FlowApi.md#getFlowByPath) | **GET** /w/{workspace}/flows/get/{path} | get flow by path
[**getHubFlowById**](FlowApi.md#getHubFlowById) | **GET** /flows/hub/get/{id} | get hub flow by id
[**listFlows**](FlowApi.md#listFlows) | **GET** /w/{workspace}/flows/list | list all available flows
[**listHubFlows**](FlowApi.md#listHubFlows) | **GET** /flows/hub/list | list all available hub flows
[**updateFlow**](FlowApi.md#updateFlow) | **POST** /w/{workspace}/flows/update/{path} | update flow


# **archiveFlowByPath**
> string archiveFlowByPath()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:.FlowApiArchiveFlowByPathRequest = {
  // string
  workspace: "workspace_example",
  // string
  path: "path_example",
};

apiInstance.archiveFlowByPath(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


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
**200** | flow archived |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFlow**
> string createFlow(inlineObject16)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:.FlowApiCreateFlowRequest = {
  // string
  workspace: "workspace_example",
  // InlineObject16
  inlineObject16: {
    path: "path_example",
    summary: "summary_example",
    description: "description_example",
    value: {
      modules: [
        {
          inputTransform: {
            "key": {
              type: "static",
              step: 3.14,
              value: null,
              expr: "expr_example",
            },
          },
          value: {
            value: ,
            iterator: {
              type: "static",
              step: 3.14,
              value: null,
              expr: "expr_example",
            },
null,
            path: "path_example",
            content: "content_example",
            language: "deno",
            type: "script",
          },
          stopAfterIfExpr: "stopAfterIfExpr_example",
          skipIfStopped: true,
        },
      ],
      failureModule: {
        inputTransform: {
          "key": {
            type: "static",
            step: 3.14,
            value: null,
            expr: "expr_example",
          },
        },
        value: {
          value: ,
          iterator: {
            type: "static",
            step: 3.14,
            value: null,
            expr: "expr_example",
          },
null,
          path: "path_example",
          content: "content_example",
          language: "deno",
          type: "script",
        },
        stopAfterIfExpr: "stopAfterIfExpr_example",
        skipIfStopped: true,
      },
    },
    schema: {},
  },
};

apiInstance.createFlow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject16** | **InlineObject16**|  |
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
**201** | flow created |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **existsFlowByPath**
> boolean existsFlowByPath()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:.FlowApiExistsFlowByPathRequest = {
  // string
  workspace: "workspace_example",
  // string
  path: "path_example",
};

apiInstance.existsFlowByPath(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**boolean**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | flow details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFlowByPath**
> Flow getFlowByPath()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:.FlowApiGetFlowByPathRequest = {
  // string
  workspace: "workspace_example",
  // string
  path: "path_example",
};

apiInstance.getFlowByPath(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


### Return type

**Flow**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | flow details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHubFlowById**
> InlineResponse2003 getHubFlowById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:.FlowApiGetHubFlowByIdRequest = {
  // number
  id: 1,
};

apiInstance.getHubFlowById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**InlineResponse2003**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | flow |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFlows**
> Array<Flow> listFlows()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:.FlowApiListFlowsRequest = {
  // string
  workspace: "workspace_example",
  // number | which page to return (start at 1, default 1) (optional)
  page: 1,
  // number | number of items to return for a given page (default 30, max 100) (optional)
  perPage: 1,
  // boolean | order by desc order (default true) (optional)
  orderDesc: true,
  // string | mask to filter exact matching user creator (optional)
  createdBy: "created_by_example",
  // string | mask to filter matching starting parh (optional)
  pathStart: "path_start_example",
  // string | mask to filter exact matching path (optional)
  pathExact: "path_exact_example",
  // boolean | (default false) show also the archived files. when multiple archived hash share the same path, only the ones with the latest create_at are displayed.  (optional)
  showArchived: true,
};

apiInstance.listFlows(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**string**] |  | defaults to undefined
 **page** | [**number**] | which page to return (start at 1, default 1) | (optional) defaults to undefined
 **perPage** | [**number**] | number of items to return for a given page (default 30, max 100) | (optional) defaults to undefined
 **orderDesc** | [**boolean**] | order by desc order (default true) | (optional) defaults to undefined
 **createdBy** | [**string**] | mask to filter exact matching user creator | (optional) defaults to undefined
 **pathStart** | [**string**] | mask to filter matching starting parh | (optional) defaults to undefined
 **pathExact** | [**string**] | mask to filter exact matching path | (optional) defaults to undefined
 **showArchived** | [**boolean**] | (default false) show also the archived files. when multiple archived hash share the same path, only the ones with the latest create_at are displayed.  | (optional) defaults to undefined


### Return type

**Array<Flow>**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available flow |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listHubFlows**
> InlineResponse2002 listHubFlows()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:any = {};

apiInstance.listHubFlows(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**InlineResponse2002**

### Authorization

[bearerAuth](README.md#bearerAuth), [cookieAuth](README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | hub flows list |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFlow**
> string updateFlow(inlineObject17)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FlowApi(configuration);

let body:.FlowApiUpdateFlowRequest = {
  // string
  workspace: "workspace_example",
  // string
  path: "path_example",
  // InlineObject17
  inlineObject17: {
    path: "path_example",
    summary: "summary_example",
    description: "description_example",
    value: {
      modules: [
        {
          inputTransform: {
            "key": {
              type: "static",
              step: 3.14,
              value: null,
              expr: "expr_example",
            },
          },
          value: {
            value: ,
            iterator: {
              type: "static",
              step: 3.14,
              value: null,
              expr: "expr_example",
            },
null,
            path: "path_example",
            content: "content_example",
            language: "deno",
            type: "script",
          },
          stopAfterIfExpr: "stopAfterIfExpr_example",
          skipIfStopped: true,
        },
      ],
      failureModule: {
        inputTransform: {
          "key": {
            type: "static",
            step: 3.14,
            value: null,
            expr: "expr_example",
          },
        },
        value: {
          value: ,
          iterator: {
            type: "static",
            step: 3.14,
            value: null,
            expr: "expr_example",
          },
null,
          path: "path_example",
          content: "content_example",
          language: "deno",
          type: "script",
        },
        stopAfterIfExpr: "stopAfterIfExpr_example",
        skipIfStopped: true,
      },
    },
    schema: {},
  },
};

apiInstance.updateFlow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject17** | **InlineObject17**|  |
 **workspace** | [**string**] |  | defaults to undefined
 **path** | [**string**] |  | defaults to undefined


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
**200** | flow updated |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


