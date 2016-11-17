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
const {Row, Col} = require('react-bootstrap');

const Basic = ({basic, qlt, fetchingMode}) => {
    return (
        <Row className="basic">
            <Col xs={12} md={12} lg={12}>
                <span className="city">{basic.city}</span>
                <Aqi qlt={qlt}/>
                <Update loc={basic.update.loc}/>
            </Col>
        </Row>
    )
};

const Aqi = ({qlt: {aqi, qlty}}) => {
    return (
        <span>
            <span>{aqi}</span>
            <span>{qlty}</span>
        </span>
    )
};

const Update = ({loc}) => {
    return (
        <span className="pull-right">更新时间 {formatDate(loc)}</span>
    )
};

function formatDate(date) {
    let d = new Date(date);
    return `${d.getHours()}:${d.getMinutes()}`;
}

Basic.propTypes = {
    basic: React.PropTypes.object,
    aqi: React.PropTypes.object
};

Basic.defaultProps = {
    basic: {city: '', update: {loc: ''}},
    qlt: {aqi: '0', qlty: ''},
    fetchingMode: 0
};

const mapStateToProps = (state) => {
    const fetchingMode = state.fetchingMode;
    const data = state.data;
    const {basic, aqi} = data;
    let qlt;
    !!aqi && (qlt = aqi.city);
    return {basic, qlt, fetchingMode}
};

module.exports = connect(mapStateToProps)(Basic);
