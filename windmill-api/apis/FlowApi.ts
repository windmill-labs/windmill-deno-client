// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Flow } from '../models/Flow.ts';
import { InlineResponse2003 } from '../models/InlineResponse2003.ts';
import { InlineResponse2004 } from '../models/InlineResponse2004.ts';
import { OpenFlowWPath } from '../models/OpenFlowWPath.ts';

/**
 * no description
 */
export class FlowApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * archive flow by path
     * @param workspace 
     * @param path 
     */
    public async archiveFlowByPath(workspace: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("FlowApi", "archiveFlowByPath", "workspace");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("FlowApi", "archiveFlowByPath", "path");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/flows/archive/{path}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * create flow
     * @param workspace 
     * @param openFlowWPath Partially filled flow
     */
    public async createFlow(workspace: string, openFlowWPath: OpenFlowWPath, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("FlowApi", "createFlow", "workspace");
        }


        // verify required parameter 'openFlowWPath' is not null or undefined
        if (openFlowWPath === null || openFlowWPath === undefined) {
            throw new RequiredError("FlowApi", "createFlow", "openFlowWPath");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/flows/create'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(openFlowWPath, "OpenFlowWPath", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * exists flow by path
     * @param workspace 
     * @param path 
     */
    public async existsFlowByPath(workspace: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("FlowApi", "existsFlowByPath", "workspace");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("FlowApi", "existsFlowByPath", "path");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/flows/exists/{path}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get flow by path
     * @param workspace 
     * @param path 
     */
    public async getFlowByPath(workspace: string, path: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("FlowApi", "getFlowByPath", "workspace");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("FlowApi", "getFlowByPath", "path");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/flows/get/{path}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get hub flow by id
     * @param id 
     */
    public async getHubFlowById(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("FlowApi", "getHubFlowById", "id");
        }


        // Path Params
        const localVarPath = '/flows/hub/get/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list all available flows
     * @param workspace 
     * @param page which page to return (start at 1, default 1)
     * @param perPage number of items to return for a given page (default 30, max 100)
     * @param orderDesc order by desc order (default true)
     * @param createdBy mask to filter exact matching user creator
     * @param pathStart mask to filter matching starting path
     * @param pathExact mask to filter exact matching path
     * @param showArchived (default false) show also the archived files. when multiple archived hash share the same path, only the ones with the latest create_at are displayed. 
     */
    public async listFlows(workspace: string, page?: number, perPage?: number, orderDesc?: boolean, createdBy?: string, pathStart?: string, pathExact?: string, showArchived?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("FlowApi", "listFlows", "workspace");
        }









        // Path Params
        const localVarPath = '/w/{workspace}/flows/list'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (perPage !== undefined) {
            requestContext.setQueryParam("per_page", ObjectSerializer.serialize(perPage, "number", "int32"));
        }

        // Query Params
        if (orderDesc !== undefined) {
            requestContext.setQueryParam("order_desc", ObjectSerializer.serialize(orderDesc, "boolean", ""));
        }

        // Query Params
        if (createdBy !== undefined) {
            requestContext.setQueryParam("created_by", ObjectSerializer.serialize(createdBy, "string", ""));
        }

        // Query Params
        if (pathStart !== undefined) {
            requestContext.setQueryParam("path_start", ObjectSerializer.serialize(pathStart, "string", ""));
        }

        // Query Params
        if (pathExact !== undefined) {
            requestContext.setQueryParam("path_exact", ObjectSerializer.serialize(pathExact, "string", ""));
        }

        // Query Params
        if (showArchived !== undefined) {
            requestContext.setQueryParam("show_archived", ObjectSerializer.serialize(showArchived, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * list all available hub flows
     */
    public async listHubFlows(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/flows/hub/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * update flow
     * @param workspace 
     * @param path 
     * @param openFlowWPath Partially filled flow
     */
    public async updateFlow(workspace: string, path: string, openFlowWPath: OpenFlowWPath, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("FlowApi", "updateFlow", "workspace");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("FlowApi", "updateFlow", "path");
        }


        // verify required parameter 'openFlowWPath' is not null or undefined
        if (openFlowWPath === null || openFlowWPath === undefined) {
            throw new RequiredError("FlowApi", "updateFlow", "openFlowWPath");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/flows/update/{path}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(openFlowWPath, "OpenFlowWPath", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["cookieAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FlowApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archiveFlowByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveFlowByPath(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createFlow(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to existsFlowByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async existsFlowByPath(response: ResponseContext): Promise<boolean > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: boolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "boolean", ""
            ) as boolean;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFlowByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFlowByPath(response: ResponseContext): Promise<Flow > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Flow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flow", ""
            ) as Flow;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Flow = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Flow", ""
            ) as Flow;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getHubFlowById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getHubFlowById(response: ResponseContext): Promise<InlineResponse2004 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFlows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFlows(response: ResponseContext): Promise<Array<Flow> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Flow> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Flow>", ""
            ) as Array<Flow>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Flow> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Flow>", ""
            ) as Array<Flow>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listHubFlows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listHubFlows(response: ResponseContext): Promise<InlineResponse2003 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateFlow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateFlow(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
