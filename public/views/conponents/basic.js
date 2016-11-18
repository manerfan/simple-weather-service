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
const {Row, Col, Label} = require('react-bootstrap');
const {formatTime} = require('./utils');

/* 基本信息 */
const Basic = ({basic = {city: '', update: {loc: ''}}, qlt = {aqi: '0', qlty: ''}, fetchingMode = 0}) => {
    return (
        <Row className="basic">
            <Col xs={12} md={12} lg={12}>
                <span className="city">{basic.city}</span>
                <Aqi qlt={qlt}/>
                <Update loc={basic.update.loc} fetchingMode={fetchingMode}/>
            </Col>
        </Row>
    )
};

/* AQI信息 */
const Aqi = ({qlt: {aqi, qlty}}) => {
    const level = aqiLevel(aqi);
    return (
        <span className={`aqi level_${level}`}>
            <span>{aqi}</span>
            <span>{qlty}</span>
        </span>
    )
};

const aqiLevel = (aqi) => {
    const num = parseInt(aqi);
    if (num < 35) return 1;
    if (num < 75) return 2;
    if (num < 115) return 3;
    if (num < 150) return 4;
    if (num < 250) return 5;
    return 5;
};

/* 更新时间 */
const Update = ({loc, fetchingMode}) => {
    function feching(fetchingMode) {
        if (fetchingMode > 0) {
            return <Label bsStyle="info">正在更新</Label>;
        }

        if (fetchingMode < 0) {
            return <Label bsStyle="danger">更新失败</Label>;
        }

        return null;
    }

    return (
        <span className="pull-right">{feching(fetchingMode)} 更新时间 {formatTime(loc)}</span>
    )
};

Basic.propTypes = {
    basic: React.PropTypes.object,
    aqi: React.PropTypes.object
};

const mapStateToProps = (state) => {
    const fetchingMode = state.fetchingMode;
    const {basic, aqi} = state.data;
    let qlt;
    !!aqi && (qlt = aqi.city);
    return {basic, qlt, fetchingMode}
};

module.exports = connect(mapStateToProps)(Basic);
