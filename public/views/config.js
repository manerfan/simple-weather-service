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

const config = module.exports = {
    fetchUrl: '/api/weather',
    period: 60, /* in seconds */
    cond: {
        100: {name: '晴', icon: 'http://files.heweather.com/cond_icon/100.png'},
        101: {name: '多云', icon: 'http://files.heweather.com/cond_icon/101.png'},
        102: {name: '少云', icon: 'http://files.heweather.com/cond_icon/102.png'},
        103: {name: '晴间多云', icon: 'http://files.heweather.com/cond_icon/103.png'},
        104: {name: '阴', icon: 'http://files.heweather.com/cond_icon/104.png'},
        200: {name: '有风', icon: 'http://files.heweather.com/cond_icon/200.png'},
        201: {name: '平静', icon: 'http://files.heweather.com/cond_icon/201.png'},
        202: {name: '微风', icon: 'http://files.heweather.com/cond_icon/202.png'},
        203: {name: '和风', icon: 'http://files.heweather.com/cond_icon/203.png'},
        204: {name: '清风', icon: 'http://files.heweather.com/cond_icon/204.png'},
        205: {name: '强风/劲风', icon: 'http://files.heweather.com/cond_icon/205.png'},
        206: {name: '疾风', icon: 'http://files.heweather.com/cond_icon/206.png'},
        207: {name: '大风', icon: 'http://files.heweather.com/cond_icon/207.png'},
        208: {name: '烈风', icon: 'http://files.heweather.com/cond_icon/208.png'},
        209: {name: '风暴', icon: 'http://files.heweather.com/cond_icon/209.png'},
        210: {name: '狂爆风', icon: 'http://files.heweather.com/cond_icon/210.png'},
        211: {name: '飓风', icon: 'http://files.heweather.com/cond_icon/211.png'},
        212: {name: '龙卷风', icon: 'http://files.heweather.com/cond_icon/212.png'},
        213: {name: '热带风暴', icon: 'http://files.heweather.com/cond_icon/213.png'},
        300: {name: '阵雨', icon: 'http://files.heweather.com/cond_icon/300.png'},
        301: {name: '强阵雨', icon: 'http://files.heweather.com/cond_icon/301.png'},
        302: {name: '雷阵雨', icon: 'http://files.heweather.com/cond_icon/302.png'},
        303: {name: '强雷阵雨', icon: 'http://files.heweather.com/cond_icon/303.png'},
        304: {name: '雷阵雨伴有冰', icon: 'http://files.heweather.com/cond_icon/304.png'},
        305: {name: '小雨', icon: 'http://files.heweather.com/cond_icon/305.png'},
        306: {name: '中雨', icon: 'http://files.heweather.com/cond_icon/306.png'},
        307: {name: '大雨', icon: 'http://files.heweather.com/cond_icon/307.png'},
        308: {name: '极端降雨', icon: 'http://files.heweather.com/cond_icon/308.png'},
        309: {name: '毛毛雨/细雨', icon: 'http://files.heweather.com/cond_icon/309.png'},
        310: {name: '暴雨', icon: 'http://files.heweather.com/cond_icon/310.png'},
        311: {name: '大暴雨', icon: 'http://files.heweather.com/cond_icon/311.png'},
        312: {name: '特大暴雨', icon: 'http://files.heweather.com/cond_icon/312.png'},
        313: {name: '冻雨', icon: 'http://files.heweather.com/cond_icon/313.png'},
        400: {name: '小雪', icon: 'http://files.heweather.com/cond_icon/400.png'},
        401: {name: '中雪', icon: 'http://files.heweather.com/cond_icon/401.png'},
        402: {name: '大雪', icon: 'http://files.heweather.com/cond_icon/402.png'},
        403: {name: '暴雪', icon: 'http://files.heweather.com/cond_icon/403.png'},
        404: {name: '雨夹雪', icon: 'http://files.heweather.com/cond_icon/404.png'},
        405: {name: '雨雪天气', icon: 'http://files.heweather.com/cond_icon/405.png'},
        406: {name: '阵雨夹雪', icon: 'http://files.heweather.com/cond_icon/406.png'},
        407: {name: '阵雪', icon: 'http://files.heweather.com/cond_icon/407.png'},
        500: {name: '薄雾', icon: 'http://files.heweather.com/cond_icon/500.png'},
        501: {name: '雾', icon: 'http://files.heweather.com/cond_icon/501.png'},
        502: {name: '霾', icon: 'http://files.heweather.com/cond_icon/502.png'},
        503: {name: '扬沙', icon: 'http://files.heweather.com/cond_icon/503.png'},
        504: {name: '浮尘', icon: 'http://files.heweather.com/cond_icon/504.png'},
        507: {name: '沙尘暴', icon: 'http://files.heweather.com/cond_icon/507.png'},
        508: {name: '强沙尘暴', icon: 'http://files.heweather.com/cond_icon/508.png'},
        900: {name: '热', icon: 'http://files.heweather.com/cond_icon/900.png'},
        901: {name: '冷', icon: 'http://files.heweather.com/cond_icon/901.png'},
        999: {name: '未知', icon: 'http://files.heweather.com/cond_icon/999.png'}
    }
};