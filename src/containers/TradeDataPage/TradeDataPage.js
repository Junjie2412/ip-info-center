import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './TradeDataPage.css';
import IPICDropdown from "../../components/IPICDropdown/IPICDropdown";
import connect from "react-redux/es/components/connect";
import IPICButton from "../../components/IPICButton/IPICButton";
import * as actions from "../../store/actions";
import UploadFilesButton from "../../components/UploadFilesButton/UploadFilesButton";
import IPICPieChart from "../../components/IPICCharts/IPICPieChart";
import IPICBarChart from "../../components/IPICCharts/IPICBarChart";
import IPICStackedBarChart from "../../components/IPICCharts/IPICStackedBarChart";
import IPICLineBarChart from "../../components/IPICCharts/IPICLineBarChart";
import IPICDoubleLineBarChart from "../../components/IPICCharts/IPICDoubleLineBarChart";

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
                <div className={"TradeDataPage"+(this.props.darkMode ? " DarkMode": "")}>
                    <div className={"TradeDataUploadMoreDataButton"}>
                        <UploadFilesButton label={"Upload More Data"}/>
                    </div>
                    <div className="TradeDataDropdownGroup">
                        <div>
                            <IPICDropdown
                                header={"IP Address"}
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
                        <div className="TradeDataButton">
                            <IPICButton label={"APPLY"} type={"blue"} onClick={this.handleApply}/>
                        </div>
                        <div className="TradeDataButton">
                            <IPICButton label={"RESET"} type={"white"} onClick={this.handleReset}/>
                        </div>
                    </div>
                    <div className={"TradeCharts"}>
                        <div className={"TradeChartGroup"}>
                            <div>
                                <IPICPieChart
                                    darkMode={this.props.darkMode}
                                    title={"Account Takeover Risk"}
                                    series={this.props.RepsAccessingCustomerAccountsPieChart.series}
                                    labels={this.props.RepsAccessingCustomerAccountsPieChart.labels}
                                />
                            </div>
                            <div>
                                <IPICBarChart
                                    darkMode={this.props.darkMode}
                                    xaxistitle={"Account Number"}
                                    yaxistitle={"Count of IP Address"}
                                    title={"Unique IP Addresses by Account Number"}
                                    series={this.props.CountOfIPAddressByAccountNumberBarChart.series}
                                    labels={this.props.CountOfIPAddressByAccountNumberBarChart.labels}
                                    topValues={this.props.topValues}
                                    filename={"Unique IP Addresses by Account Number"}
                                />
                            </div>
                        </div>
                        <div className={"TradeChartGroup"}>
                            <div>
                                <IPICBarChart
                                    darkMode={this.props.darkMode}
                                    xaxistitle={"IP Address"}
                                    yaxistitle={"Count of Account Number"}
                                    title={"Same IP Address for Multiple Accounts"}
                                    series={this.props.SameIpMultipleAccountsBarChart.series}
                                    labels={this.props.SameIpMultipleAccountsBarChart.labels}
                                    topValues={this.props.topValues}
                                    filename={"Same IP Address for Multiple Accounts"}
                                />
                            </div>
                            <div>
                                <IPICStackedBarChart
                                    darkMode={this.props.darkMode}
                                    title={"High Risk Activity by IP address"}
                                    xaxistitle={"IP Address"}
                                    yaxistitle={"Sum of Event Quantity"}
                                    series={this.props.HighRiskActivityStackedBarChart.series}
                                    labels={this.props.HighRiskActivityStackedBarChartLabels}
                                    filename={"High Risk Activity by IP address"}
                                />
                            </div>
                        </div>
                        <div className={"TradeChartGroup"}>
                            <div>
                                <IPICLineBarChart
                                    darkMode={this.props.darkMode}
                                    title={"Active Days by Account"}
                                    xaxistitle={"Account Number"}
                                    barTitle={"Count of Event Date"}
                                    lineTitle={"Count of IP Address"}
                                    labels={this.props.EventDateIPAddressByAccountNumberLineBarChart.labels}
                                    columnData={this.props.EventDateIPAddressByAccountNumberLineBarChart.columnData}
                                    lineData={this.props.EventDateIPAddressByAccountNumberLineBarChart.lineData}
                                    topValues={this.props.topValues}
                                    filename={"Active Days by Account"}
                                />
                            </div>
                            <div>
                                <IPICDoubleLineBarChart
                                    darkMode={this.props.darkMode}
                                    title={"Risk by Symbol"}
                                    xaxistitle={"Security Symbol"}
                                    columnTitle={"Count of Event Date"}
                                    areaTitle={"Count of IP Address"}
                                    lineTitle={"Count of Account Number"}
                                    labels={this.props.EventDateIpAddressAndAccountNumberBySecuritySymbolDoubleLineBarChart.labels}
                                    columnData={this.props.EventDateIpAddressAndAccountNumberBySecuritySymbolDoubleLineBarChart.columnData}
                                    lineData={this.props.EventDateIpAddressAndAccountNumberBySecuritySymbolDoubleLineBarChart.lineData}
                                    areaData={this.props.EventDateIpAddressAndAccountNumberBySecuritySymbolDoubleLineBarChart.areaData}
                                    topValues={this.props.topValues}
                                    filename={"Risk by Symbol"}
                                />
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
        ipaddresses: state.tradeDataReducer.ipaddresses,
        accountNamesAndNumbers: state.tradeDataReducer.accountNamesAndNumbers,
        startDate: state.tradeDataReducer.startDate,
        endDate: state.tradeDataReducer.endDate,
        accountNamesAndNumbersFilter: state.tradeDataReducer.accountNamesAndNumbersFilter,
        accountNamesAndNumbersFilterList: state.tradeDataReducer.accountNamesAndNumbersFilterList,
        ipAddressFilter: state.tradeDataReducer.ipAddressFilter,
        ipAddressFilterList: state.tradeDataReducer.ipAddressFilterList,
        topValues: state.tradeDataReducer.topValues,
        RepsAccessingCustomerAccountsPieChart: state.tradeDataReducer.RepsAccessingCustomerAccountsPieChart,
        CountOfIPAddressByAccountNumberBarChart: state.tradeDataReducer.CountOfIPAddressByAccountNumberBarChart,
        SameIpMultipleAccountsBarChart: state.tradeDataReducer.SameIpMultipleAccountsBarChart,
        HighRiskActivityStackedBarChart: state.tradeDataReducer.HighRiskActivityStackedBarChart,
        HighRiskActivityStackedBarChartLabels: state.tradeDataReducer.HighRiskActivityStackedBarChartLabels,
        EventDateIPAddressByAccountNumberLineBarChart: state.tradeDataReducer.EventDateIPAddressByAccountNumberLineBarChart,
        EventDateIpAddressAndAccountNumberBySecuritySymbolDoubleLineBarChart : state.tradeDataReducer.EventDateIpAddressAndAccountNumberBySecuritySymbolDoubleLineBarChart,
        darkMode: state.darkModeReducer.darkMode
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