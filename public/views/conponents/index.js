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

const React = require('react');
const {Provider} = require('react-redux');
const {Grid} = require('react-bootstrap');
const {period} = require('../config');

const store = require('../store/index');
const {fetchAction} = require('../store/actions');

store.dispatch(fetchAction());
setInterval(() => {
    store.dispatch(fetchAction());
}, period * 1000);

const Basic = require('./basic');
const Now = require('./now');
const Forecast = require('./forecast');
const Alarm = require('./alarm');

module.exports = function () {
    return (
        <Provider store={store}>
            <Grid>
                <Basic/>
                <Now/>
                <Forecast/>
                <Alarm/>
            </Grid>
        </Provider>
    )
};