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
 * Created by ManerFan on 2016/11/15.
 */

const request = require('request');
const {city, key, url, docs} = require('../../config');

let options = {
    url: url,
    form: {city, key}, /* 请求参数 */
    json: true, /* 以json格式返回 */
    timeout: 5000 /* 超时时间 */
};

exports.forecast = () => {
    return new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            /* 请求出现错误 */
            if (!!error) {
                reject(error);
                return;
            }

            /* 未返回200 */
            if (200 != response.statusCode) {
                reject(new Error(`${response.statusMessage} See: ${docs}`, response.statusCode));
                return;
            }

            let data = body.HeWeather5[0];

            /* 参数有误 */
            if ('ok' != data.status) {
                reject(new Error(`${data.status} See: ${docs}`, 500));
                return;
            }

            resolve(data);
        });
    });
};
