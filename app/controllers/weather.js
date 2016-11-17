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
        resolve({
            "alarms": [
                {
                    "level": "蓝色",
                    "stat": "预警中",
                    "title": "山东省青岛市气象台发布大风蓝色预警",
                    "txt": "青岛市气象台2016年08月29日15时24分继续发布大风蓝色预警信号：预计今天下午到明天，我市北风风力海上6到7级阵风9级，陆地4到5阵风7级，请注意防范。",
                    "type": "大风"
                }
            ],
            "aqi": {
                "city": {
                    "aqi": "308",
                    "co": "3",
                    "no2": "72",
                    "o3": "25",
                    "pm10": "360",
                    "pm25": "257",
                    "qlty": "严重污染",
                    "so2": "45"
                }
            },
            "basic": {
                "city": "西安",
                "cnty": "中国",
                "id": "CN101110101",
                "lat": "34.285000",
                "lon": "108.969000",
                "update": {
                    "loc": "2016-11-17 14:56",
                    "utc": "2016-11-17 06:56"
                }
            },
            "daily_forecast": [
                {
                    "astro": {
                        "mr": "20:33",
                        "ms": "09:53",
                        "sr": "07:19",
                        "ss": "17:38"
                    },
                    "cond": {
                        "code_d": "502",
                        "code_n": "502",
                        "txt_d": "霾",
                        "txt_n": "霾"
                    },
                    "date": "2016-11-17",
                    "hum": "59",
                    "pcpn": "0.0",
                    "pop": "0",
                    "pres": "1017",
                    "tmp": {
                        "max": "12",
                        "min": "6"
                    },
                    "uv": "3",
                    "vis": "10",
                    "wind": {
                        "deg": "35",
                        "dir": "西南风",
                        "sc": "微风",
                        "spd": "1"
                    }
                },
                {
                    "astro": {
                        "mr": "21:35",
                        "ms": "10:52",
                        "sr": "07:20",
                        "ss": "17:38"
                    },
                    "cond": {
                        "code_d": "100",
                        "code_n": "100",
                        "txt_d": "晴",
                        "txt_n": "晴"
                    },
                    "date": "2016-11-18",
                    "hum": "65",
                    "pcpn": "0.0",
                    "pop": "0",
                    "pres": "1013",
                    "tmp": {
                        "max": "16",
                        "min": "6"
                    },
                    "uv": "3",
                    "vis": "10",
                    "wind": {
                        "deg": "34",
                        "dir": "东北风",
                        "sc": "微风",
                        "spd": "3"
                    }
                },
                {
                    "astro": {
                        "mr": "22:36",
                        "ms": "11:45",
                        "sr": "07:21",
                        "ss": "17:37"
                    },
                    "cond": {
                        "code_d": "101",
                        "code_n": "101",
                        "txt_d": "多云",
                        "txt_n": "多云"
                    },
                    "date": "2016-11-19",
                    "hum": "29",
                    "pcpn": "0.0",
                    "pop": "0",
                    "pres": "1019",
                    "tmp": {
                        "max": "16",
                        "min": "7"
                    },
                    "uv": "3",
                    "vis": "10",
                    "wind": {
                        "deg": "27",
                        "dir": "东北风",
                        "sc": "微风",
                        "spd": "8"
                    }
                }
            ],
            "hourly_forecast": [
                {
                    "cond": {
                        "code": "103",
                        "txt": "晴间多云"
                    },
                    "date": "2016-11-17 16:00",
                    "hum": "44",
                    "pop": "0",
                    "pres": "1015",
                    "tmp": "21",
                    "wind": {
                        "deg": "34",
                        "dir": "东北风",
                        "sc": "微风",
                        "spd": "15"
                    }
                },
                {
                    "cond": {
                        "code": "103",
                        "txt": "晴间多云"
                    },
                    "date": "2016-11-17 19:00",
                    "hum": "55",
                    "pop": "0",
                    "pres": "1016",
                    "tmp": "20",
                    "wind": {
                        "deg": "39",
                        "dir": "东北风",
                        "sc": "微风",
                        "spd": "14"
                    }
                },
                {
                    "cond": {
                        "code": "103",
                        "txt": "晴间多云"
                    },
                    "date": "2016-11-17 22:00",
                    "hum": "64",
                    "pop": "0",
                    "pres": "1016",
                    "tmp": "16",
                    "wind": {
                        "deg": "37",
                        "dir": "东北风",
                        "sc": "微风",
                        "spd": "12"
                    }
                }
            ],
            "now": {
                "cond": {
                    "code": "502",
                    "txt": "霾"
                },
                "fl": "12",
                "hum": "65",
                "pcpn": "0",
                "pres": "1016",
                "tmp": "13",
                "vis": "2",
                "wind": {
                    "deg": "60",
                    "dir": "东北风",
                    "sc": "4-5",
                    "spd": "19"
                }
            },
            "status": "ok",
            "suggestion": {
                "comf": {
                    "brf": "较舒适",
                    "txt": "白天天气阴沉，会感到有点儿凉，但大部分人完全可以接受。"
                },
                "cw": {
                    "brf": "较适宜",
                    "txt": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"
                },
                "drsg": {
                    "brf": "较冷",
                    "txt": "建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。"
                },
                "flu": {
                    "brf": "易发",
                    "txt": "天冷空气湿度大，易发生感冒，请注意适当增加衣服，加强自我防护避免感冒。"
                },
                "sport": {
                    "brf": "较不宜",
                    "txt": "阴天，且天气炎热，建议停止户外运动，选择在室内进行低强度运动。"
                },
                "trav": {
                    "brf": "较不宜",
                    "txt": "空气质量差，不适宜旅游"
                },
                "uv": {
                    "brf": "最弱",
                    "txt": "属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"
                }
            }
        });

        return;

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
