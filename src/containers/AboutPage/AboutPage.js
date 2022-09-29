import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './AboutPage.css';
import connect from "react-redux/es/components/connect";
import IPICABoutImage from "../../assets/IPICABoutImage.png";
import * as actions from "../../store/actions";

class AboutPage extends Component {

    componentDidMount() {
        this.props.onSetCurrentTab("About");
    }

    render () {

        return (
            <Aux>
                <div className={"AboutPage"+(this.props.darkMode ? " DarkMode": "")}>
                    <div className={"AboutParagraphs"}>
                        <p>
                            IPIC is a tool that can bulk upload IP addresses and related datasets and apply machine learning techniques to quickly identify patterns of potentially suspicious activity and high-risk accounts
                        </p>
                        <ul>
                            <li>
                                An effective and efficient way to quickly identify risks and patterns of activity
                            </li>
                            <li>
                                Identify more connections than previously known
                            </li>
                            <li>
                                Intelligently using data to meet FINRA’s mission of protecting investors and safeguarding market integrity
                            </li>
                        </ul>
                        <p>
                            Member firms provide data in a standardized format, which staff will upload into IPIC.
                            IPIC will assist with bulk ingestion of IP address data so we can see the big picture
                        </p>
                        <ul>
                            <li>
                                Geomap View
                            </li>
                            <li>
                                Trade View
                            </li>
                        </ul>
                    </div>
                    <img alt={"...Loading"} src={IPICABoutImage} width={500}/>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkModeReducer.darkMode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrentTab: (tab) => dispatch(actions.setCurrentTab(tab))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (AboutPage);