/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CriticalAlert = {
    /**
     * Unique identifier for the alert
     */
    id?: number;
    /**
     * Type of alert (e.g., critical_error)
     */
    alert_type?: string;
    /**
     * The message content of the alert
     */
    message?: string;
    /**
     * Time when the alert was created
     */
    created_at?: string;
    /**
     * Acknowledgment status of the alert, can be true, false, or null if not set
     */
    acknowledged?: boolean | null;
    /**
     * Workspace id if the alert is in the scope of a workspace
     */
    workspace_id?: string | null;
};

