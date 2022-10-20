import {ActionTypes, TypeToAction} from "./types";

export function createAsyncGroup<R, S, F, C>(group: string, prefix: string){

    const renderAction = (variant: ActionTypes) => {
        return `@${group}/${prefix}_'${variant}'`.toUpperCase()
    }

    const wrapCreator = <T>(data: T,type: ActionTypes) => {
        return {
            type: renderAction(type),
            payload: data
        }
    }

    const result: TypeToAction<R, S ,F, C>  = {
        REQUEST: {
            type: renderAction('REQUEST'),
            creator: (data: R)=> {
                return wrapCreator(data, 'REQUEST')
            }
        },
        SUCCESS: {
            type: renderAction('SUCCESS'),
            creator: (data: S)=> {
                return wrapCreator(data, 'SUCCESS')}
        },
        FAILURE: {
            type: renderAction('FAILURE'),
            creator: (data: F)=> {
                return wrapCreator(data, 'FAILURE')}
        },
        CANCELED: {
            type: renderAction('CANCELED'),
            creator: (data: C)=> {
                return wrapCreator(data, 'CANCELED')
            }
        }
    };

    return result
}

const creator = createAsyncGroup<string, string, string, null>('user', 'data')

creator.SUCCESS.creator('kek')
