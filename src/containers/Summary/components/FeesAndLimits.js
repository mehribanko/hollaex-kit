import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LimitsBlock from './LimitsBlock';
import FeesBlock from './FeesBlock';
import { IconTitle, Button } from '../../../components';
import { requestLimits, requestFees } from '../../../actions/userAction';
import { SUMMMARY_ICON, FEES_LIMIT_SITE_URL } from '../../../config/constants';
import STRINGS from '../../../config/localizedStrings';

class FeesAndLimits extends Component {
    componentDidMount() {
        const { limits, requestLimits, fees, requestFees } = this.props;
        if (!limits.fetched && !limits.fetching) {
            requestLimits();
        }

        if (!fees.fetched && !fees.fetching) {
            requestFees();
        }
    }

    render () {
        const { tradingAccount, verification_level, pairs } = this.props.data;
        const { fees, limits, onClose } = this.props;
        const icon = this.props.activeTheme === 'dark' && SUMMMARY_ICON[`${tradingAccount.symbol.toUpperCase()}_DARK`]
            ? SUMMMARY_ICON[`${tradingAccount.symbol.toUpperCase()}_DARK`]
            : SUMMMARY_ICON[tradingAccount.symbol.toUpperCase()];
        return (
            <div className="fee-limits-wrapper">
                <IconTitle
                    text={`${STRINGS.SUMMARY.FEES_AND_LIMIT} ${tradingAccount.fullName}`}
                    iconPath={icon}
                    textType="title"
                    underline={true}
                />
                <div className="content-txt">
                    <div className="my-3">
                        <div>{STRINGS.SUMMARY.FEES_AND_LIMIT_TXT_1}</div>
                        <div className="mt-3">
                            {STRINGS.formatString(
                                STRINGS.SUMMARY.FEES_AND_LIMIT_TXT_2,
                                <Link href={FEES_LIMIT_SITE_URL} target="blank" className="fee-limits-link" >
                                    {`${STRINGS.APP_TITLE} ${STRINGS.SUMMARY.WEBSITE}`}
                                </Link>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="content-title">{STRINGS.SUMMARY.DEPOSIT_WITHDRAWAL_ALLOWENCE}</div>
                        <LimitsBlock
                            limits={limits.data}
                            level={verification_level} />
                    </div>
                    <div>
                        <div className="content-title">{STRINGS.SUMMARY.TRADING_FEE_STRUCTURE}</div>
                        <FeesBlock
                            fees={fees.data}
                            level={verification_level}
                            pairs={pairs} />
                    </div>
                </div>
                <Button className="mt-4" label={STRINGS.BACK_TEXT} onClick={onClose} />
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    activeTheme: state.app.theme,
    fees: state.user.feeValues,
    limits: state.user.limits
});

const mapDispatchToProps = (dispatch) => ({
    requestLimits: bindActionCreators(requestLimits, dispatch),
    requestFees: bindActionCreators(requestFees, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FeesAndLimits);