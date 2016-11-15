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

const log4js = require('log4js');
const mkdirp = require('mkdirp');
const path = require('path');
const logDir = require('./').logDir;

mkdirp(logDir, err => !!err && console.error(err));

const layout = {
    type: 'pattern',
    pattern: "[%r] [%[%5.5p%]] %n%m%n"
};

log4js.configure({
    appenders: [
        {
            type: 'console',
            layout: layout
        },
        {
            type: 'dateFile',
            layout: layout,
            filename: path.join(logDir, 'weather.log'),
            pattern: '-dd.log'
        }
    ],
    levels: {
        '[all]': 'INFO'
    }
});

const logger = module.exports = log4js.getLogger();