// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CompletedJob } from '../models/CompletedJob.ts';
import { FlowPreview } from '../models/FlowPreview.ts';
import { InlineObject16 } from '../models/InlineObject16.ts';
import { InlineResponse2006 } from '../models/InlineResponse2006.ts';
import { Job } from '../models/Job.ts';
import { Preview } from '../models/Preview.ts';
import { QueuedJob } from '../models/QueuedJob.ts';

/**
 * no description
 */
export class JobApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * cancel queued job
     * @param workspace 
     * @param id 
     * @param inlineObject16 
     */
    public async cancelQueuedJob(workspace: string, id: string, inlineObject16: InlineObject16, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "cancelQueuedJob", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "cancelQueuedJob", "id");
        }


        // verify required parameter 'inlineObject16' is not null or undefined
        if (inlineObject16 === null || inlineObject16 === undefined) {
            throw new RequiredError("JobApi", "cancelQueuedJob", "inlineObject16");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/jobs/queue/cancel/{id}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject16, "InlineObject16", ""),
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
     * cancel a job for a suspended flow
     * @param workspace 
     * @param id 
     * @param resumeId 
     * @param signature 
     * @param payload 
     */
    public async cancelSuspendedJobGet(workspace: string, id: string, resumeId: number, signature: string, payload?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobGet", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobGet", "id");
        }


        // verify required parameter 'resumeId' is not null or undefined
        if (resumeId === null || resumeId === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobGet", "resumeId");
        }


        // verify required parameter 'signature' is not null or undefined
        if (signature === null || signature === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobGet", "signature");
        }



        // Path Params
        const localVarPath = '/w/{workspace}/jobs/cancel/{id}/{resume_id}/{signature}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'resume_id' + '}', encodeURIComponent(String(resumeId)))
            .replace('{' + 'signature' + '}', encodeURIComponent(String(signature)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (payload !== undefined) {
            requestContext.setQueryParam("payload", ObjectSerializer.serialize(payload, "any", ""));
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
     * cancel a job for a suspended flow
     * @param workspace 
     * @param id 
     * @param resumeId 
     * @param signature 
     * @param body 
     */
    public async cancelSuspendedJobPost(workspace: string, id: string, resumeId: number, signature: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobPost", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobPost", "id");
        }


        // verify required parameter 'resumeId' is not null or undefined
        if (resumeId === null || resumeId === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobPost", "resumeId");
        }


        // verify required parameter 'signature' is not null or undefined
        if (signature === null || signature === undefined) {
            throw new RequiredError("JobApi", "cancelSuspendedJobPost", "signature");
        }



        // Path Params
        const localVarPath = '/w/{workspace}/jobs/cancel/{id}/{resume_id}/{signature}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'resume_id' + '}', encodeURIComponent(String(resumeId)))
            .replace('{' + 'signature' + '}', encodeURIComponent(String(signature)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
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
     * create an HMac signature given a job id and a resume id
     * @param workspace 
     * @param id 
     * @param resumeId 
     */
    public async createJobSignature(workspace: string, id: string, resumeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "createJobSignature", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "createJobSignature", "id");
        }


        // verify required parameter 'resumeId' is not null or undefined
        if (resumeId === null || resumeId === undefined) {
            throw new RequiredError("JobApi", "createJobSignature", "resumeId");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/jobs/job_signature/{id}/{resume_id}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'resume_id' + '}', encodeURIComponent(String(resumeId)));

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
     * delete completed job (erase content but keep run id)
     * @param workspace 
     * @param id 
     */
    public async deleteCompletedJob(workspace: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "deleteCompletedJob", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "deleteCompletedJob", "id");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/jobs/completed/delete/{id}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * get completed job
     * @param workspace 
     * @param id 
     */
    public async getCompletedJob(workspace: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "getCompletedJob", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "getCompletedJob", "id");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/jobs/completed/get/{id}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
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
     * get job
     * @param workspace 
     * @param id 
     */
    public async getJob(workspace: string, id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "getJob", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "getJob", "id");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/jobs/get/{id}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
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
     * get job updates
     * @param workspace 
     * @param id 
     * @param running 
     * @param logOffset 
     */
    public async getJobUpdates(workspace: string, id: string, running?: boolean, logOffset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "getJobUpdates", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "getJobUpdates", "id");
        }




        // Path Params
        const localVarPath = '/w/{workspace}/jobs/getupdate/{id}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (running !== undefined) {
            requestContext.setQueryParam("running", ObjectSerializer.serialize(running, "boolean", ""));
        }

        // Query Params
        if (logOffset !== undefined) {
            requestContext.setQueryParam("log_offset", ObjectSerializer.serialize(logOffset, "number", ""));
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
     * list all available completed jobs
     * @param workspace 
     * @param orderDesc order by desc order (default true)
     * @param createdBy mask to filter exact matching user creator
     * @param parentJob The parent job that is at the origin and responsible for the execution of this script if any
     * @param scriptPathExact mask to filter exact matching path
     * @param scriptPathStart mask to filter matching starting path
     * @param scriptHash mask to filter exact matching path
     * @param createdBefore filter on created before (inclusive) timestamp
     * @param createdAfter filter on created after (exclusive) timestamp
     * @param success filter on successful jobs
     * @param jobKinds filter on job kind (values &#39;preview&#39;, &#39;script&#39;, &#39;dependencies&#39;, &#39;flow&#39;) separated by,
     * @param isSkipped is the job skipped
     * @param isFlowStep is the job a flow step
     */
    public async listCompletedJobs(workspace: string, orderDesc?: boolean, createdBy?: string, parentJob?: string, scriptPathExact?: string, scriptPathStart?: string, scriptHash?: string, createdBefore?: Date, createdAfter?: Date, success?: boolean, jobKinds?: string, isSkipped?: boolean, isFlowStep?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "listCompletedJobs", "workspace");
        }














        // Path Params
        const localVarPath = '/w/{workspace}/jobs/completed/list'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (orderDesc !== undefined) {
            requestContext.setQueryParam("order_desc", ObjectSerializer.serialize(orderDesc, "boolean", ""));
        }

        // Query Params
        if (createdBy !== undefined) {
            requestContext.setQueryParam("created_by", ObjectSerializer.serialize(createdBy, "string", ""));
        }

        // Query Params
        if (parentJob !== undefined) {
            requestContext.setQueryParam("parent_job", ObjectSerializer.serialize(parentJob, "string", "uuid"));
        }

        // Query Params
        if (scriptPathExact !== undefined) {
            requestContext.setQueryParam("script_path_exact", ObjectSerializer.serialize(scriptPathExact, "string", ""));
        }

        // Query Params
        if (scriptPathStart !== undefined) {
            requestContext.setQueryParam("script_path_start", ObjectSerializer.serialize(scriptPathStart, "string", ""));
        }

        // Query Params
        if (scriptHash !== undefined) {
            requestContext.setQueryParam("script_hash", ObjectSerializer.serialize(scriptHash, "string", ""));
        }

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("created_before", ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }

        // Query Params
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("created_after", ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }

        // Query Params
        if (success !== undefined) {
            requestContext.setQueryParam("success", ObjectSerializer.serialize(success, "boolean", ""));
        }

        // Query Params
        if (jobKinds !== undefined) {
            requestContext.setQueryParam("job_kinds", ObjectSerializer.serialize(jobKinds, "string", ""));
        }

        // Query Params
        if (isSkipped !== undefined) {
            requestContext.setQueryParam("is_skipped", ObjectSerializer.serialize(isSkipped, "boolean", ""));
        }

        // Query Params
        if (isFlowStep !== undefined) {
            requestContext.setQueryParam("is_flow_step", ObjectSerializer.serialize(isFlowStep, "boolean", ""));
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
     * list all available jobs
     * @param workspace 
     * @param createdBy mask to filter exact matching user creator
     * @param parentJob The parent job that is at the origin and responsible for the execution of this script if any
     * @param scriptPathExact mask to filter exact matching path
     * @param scriptPathStart mask to filter matching starting path
     * @param scriptHash mask to filter exact matching path
     * @param createdBefore filter on created before (inclusive) timestamp
     * @param createdAfter filter on created after (exclusive) timestamp
     * @param jobKinds filter on job kind (values &#39;preview&#39;, &#39;script&#39;, &#39;dependencies&#39;, &#39;flow&#39;) separated by,
     * @param isSkipped is the job skipped
     * @param isFlowStep is the job a flow step
     * @param success filter on successful jobs
     */
    public async listJobs(workspace: string, createdBy?: string, parentJob?: string, scriptPathExact?: string, scriptPathStart?: string, scriptHash?: string, createdBefore?: Date, createdAfter?: Date, jobKinds?: string, isSkipped?: boolean, isFlowStep?: boolean, success?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "listJobs", "workspace");
        }













        // Path Params
        const localVarPath = '/w/{workspace}/jobs/list'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (createdBy !== undefined) {
            requestContext.setQueryParam("created_by", ObjectSerializer.serialize(createdBy, "string", ""));
        }

        // Query Params
        if (parentJob !== undefined) {
            requestContext.setQueryParam("parent_job", ObjectSerializer.serialize(parentJob, "string", "uuid"));
        }

        // Query Params
        if (scriptPathExact !== undefined) {
            requestContext.setQueryParam("script_path_exact", ObjectSerializer.serialize(scriptPathExact, "string", ""));
        }

        // Query Params
        if (scriptPathStart !== undefined) {
            requestContext.setQueryParam("script_path_start", ObjectSerializer.serialize(scriptPathStart, "string", ""));
        }

        // Query Params
        if (scriptHash !== undefined) {
            requestContext.setQueryParam("script_hash", ObjectSerializer.serialize(scriptHash, "string", ""));
        }

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("created_before", ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }

        // Query Params
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("created_after", ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }

        // Query Params
        if (jobKinds !== undefined) {
            requestContext.setQueryParam("job_kinds", ObjectSerializer.serialize(jobKinds, "string", ""));
        }

        // Query Params
        if (isSkipped !== undefined) {
            requestContext.setQueryParam("is_skipped", ObjectSerializer.serialize(isSkipped, "boolean", ""));
        }

        // Query Params
        if (isFlowStep !== undefined) {
            requestContext.setQueryParam("is_flow_step", ObjectSerializer.serialize(isFlowStep, "boolean", ""));
        }

        // Query Params
        if (success !== undefined) {
            requestContext.setQueryParam("success", ObjectSerializer.serialize(success, "boolean", ""));
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
     * list all available queued jobs
     * @param workspace 
     * @param orderDesc order by desc order (default true)
     * @param createdBy mask to filter exact matching user creator
     * @param parentJob The parent job that is at the origin and responsible for the execution of this script if any
     * @param scriptPathExact mask to filter exact matching path
     * @param scriptPathStart mask to filter matching starting path
     * @param scriptHash mask to filter exact matching path
     * @param createdBefore filter on created before (inclusive) timestamp
     * @param createdAfter filter on created after (exclusive) timestamp
     * @param success filter on successful jobs
     * @param jobKinds filter on job kind (values &#39;preview&#39;, &#39;script&#39;, &#39;dependencies&#39;, &#39;flow&#39;) separated by,
     */
    public async listQueue(workspace: string, orderDesc?: boolean, createdBy?: string, parentJob?: string, scriptPathExact?: string, scriptPathStart?: string, scriptHash?: string, createdBefore?: Date, createdAfter?: Date, success?: boolean, jobKinds?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "listQueue", "workspace");
        }












        // Path Params
        const localVarPath = '/w/{workspace}/jobs/queue/list'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (orderDesc !== undefined) {
            requestContext.setQueryParam("order_desc", ObjectSerializer.serialize(orderDesc, "boolean", ""));
        }

        // Query Params
        if (createdBy !== undefined) {
            requestContext.setQueryParam("created_by", ObjectSerializer.serialize(createdBy, "string", ""));
        }

        // Query Params
        if (parentJob !== undefined) {
            requestContext.setQueryParam("parent_job", ObjectSerializer.serialize(parentJob, "string", "uuid"));
        }

        // Query Params
        if (scriptPathExact !== undefined) {
            requestContext.setQueryParam("script_path_exact", ObjectSerializer.serialize(scriptPathExact, "string", ""));
        }

        // Query Params
        if (scriptPathStart !== undefined) {
            requestContext.setQueryParam("script_path_start", ObjectSerializer.serialize(scriptPathStart, "string", ""));
        }

        // Query Params
        if (scriptHash !== undefined) {
            requestContext.setQueryParam("script_hash", ObjectSerializer.serialize(scriptHash, "string", ""));
        }

        // Query Params
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("created_before", ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }

        // Query Params
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("created_after", ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }

        // Query Params
        if (success !== undefined) {
            requestContext.setQueryParam("success", ObjectSerializer.serialize(success, "boolean", ""));
        }

        // Query Params
        if (jobKinds !== undefined) {
            requestContext.setQueryParam("job_kinds", ObjectSerializer.serialize(jobKinds, "string", ""));
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
     * resume a job for a suspended flow
     * @param workspace 
     * @param id 
     * @param resumeId 
     * @param signature 
     * @param payload 
     */
    public async resumeSuspendedJobGet(workspace: string, id: string, resumeId: number, signature: string, payload?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobGet", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobGet", "id");
        }


        // verify required parameter 'resumeId' is not null or undefined
        if (resumeId === null || resumeId === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobGet", "resumeId");
        }


        // verify required parameter 'signature' is not null or undefined
        if (signature === null || signature === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobGet", "signature");
        }



        // Path Params
        const localVarPath = '/w/{workspace}/jobs/resume/{id}/{resume_id}/{signature}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'resume_id' + '}', encodeURIComponent(String(resumeId)))
            .replace('{' + 'signature' + '}', encodeURIComponent(String(signature)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (payload !== undefined) {
            requestContext.setQueryParam("payload", ObjectSerializer.serialize(payload, "any", ""));
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
     * resume a job for a suspended flow
     * @param workspace 
     * @param id 
     * @param resumeId 
     * @param signature 
     * @param body 
     */
    public async resumeSuspendedJobPost(workspace: string, id: string, resumeId: number, signature: string, body?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobPost", "workspace");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobPost", "id");
        }


        // verify required parameter 'resumeId' is not null or undefined
        if (resumeId === null || resumeId === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobPost", "resumeId");
        }


        // verify required parameter 'signature' is not null or undefined
        if (signature === null || signature === undefined) {
            throw new RequiredError("JobApi", "resumeSuspendedJobPost", "signature");
        }



        // Path Params
        const localVarPath = '/w/{workspace}/jobs/resume/{id}/{resume_id}/{signature}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'resume_id' + '}', encodeURIComponent(String(resumeId)))
            .replace('{' + 'signature' + '}', encodeURIComponent(String(signature)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
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
     * run flow by path
     * @param workspace 
     * @param path 
     * @param requestBody flow args
     * @param scheduledFor when to schedule this job (leave empty for immediate run)
     * @param scheduledInSecs schedule the script to execute in the number of seconds starting now
     * @param parentJob The parent job that is at the origin and responsible for the execution of this script if any
     */
    public async runFlowByPath(workspace: string, path: string, requestBody: { [key: string]: any; }, scheduledFor?: Date, scheduledInSecs?: number, parentJob?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "runFlowByPath", "workspace");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("JobApi", "runFlowByPath", "path");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("JobApi", "runFlowByPath", "requestBody");
        }





        // Path Params
        const localVarPath = '/w/{workspace}/jobs/run/f/{path}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (scheduledFor !== undefined) {
            requestContext.setQueryParam("scheduled_for", ObjectSerializer.serialize(scheduledFor, "Date", "date-time"));
        }

        // Query Params
        if (scheduledInSecs !== undefined) {
            requestContext.setQueryParam("scheduled_in_secs", ObjectSerializer.serialize(scheduledInSecs, "number", ""));
        }

        // Query Params
        if (parentJob !== undefined) {
            requestContext.setQueryParam("parent_job", ObjectSerializer.serialize(parentJob, "string", "uuid"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "{ [key: string]: any; }", ""),
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
     * run flow preview
     * @param workspace 
     * @param flowPreview preview
     */
    public async runFlowPreview(workspace: string, flowPreview: FlowPreview, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "runFlowPreview", "workspace");
        }


        // verify required parameter 'flowPreview' is not null or undefined
        if (flowPreview === null || flowPreview === undefined) {
            throw new RequiredError("JobApi", "runFlowPreview", "flowPreview");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/jobs/run/preview_flow'
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
            ObjectSerializer.serialize(flowPreview, "FlowPreview", ""),
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
     * run script by hash
     * @param workspace 
     * @param hash 
     * @param body Partially filled args
     * @param scheduledFor when to schedule this job (leave empty for immediate run)
     * @param scheduledInSecs schedule the script to execute in the number of seconds starting now
     * @param parentJob The parent job that is at the origin and responsible for the execution of this script if any
     */
    public async runScriptByHash(workspace: string, hash: string, body: any, scheduledFor?: Date, scheduledInSecs?: number, parentJob?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "runScriptByHash", "workspace");
        }


        // verify required parameter 'hash' is not null or undefined
        if (hash === null || hash === undefined) {
            throw new RequiredError("JobApi", "runScriptByHash", "hash");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("JobApi", "runScriptByHash", "body");
        }





        // Path Params
        const localVarPath = '/w/{workspace}/jobs/run/h/{hash}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'hash' + '}', encodeURIComponent(String(hash)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (scheduledFor !== undefined) {
            requestContext.setQueryParam("scheduled_for", ObjectSerializer.serialize(scheduledFor, "Date", "date-time"));
        }

        // Query Params
        if (scheduledInSecs !== undefined) {
            requestContext.setQueryParam("scheduled_in_secs", ObjectSerializer.serialize(scheduledInSecs, "number", ""));
        }

        // Query Params
        if (parentJob !== undefined) {
            requestContext.setQueryParam("parent_job", ObjectSerializer.serialize(parentJob, "string", "uuid"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
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
     * run script by path
     * @param workspace 
     * @param path 
     * @param requestBody script args
     * @param scheduledFor when to schedule this job (leave empty for immediate run)
     * @param scheduledInSecs schedule the script to execute in the number of seconds starting now
     * @param parentJob The parent job that is at the origin and responsible for the execution of this script if any
     */
    public async runScriptByPath(workspace: string, path: string, requestBody: { [key: string]: any; }, scheduledFor?: Date, scheduledInSecs?: number, parentJob?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "runScriptByPath", "workspace");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("JobApi", "runScriptByPath", "path");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("JobApi", "runScriptByPath", "requestBody");
        }





        // Path Params
        const localVarPath = '/w/{workspace}/jobs/run/p/{path}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (scheduledFor !== undefined) {
            requestContext.setQueryParam("scheduled_for", ObjectSerializer.serialize(scheduledFor, "Date", "date-time"));
        }

        // Query Params
        if (scheduledInSecs !== undefined) {
            requestContext.setQueryParam("scheduled_in_secs", ObjectSerializer.serialize(scheduledInSecs, "number", ""));
        }

        // Query Params
        if (parentJob !== undefined) {
            requestContext.setQueryParam("parent_job", ObjectSerializer.serialize(parentJob, "string", "uuid"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "{ [key: string]: any; }", ""),
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
     * run script preview
     * @param workspace 
     * @param preview preview
     */
    public async runScriptPreview(workspace: string, preview: Preview, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "runScriptPreview", "workspace");
        }


        // verify required parameter 'preview' is not null or undefined
        if (preview === null || preview === undefined) {
            throw new RequiredError("JobApi", "runScriptPreview", "preview");
        }


        // Path Params
        const localVarPath = '/w/{workspace}/jobs/run/preview'
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
            ObjectSerializer.serialize(preview, "Preview", ""),
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
     * run script by path
     * @param workspace 
     * @param path 
     * @param requestBody script args
     * @param scheduledFor when to schedule this job (leave empty for immediate run)
     * @param scheduledInSecs schedule the script to execute in the number of seconds starting now
     * @param parentJob The parent job that is at the origin and responsible for the execution of this script if any
     */
    public async runWaitResultScriptByPath(workspace: string, path: string, requestBody: { [key: string]: any; }, scheduledFor?: Date, scheduledInSecs?: number, parentJob?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'workspace' is not null or undefined
        if (workspace === null || workspace === undefined) {
            throw new RequiredError("JobApi", "runWaitResultScriptByPath", "workspace");
        }


        // verify required parameter 'path' is not null or undefined
        if (path === null || path === undefined) {
            throw new RequiredError("JobApi", "runWaitResultScriptByPath", "path");
        }


        // verify required parameter 'requestBody' is not null or undefined
        if (requestBody === null || requestBody === undefined) {
            throw new RequiredError("JobApi", "runWaitResultScriptByPath", "requestBody");
        }





        // Path Params
        const localVarPath = '/w/{workspace}/jobs/run_wait_result/p/{path}'
            .replace('{' + 'workspace' + '}', encodeURIComponent(String(workspace)))
            .replace('{' + 'path' + '}', encodeURIComponent(String(path)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (scheduledFor !== undefined) {
            requestContext.setQueryParam("scheduled_for", ObjectSerializer.serialize(scheduledFor, "Date", "date-time"));
        }

        // Query Params
        if (scheduledInSecs !== undefined) {
            requestContext.setQueryParam("scheduled_in_secs", ObjectSerializer.serialize(scheduledInSecs, "number", ""));
        }

        // Query Params
        if (parentJob !== undefined) {
            requestContext.setQueryParam("parent_job", ObjectSerializer.serialize(parentJob, "string", "uuid"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(requestBody, "{ [key: string]: any; }", ""),
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

export class JobApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelQueuedJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelQueuedJob(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to cancelSuspendedJobGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelSuspendedJobGet(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to cancelSuspendedJobPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelSuspendedJobPost(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to createJobSignature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createJobSignature(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to deleteCompletedJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCompletedJob(response: ResponseContext): Promise<CompletedJob > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompletedJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompletedJob", ""
            ) as CompletedJob;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CompletedJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompletedJob", ""
            ) as CompletedJob;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCompletedJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCompletedJob(response: ResponseContext): Promise<CompletedJob > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CompletedJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompletedJob", ""
            ) as CompletedJob;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CompletedJob = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CompletedJob", ""
            ) as CompletedJob;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJob(response: ResponseContext): Promise<Job > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Job = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Job", ""
            ) as Job;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Job = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Job", ""
            ) as Job;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJobUpdates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJobUpdates(response: ResponseContext): Promise<InlineResponse2006 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2006 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2006", ""
            ) as InlineResponse2006;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2006 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2006", ""
            ) as InlineResponse2006;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCompletedJobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCompletedJobs(response: ResponseContext): Promise<Array<CompletedJob> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CompletedJob> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CompletedJob>", ""
            ) as Array<CompletedJob>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CompletedJob> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CompletedJob>", ""
            ) as Array<CompletedJob>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listJobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listJobs(response: ResponseContext): Promise<Array<Job> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Job> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Job>", ""
            ) as Array<Job>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Job> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Job>", ""
            ) as Array<Job>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listQueue
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listQueue(response: ResponseContext): Promise<Array<QueuedJob> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<QueuedJob> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<QueuedJob>", ""
            ) as Array<QueuedJob>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<QueuedJob> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<QueuedJob>", ""
            ) as Array<QueuedJob>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resumeSuspendedJobGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resumeSuspendedJobGet(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to resumeSuspendedJobPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resumeSuspendedJobPost(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to runFlowByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runFlowByPath(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runFlowPreview
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runFlowPreview(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runScriptByHash
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runScriptByHash(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runScriptByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runScriptByPath(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runScriptPreview
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runScriptPreview(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "uuid"
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runWaitResultScriptByPath
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runWaitResultScriptByPath(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
