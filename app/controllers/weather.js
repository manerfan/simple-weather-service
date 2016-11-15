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
const {cityid, cityname, apikey, url, docs} = require('../../config');
const score = require('underscore');

let query = {};
!score.isEmpty(cityid) && (query.cityid = cityid);
!score.isEmpty(cityname) && (query.cityname = cityname);

let options = {
    method: 'GET',
    url: url,
    headers: {apikey: apikey}, /* apikey需要放到header中 */
    qs: query, /* 请求参数 */
    json: true, /* 以json格式返回 */
    timeout: 5000 /* 超时时间 */
};

exports.forecast = () => {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
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

            /* 参数有误 */
            if (0 != body.errNum) {
                reject(new Error(`${body.errMsg} See: ${docs}`, body.errNum));
                return;
            }

            resolve(body);
        });
    });
};
