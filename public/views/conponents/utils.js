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
 * Created by ManerFan on 2016/11/18.
 */

const {cond} = require('../config');

export const weather = (cond = {}) => {
    let {txt_d, txt_n}= cond;
    return txt_d === txt_n ? txt_d : `${txt_d} 转 ${txt_n}`;
};

export const weatherIcon = (code) => {
    const w = cond[code];
    return !!w ? w.icon : cond[999].icon;
};

export const formatTime = (date) => {
    let d = new Date(date);
    return `${d.getHours()}:${d.getMinutes()}`;
};

export const formatDate = (date) => {
    let d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
};

const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
export const formatWeek = (date) => {
    let d = new Date(date);
    return `${week[d.getDay()]}`;
};