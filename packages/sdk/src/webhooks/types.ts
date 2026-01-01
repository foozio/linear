import type { IncomingMessage, ServerResponse } from "http";
import {
  AgentSessionEventWebhookPayload as AgentSessionEventWebhookPayloadType,
  AppUserNotificationWebhookPayload,
  AppUserTeamAccessChangedWebhookPayload as AppUserTeamAccessChangedWebhookPayloadType,
  AttachmentWebhookPayload,
  AuditEntryWebhookPayload,
  CommentWebhookPayload,
  CustomerNeedWebhookPayload,
  CustomerWebhookPayload,
  CycleWebhookPayload,
  DataWebhookPayload,
  DocumentWebhookPayload,
  EntityWebhookPayload,
  InitiativeUpdateWebhookPayload,
  InitiativeWebhookPayload,
  IssueLabelWebhookPayload,
  IssueSlaWebhookPayload as IssueSlaWebhookPayloadType,
  IssueWebhookPayload,
  NotificationWebhookPayload,
  OAuthAppWebhookPayload as OAuthAppWebhookPayloadType,
  ProjectUpdateWebhookPayload,
  ProjectWebhookPayload,
  ReactionWebhookPayload,
  UserWebhookPayload,
} from "../_generated_documents.js";

/**
 * Union type representing all possible Linear webhook payloads.
 * This includes entity webhooks, special webhooks, and notification webhooks.
 */
export type LinearWebhookPayload =
  | EntityWebhookPayloadWithEntityData
  | EntityWebhookPayloadWithUnknownEntityData
  | IssueSlaWebhookPayload
  | OAuthAppWebhookPayload
  | AppUserNotificationWebhookPayloadWithNotification
  | AppUserTeamAccessChangedWebhookPayload
  | AgentSessionEventWebhookPayload;

/**
 * All possible Linear webhook event types.
 */
export type LinearWebhookEventType =
  | "Attachment"
  | "AuditEntry"
  | "Comment"
  | "Customer"
  | "CustomerNeed"
  | "Cycle"
  | "Document"
  | "Initiative"
  | "InitiativeUpdate"
  | "Issue"
  | "IssueLabel"
  | "Project"
  | "ProjectUpdate"
  | "Reaction"
  | "User"
  | "IssueSLA"
  | "OAuthApp"
  | "AppUserNotification"
  | "PermissionChange"
  | "AgentSessionEvent";

/**
 * Maps webhook event types to their corresponding payload types
 */
export type LinearWebhookEventTypeMap = {
  Attachment: EntityWebhookPayloadWithAttachmentData;
  AuditEntry: EntityWebhookPayloadWithAuditEntryData;
  Comment: EntityWebhookPayloadWithCommentData;
  Customer: EntityWebhookPayloadWithCustomerData;
  CustomerNeed: EntityWebhookPayloadWithCustomerNeedData;
  Cycle: EntityWebhookPayloadWithCycleData;
  Document: EntityWebhookPayloadWithDocumentData;
  Initiative: EntityWebhookPayloadWithInitiativeData;
  InitiativeUpdate: EntityWebhookPayloadWithInitiativeUpdateData;
  Issue: EntityWebhookPayloadWithIssueData;
  IssueLabel: EntityWebhookPayloadWithIssueLabelData;
  Project: EntityWebhookPayloadWithProjectData;
  ProjectUpdate: EntityWebhookPayloadWithProjectUpdateData;
  Reaction: EntityWebhookPayloadWithReactionData;
  User: EntityWebhookPayloadWithUserData;
  IssueSLA: IssueSlaWebhookPayload;
  OAuthApp: OAuthAppWebhookPayload;
  AppUserNotification: AppUserNotificationWebhookPayloadWithNotification;
  PermissionChange: AppUserTeamAccessChangedWebhookPayload;
  AgentSessionEvent: AgentSessionEventWebhookPayload;
};

/**
 * Event handler function for webhook events.
 * @template T - The specific webhook payload type
 * @param payload - The webhook payload data
 * @returns void or Promise<void>
 */
export type LinearWebhookEventHandler<T extends LinearWebhookPayload = LinearWebhookPayload> = (
  payload: T
) => void | Promise<void>;

/**
 * Webhook handler interface that provides event registration capabilities.
 * This interface supports both Fetch API Request/Response and Node.js IncomingMessage/ServerResponse.
 */
export interface LinearWebhookHandler {
  /** Handles incoming webhook requests (Fetch API) */
  (request: Request): Promise<Response>;
  /** Handles incoming webhook requests (Node.js) */
  (request: IncomingMessage, response: ServerResponse): Promise<void>;
  /**
   * Registers an event handler for webhook events.
   *
   * @template T - The specific event type (when not using wildcard)
   * @param eventType - The event type to listen for, or `*` for all events
   * @param handler - The handler function to call when the event occurs
   */
  on<T extends LinearWebhookEventType>(
    eventType: T,
    handler: LinearWebhookEventHandler<LinearWebhookEventTypeMap[T]>
  ): void;
  on(eventType: "*", handler: LinearWebhookEventHandler<LinearWebhookPayload>): void;
  /**
   * Removes an event handler for webhook events.
   *
   * @template T - The specific event type (when not using wildcard)
   * @param eventType - The event type to remove the handler from, or `*` for wildcard handler
   * @param handler - The handler function to remove
   */
  off<T extends LinearWebhookEventType>(
    eventType: T,
    handler: LinearWebhookEventHandler<LinearWebhookEventTypeMap[T]>
  ): void;
  off(eventType: "*", handler: LinearWebhookEventHandler<LinearWebhookPayload>): void;
  /**
   * Removes all event handlers for a specific event type, or all handlers if no event type is specified.
   * @param eventType - Optional event type to remove handlers for
   */
  removeAllListeners(eventType?: string): void;
}

/**
 * A webhook payload for an app user notification webhook.
 * Includes the notification data and a narrowed `type`.
 */
export interface AppUserNotificationWebhookPayloadWithNotification extends AppUserNotificationWebhookPayload {
  notification: NotificationWebhookPayload;
  type: "AppUserNotification";
}

/**
 * A webhook payload for an entity-specific webhook where the entity data is generic.
 */
export interface EntityWebhookPayloadWithUnknownEntityData extends EntityWebhookPayload {
  data: DataWebhookPayload;
}

/**
 * Union type representing entity-specific webhook payloads with narrowed data and type fields.
 */
export type EntityWebhookPayloadWithEntityData =
  | EntityWebhookPayloadWithAttachmentData
  | EntityWebhookPayloadWithAuditEntryData
  | EntityWebhookPayloadWithCommentData
  | EntityWebhookPayloadWithCustomerData
  | EntityWebhookPayloadWithCustomerNeedData
  | EntityWebhookPayloadWithCycleData
  | EntityWebhookPayloadWithDocumentData
  | EntityWebhookPayloadWithInitiativeData
  | EntityWebhookPayloadWithInitiativeUpdateData
  | EntityWebhookPayloadWithIssueData
  | EntityWebhookPayloadWithIssueLabelData
  | EntityWebhookPayloadWithProjectData
  | EntityWebhookPayloadWithProjectUpdateData
  | EntityWebhookPayloadWithReactionData
  | EntityWebhookPayloadWithUserData;

/**
 * Webhook payload for Attachment entities.
 */
export type EntityWebhookPayloadWithAttachmentData = EntityWebhookPayload & {
  data: AttachmentWebhookPayload;
  type: "Attachment";
};

/**
 * Webhook payload for AuditEntry entities.
 */
export type EntityWebhookPayloadWithAuditEntryData = EntityWebhookPayload & {
  data: AuditEntryWebhookPayload;
  type: "AuditEntry";
};

/**
 * Webhook payload for Comment entities.
 */
export type EntityWebhookPayloadWithCommentData = EntityWebhookPayload & {
  data: CommentWebhookPayload;
  type: "Comment";
};

/**
 * Webhook payload for Customer entities.
 */
export type EntityWebhookPayloadWithCustomerData = EntityWebhookPayload & {
  data: CustomerWebhookPayload;
  type: "Customer";
};

/**
 * Webhook payload for CustomerNeed entities.
 */
export type EntityWebhookPayloadWithCustomerNeedData = EntityWebhookPayload & {
  data: CustomerNeedWebhookPayload;
  type: "CustomerNeed";
};

/**
 * Webhook payload for Cycle entities.
 */
export type EntityWebhookPayloadWithCycleData = EntityWebhookPayload & {
  data: CycleWebhookPayload;
  type: "Cycle";
};

/**
 * Webhook payload for Document entities.
 */
export type EntityWebhookPayloadWithDocumentData = EntityWebhookPayload & {
  data: DocumentWebhookPayload;
  type: "Document";
};

/**
 * Webhook payload for Initiative entities.
 */
export type EntityWebhookPayloadWithInitiativeData = EntityWebhookPayload & {
  data: InitiativeWebhookPayload;
  type: "Initiative";
};

/**
 * Webhook payload for InitiativeUpdate entities.
 */
export type EntityWebhookPayloadWithInitiativeUpdateData = EntityWebhookPayload & {
  data: InitiativeUpdateWebhookPayload;
  type: "InitiativeUpdate";
};

/**
 * Webhook payload for Issue entities.
 */
export type EntityWebhookPayloadWithIssueData = EntityWebhookPayload & {
  data: IssueWebhookPayload;
  type: "Issue";
};

/**
 * Webhook payload for IssueLabel entities.
 */
export type EntityWebhookPayloadWithIssueLabelData = EntityWebhookPayload & {
  data: IssueLabelWebhookPayload;
  type: "IssueLabel";
};

/**
 * Webhook payload for Project entities.
 */
export type EntityWebhookPayloadWithProjectData = EntityWebhookPayload & {
  data: ProjectWebhookPayload;
  type: "Project";
};

/**
 * Webhook payload for ProjectUpdate entities.
 */
export type EntityWebhookPayloadWithProjectUpdateData = EntityWebhookPayload & {
  data: ProjectUpdateWebhookPayload;
  type: "ProjectUpdate";
};

/**
 * Webhook payload for Reaction entities.
 */
export type EntityWebhookPayloadWithReactionData = EntityWebhookPayload & {
  data: ReactionWebhookPayload;
  type: "Reaction";
};

/**
 * Webhook payload for User entities.
 */
export type EntityWebhookPayloadWithUserData = EntityWebhookPayload & {
  data: UserWebhookPayload;
  type: "User";
};

/**
 * Webhook payload for Agent Session Event events.
 */
export type AgentSessionEventWebhookPayload = AgentSessionEventWebhookPayloadType & {
  type: "AgentSessionEvent";
};

/**
 * Webhook payload for Issue SLA events.
 */
export type IssueSlaWebhookPayload = IssueSlaWebhookPayloadType & {
  type: "IssueSLA";
};

/**
 * Webhook payload for OAuth App events.
 */
export type OAuthAppWebhookPayload = OAuthAppWebhookPayloadType & {
  type: "OAuthApp";
};

/**
 * Webhook payload for App User Team Access Changed events (PermissionChange).
 */
export type AppUserTeamAccessChangedWebhookPayload = AppUserTeamAccessChangedWebhookPayloadType & {
  type: "PermissionChange";
};
