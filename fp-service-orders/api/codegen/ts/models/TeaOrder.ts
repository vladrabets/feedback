/* tslint:disable */
/* eslint-disable */
/**
 * FP Order service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TeaOrder
 */
export interface TeaOrder {
    /**
     * 
     * @type {string}
     * @memberof TeaOrder
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof TeaOrder
     */
    takeOffId?: number;
    /**
     * 
     * @type {string}
     * @memberof TeaOrder
     */
    teaType?: string;
    /**
     * 
     * @type {string}
     * @memberof TeaOrder
     */
    time?: string;
    /**
     * queue | ready | taken
     * @type {string}
     * @memberof TeaOrder
     */
    status?: string;
}

export function TeaOrderFromJSON(json: any): TeaOrder {
    return TeaOrderFromJSONTyped(json, false);
}

export function TeaOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeaOrder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'takeOffId': !exists(json, 'takeOffId') ? undefined : json['takeOffId'],
        'teaType': !exists(json, 'teaType') ? undefined : json['teaType'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function TeaOrderToJSON(value?: TeaOrder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'takeOffId': value.takeOffId,
        'teaType': value.teaType,
        'time': value.time,
        'status': value.status,
    };
}

