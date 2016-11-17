/*
 * ManerFan(http://manerfan.com). All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by ManerFan on 2016/11/17.
 */

const {createAction} = require('redux-actions');
require('whatwg-fetch');
const {fetchUrl} = require('../../config');

export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const ERROR_POST = 'ERROR_POST';

var requestPost = createAction('REQUEST_POST');
var receivePost = createAction('RECEIVE_POST');
var errorPost = createAction('ERROR_POST');

function fetchPost() {
    return dispath => {
        dispath(requestPost());
        return fetch(fetchUrl, {method: 'POST'})
            .then(resp => resp.json())
            .then(data => dispath(receivePost(data)))
            .catch(e => {
                dispath(errorPost());
            });
    }
}

function shouldFetchPost(state) {
    return !state.fetchingMode;
}

export const fetchAction = function () {
    return (dispath, getState) => {
        return shouldFetchPost(getState()) && dispath(fetchPost());
    }
};
