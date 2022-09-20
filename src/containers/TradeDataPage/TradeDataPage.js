import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './TradeDataPage.css';
import IPICDropdown from "../../components/IPICDropdown/IPICDropdown";
import connect from "react-redux/es/components/connect";
import IPICButton from "../../components/IPICButton/IPICButton";
import * as actions from "../../store/actions";
import {format} from "date-fns";
import IPICDateRangeDropdown from "../../components/IPICDateRangeDropdown/IPICDateRangeDropdown";

class TradeDataPage extends Component {

    componentDidMount() {
        this.props.onSetCurrentTab("Trade Data");
    }

    updateDateSelection = (dateRanges) => {
        this.props.onSetStartDate(dateRanges.startDate);
        this.props.onSetEndDate(dateRanges.endDate);
    };

    toggleIPAddressesDropdown = () => {
        if(this.props.showIPAddressesDropdown===true) {
            this.props.onShowIPAddressesDropdown(false);
        }else{
            this.props.onShowIPAddressesDropdown(true);
        }
    };

    render () {
        return (
            <Aux>
                <div className="TradeDataPage">
                    <div className="TradeDataDropdownGroup">
                        <div>
                            <IPICDateRangeDropdown
                                header={"Period"}
                                placeholder={"Select Date Range"}
                                value={format(this.props.startDate, 'MM/dd/Y')+" - "+format(this.props.endDate, 'MM/dd/Y')}
                                updateDate={this.updateDateSelection}
                                startDate={this.props.startDate}
                                endDate={this.props.endDate}
                            />
                        </div>
                        <div>
                            <IPICDropdown
                                header={"IP Addresses"}
                                placeholder={"Search and Select"}
                                list={this.props.ipaddresses}
                                show={this.props.showIPAddressesDropdown}
                                onClickSearch={()=>this.toggleIPAddressesDropdown()}
                            />
                        </div>
                        <div>
                            <div className="GeolocationButton">
                                <IPICButton label={"APPLY"} type={"blue"}/>
                            </div>
                            <div className="GeolocationButton">
                                <IPICButton label={"RESET"} type={"white"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ipaddresses: state.geolocationReducer.ipaddresses,
        showIPAddressesDropdown: state.tradeDataReducer.showIPAddressesDropdown,
        startDate: state.geolocationReducer.startDate,
        endDate: state.geolocationReducer.endDate
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab)),
        onShowIPAddressesDropdown: (show) => dispatch(actions.showIPAddressesTradeDataDropdown(show)),
        onSetStartDate: (date) => dispatch(actions.setGeolocationStartDate(date)),
        onSetEndDate: (date) => dispatch(actions.setGeolocationEndDate(date))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (TradeDataPage);