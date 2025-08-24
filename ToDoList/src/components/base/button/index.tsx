import { Component } from 'react';
import './index.css';

type BaseButtonPropTypes = {
    htmlType?: 'button' | 'reset' | 'submit';
    id?: string;
    className?: string;
    type?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'large' | 'medium' | 'small';
};
export default class BaseButton extends Component<BaseButtonPropTypes> {
    render() {
        return (
            <button
                type={this.props.htmlType}
                className={`base-button ${
                    this.props.size === 'large'
                        ? 'button-large'
                        : this.props.size === 'medium'
                        ? 'button-medium'
                        : this.props.size === 'small'
                        ? 'button-small'
                        : 'button-medium'
                }`}
            >
                BaseButton
            </button>
        );
    }
}
