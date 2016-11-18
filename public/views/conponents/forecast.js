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
const {connect} = require('react-redux');
const {Row, Col, Panel} = require('react-bootstrap');
const {weather, weatherIcon, formatDate, formatWeek} = require('./utils');

const Forecast = ({forecasts = []}) => {

    function generate(forecast) {
        return (
            <Col xs={4} md={4} lg={4}>
                <Panel header={`${formatDate(forecast.date)} ${formatWeek(forecast.date)}`}>
                    <div className="icon">
                        <img src={weatherIcon(forecast.cond.code_d)}/>
                        <img src={weatherIcon(forecast.cond.code_n)}/>
                    </div>
                    <span>{weather(forecast.cond)}</span>
                    <span>{forecast.tmp.max}℃ / {forecast.tmp.min}℃</span>
                    <span>{forecast.wind.sc} {forecast.wind.spd}级</span>
                </Panel>
            </Col>
        )
    }

    return (
        <Row className="forecast">
            {forecasts.map(forecast => generate(forecast))}
        </Row>
    )
};

Forecast.propTypes = {
    forecasts: React.PropTypes.array
};

const mapStateToProps = (state) => {
    const {data: {daily_forecast: forecasts}} = state;
    return {forecasts};
};

module.exports = connect(mapStateToProps)(Forecast);
