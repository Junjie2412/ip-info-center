import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './TradeDataPage.css';
import IPICDropdown from "../../components/IPICDropdown/IPICDropdown";
import connect from "react-redux/es/components/connect";
import IPICButton from "../../components/IPICButton/IPICButton";
import * as actions from "../../store/actions";
import {format} from "date-fns";
import IPICDateRangeDropdown from "../../components/IPICDateRangeDropdown/IPICDateRangeDropdown";
import UploadFilesButton from "../../components/UploadFilesButton/UploadFilesButton";

class TradeDataPage extends Component {

    componentDidMount() {
        this.props.onSetCurrentTab("Trade Data");
        this.props.onShowTradeDataTab(true);
    }

    updateDateSelection = (dateRanges) => {
        this.props.onSetStartDate(dateRanges.startDate);
        this.props.onSetEndDate(dateRanges.endDate);
    };

    handleAccountNamesAndNumbersCheck = (event, item) => {
        if (event.target.checked) {
            this.props.onAddToAccountNamesAndNumbersFilterList(item);
        } else {
            this.props.onRemoveFromAccountNamesAndNumbersFilterList(item);
        }
        this.forceUpdate();
    };

    handleIPAddressCheck = (event, item) => {
        if (event.target.checked) {
            this.props.onAddToIPAddressFilterList(item);
        } else {
            this.props.onRemoveFromIPAddressFilterList(item);
        }
        this.forceUpdate();
    };

    handleApply = () => {
        this.props.onApplyFilters();
    };

    handleReset = () => {
        this.props.onResetPage()
    };

    render () {

        return (
            <Aux>
                <div className="TradeDataPage">
                    <div className={"TradeDataUploadMoreDataButton"}>
                        <UploadFilesButton label={"Upload More Data"}/>
                    </div>
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
                                filter={this.props.ipAddressFilter}
                                setFilter={(event)=>this.props.onSetIPAddressFilter(event.target.value)}
                                filterList={this.props.accountNamesAndNumbersFilterList}
                                handleCheck={this.handleAccountNamesAndNumbersCheck}
                            />
                        </div>
                        <div>
                            <IPICDropdown
                                header={"Account Name and Number"}
                                placeholder={"Search and Select"}
                                list={this.props.accountNamesAndNumbers}
                                filter={this.props.accountNamesAndNumbersFilter}
                                setFilter={(event)=>this.props.onSetAccountNamesAndNumbersFilter(event.target.value)}
                                filterList={this.props.ipAddressFilterList}
                                handleCheck={this.handleIPAddressCheck}
                            />
                        </div>
                    </div>
                    <div className={"TradeDataButtonGroup"}>
                        <div className="TradeDataButton">
                            <IPICButton label={"APPLY"} type={"blue"} onClick={this.handleApply}/>
                        </div>
                        <div className="TradeDataButton">
                            <IPICButton label={"RESET"} type={"white"} onClick={this.handleReset}/>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ipaddresses: state.tradeDataReducer.ipaddresses,
        accountNamesAndNumbers: state.tradeDataReducer.accountNamesAndNumbers,
        startDate: state.tradeDataReducer.startDate,
        endDate: state.tradeDataReducer.endDate,
        accountNamesAndNumbersFilter: state.tradeDataReducer.accountNamesAndNumbersFilter,
        accountNamesAndNumbersFilterList: state.tradeDataReducer.accountNamesAndNumbersFilterList,
        ipAddressFilter: state.tradeDataReducer.ipAddressFilter,
        ipAddressFilterList: state.tradeDataReducer.ipAddressFilterList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab)),
        onSetStartDate: (date) => dispatch(actions.setTradeDataStartDate(date)),
        onSetEndDate: (date) => dispatch(actions.setTradeDataEndDate(date)),
        onShowTradeDataTab: (show) => dispatch(actions.showTradeDataTab(show)),
        onSetAccountNamesAndNumbersFilter: (filter) => dispatch(actions.setAccountNamesAndNumbersTradeDataFilter(filter)),
        onAddToAccountNamesAndNumbersFilterList: (item) => dispatch(actions.addToAccountNamesAndNumbersFilterTradeDataList(item)),
        onRemoveFromAccountNamesAndNumbersFilterList: (item) => dispatch(actions.removeFromAccountNamesAndNumbersFilterTradeDataList(item)),
        onSetIPAddressFilter: (filter) => dispatch(actions.setIPAddressTradeDataFilter(filter)),
        onAddToIPAddressFilterList: (item) => dispatch(actions.addToIPAddressFilterTradeDataList(item)),
        onRemoveFromIPAddressFilterList: (item) => dispatch(actions.removeFromIPAddressFilterTradeDataList(item)),
        onResetPage: () => dispatch(actions.resetTradeDataPage()),
        onApplyFilters: () => dispatch(actions.applyTradeDataFilters())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (TradeDataPage);