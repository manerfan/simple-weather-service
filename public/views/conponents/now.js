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
const {weatherIcon, formatDate, formatWeek} = require('./utils');

const Now = ({now = {cond: {}, wind: {}}, today = {tmp: {}, wind: {}}}) => {
    return (
        <Row className="now">
            <CurrTmp tmp={now.tmp}/>
            <CurrWeather cond={now.cond} today={today}/>
            <CurrDate date={today.date}/>
        </Row>
    )
};

Now.propTypes = {
    now: React.PropTypes.object
};

/* 当前温度 */
const CurrTmp = ({tmp}) => {
    return (
        <Col xs={3} md={3} lg={3}>
            <span className="curr_tmp">{tmp}℃</span>
        </Col>
    )
};

/* 当前天气 */
const CurrWeather = ({cond, today}) => {
    return (
        <Col xs={5} md={5} lg={5}>
            <img className="curr_icon" src={weatherIcon(cond.code)}/>
            <div style={{position: 'absolute', paddingLeft: '125px'}} className="curr_weather">
                <span>{cond.txt} {today.tmp.max}℃/{today.tmp.min}℃</span>
                <span>{today.wind.sc} {today.wind.spd}级</span>
            </div>
        </Col>
    )
};

/* 当前日期 */
class CurrDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: formatTime(new Date())
        };
    }

    tick() {
        this.setState({
            time: formatTime(new Date())
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <Col xs={4} md={4} lg={4}>
                <div style={{width:'100%'}}  className="pull-right curr_weather">
                    <span style={{textAlign: 'right'}} >{formatDate(this.props.date)} {formatWeek(this.props.date)}</span>
                    <span style={{textAlign: 'right'}}>{this.state.time}</span>
                </div>
            </Col>
        )
    }
}

const formatTime = (date) => {
    return `${correctNum(date.getHours())}:${correctNum(date.getMinutes())}:${correctNum(date.getSeconds())}`;
};

const correctNum = (num) => {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
};

const mapStateToProps = (state) => {
    const {now, daily_forecast} = state.data;
    let today;
    !!daily_forecast && (today = daily_forecast[0]);
    return {now, today}
};

module.exports = connect(mapStateToProps)(Now);
