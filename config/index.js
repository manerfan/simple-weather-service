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

const config = module.exports = {
    port: 80,
    period: 300, /* in seconds */
    apikey: 'Your Baidu Api Store Key',
    cityname: '西安', /* cityname or cityid */
    cityid: '101110101',
    url: 'http://apis.baidu.com/apistore/weatherservice/recentweathers',
    docs: 'http://apistore.baidu.com/apiworks/servicedetail/112.html',
    logDir: 'logs'
};