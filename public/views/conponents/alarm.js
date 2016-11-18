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
const {Alert} = require('react-bootstrap');

const Alarm = ({alarms = [{txt: '这里显示预警信息：预计今天下午到明天，我市北风风力海上6到7级阵风9级，陆地4到5阵风7级，请注意防范。'}]}) => {
    if (!!alarms && alarms.length > 0) {
        return (
            <Alert bsStyle="danger">
                <marquee className="text-danger" behavior="scroll">{alarms.map(alarm => alarm.txt).join("  ")}</marquee>
            </Alert>
        )
    }
    return null;
};

Alarm.propTypes = {
    alarms: React.PropTypes.object
};

const mapStateToProps = (state) => {
    const {data:{alarms}} = state;
    return {alarms};
};

module.exports = connect(mapStateToProps)(Alarm);
