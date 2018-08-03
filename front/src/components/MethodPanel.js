import React from "react"
import PanelBody from "../containers/PanelBody"
import Methods from "../containers/Methods"
import {Panel, Row} from "react-bootstrap"
import {FormattedMessage} from "react-intl"

/**
 * 入力部のパネル
 * @returns {element} 入力部のパネル
 */
const MethodPanel = () => (
    <Row>
        <Panel>
            <Panel.Heading>
                <FormattedMessage id="title.method"/>
            </Panel.Heading>
            <PanelBody
                messageId="description.method"
            >
                <Methods/>
            </PanelBody>
        </Panel>
    </Row>
)

export default MethodPanel
