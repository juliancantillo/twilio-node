/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type BindingBindingType = 'apn'|'gcm'|'sms'|'fcm'|'facebook-messenger'|'alexa';

/**
 * Initialize the BindingList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 */
declare function BindingList(version: V1, serviceSid: string): BindingListInstance;

interface BindingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): BindingContext;
  /**
   * create a BindingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: BindingListInstanceCreateOptions, callback?: (error: Error | null, item: BindingInstance) => any): Promise<BindingInstance>;
  /**
   * Streams BindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams BindingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: BindingListInstanceEachOptions, callback?: (item: BindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a binding
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): BindingContext;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Retrieve a single target page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
  /**
   * Lists BindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: BindingListInstanceOptions, callback?: (error: Error | null, items: BindingInstance[]) => any): Promise<BindingInstance[]>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Retrieve a single page of BindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: BindingListInstancePageOptions, callback?: (error: Error | null, items: BindingPage) => any): Promise<BindingPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property address - The channel-specific address
 * @property bindingType - The type of the Binding
 * @property credentialSid - The SID of the Credential resource to be used to send notifications to this Binding
 * @property endpoint - Deprecated
 * @property identity - The `identity` value that identifies the new resource's User
 * @property notificationProtocolVersion - The protocol version to use to send the notification
 * @property tag - A tag that can be used to select the Bindings to notify
 */
interface BindingListInstanceCreateOptions {
  address: string;
  bindingType: BindingBindingType;
  credentialSid?: string;
  endpoint?: string;
  identity: string;
  notificationProtocolVersion?: string;
  tag?: string | string[];
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property endDate - Only include usage that occurred on or before this date
 * @property identity - The `identity` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property startDate - Only include usage that has occurred on or after this date
 * @property tag - Only list Bindings that have all of the specified Tags
 */
interface BindingListInstanceEachOptions {
  callback?: (item: BindingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endDate?: Date;
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
  startDate?: Date;
  tag?: string | string[];
}

/**
 * Options to pass to list
 *
 * @property endDate - Only include usage that occurred on or before this date
 * @property identity - The `identity` value of the resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property startDate - Only include usage that has occurred on or after this date
 * @property tag - Only list Bindings that have all of the specified Tags
 */
interface BindingListInstanceOptions {
  endDate?: Date;
  identity?: string | string[];
  limit?: number;
  pageSize?: number;
  startDate?: Date;
  tag?: string | string[];
}

/**
 * Options to pass to page
 *
 * @property endDate - Only include usage that occurred on or before this date
 * @property identity - The `identity` value of the resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property startDate - Only include usage that has occurred on or after this date
 * @property tag - Only list Bindings that have all of the specified Tags
 */
interface BindingListInstancePageOptions {
  endDate?: Date;
  identity?: string | string[];
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  startDate?: Date;
  tag?: string | string[];
}

interface BindingPayload extends BindingResource, Page.TwilioResponsePayload {
}

interface BindingResource {
  account_sid: string;
  address: string;
  binding_type: string;
  credential_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  links: string;
  notification_protocol_version: string;
  service_sid: string;
  sid: string;
  tags: string[];
  url: string;
}

interface BindingSolution {
  serviceSid?: string;
}


declare class BindingContext {
  /**
   * Initialize the BindingContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the resource from
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BindingInstance) => any): Promise<BindingInstance>;
  /**
   * remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BindingInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class BindingInstance extends SerializableClass {
  /**
   * Initialize the BindingContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: BindingPayload, serviceSid: string, sid: string);

  private _proxy: BindingContext;
  accountSid: string;
  address: string;
  bindingType: string;
  credentialSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  endpoint: string;
  /**
   * fetch a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: BindingInstance) => any): Promise<BindingInstance>;
  identity: string;
  links: string;
  notificationProtocolVersion: string;
  /**
   * remove a BindingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: BindingInstance) => any): Promise<boolean>;
  serviceSid: string;
  sid: string;
  tags: string[];
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class BindingPage extends Page<V1, BindingPayload, BindingResource, BindingInstance> {
  /**
   * Initialize the BindingPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: BindingSolution);

  /**
   * Build an instance of BindingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BindingPayload): BindingInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { BindingBindingType, BindingContext, BindingInstance, BindingList, BindingListInstance, BindingListInstanceCreateOptions, BindingListInstanceEachOptions, BindingListInstanceOptions, BindingListInstancePageOptions, BindingPage, BindingPayload, BindingResource, BindingSolution }
