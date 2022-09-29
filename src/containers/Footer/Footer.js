import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './Footer.css';
import connect from "react-redux/es/components/connect";
import * as actions from "../../store/actions";
import { MdEmail, MdFeedback } from 'react-icons/md';
import { RiFileListFill } from 'react-icons/ri';
import { FaSearchLocation } from 'react-icons/fa';

class Footer extends Component {

    render () {
        return (
            <Aux>
                <div className={"footer"+(this.props.darkMode ? " HeaderDarkMode" : "")}>
                    {/*<img src={footerpng} alt={"loading..."} className={"footerImage"}/>*/}
                    <div className={"LinkContainer"}>
                        <div>
                            <div className={"iconContainer"}>
                                <MdEmail size={30}/>
                            </div>
                            <p> Contact IPIC Team</p>
                        </div>
                        <div>
                            <div className={"iconContainer"}>
                                <MdFeedback size={30}/>
                            </div>
                            <p>Leave your Feedback</p>
                        </div>
                    </div>
                    <div className={"LinkContainerRight"}>
                        <div>
                            <div className={"iconContainer"}>
                                <RiFileListFill size={30}/>
                            </div>
                            <p>How IPIC Works</p>
                        </div>
                        <div>
                            <div className={"iconContainer"}>
                                <FaSearchLocation size={30}/>
                            </div>
                            <p>Glossary</p>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        darkMode: state.darkModeReducer.darkMode
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleDarkMode: () => dispatch(actions.toggleDarkMode())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Footer);