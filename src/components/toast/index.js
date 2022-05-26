'use strict'
// import style from '../../css.css'
// import View from '../../container/view'
// const THEME = [style.toastDark, style.toastLight]
import style from './index.css'
class Toast extends React.Component {
    state = {
        toastText: '123',
        toastState: 0,
        toastTheme: 0,
        zIndex: 'auto'
    }
    constructor(props) {
        super(props)
    }
    //   _onTransitionEnd = this._onTransitionEnd.bind(this)
    //   showToast = this.showToast.bind(this)
    //   _isShow = false
    //   _timeFlag = null
    //   _toastTime = 2000
    showToast(obj) {
        if (!obj) { this.setState({ toastState: 0 }) }
        else {
            const toastText = obj.content
            const zIndex = obj.zIndex || 'auto'
            const toastTheme = obj.theme || 0
            const toastTime = obj.time || 2000
            this.setState({ toastState: 1, toastText, toastTheme, zIndex })
            this._toastTime = toastTime
            if (this._timeFlag) {
                clearTimeout(this._timeFlag)
                this.hideToast()
            }
        }
    }
    hideToast() {
        this._timeFlag = setTimeout(() => {
            this.showToast('')
            this._timeFlag = null
        }, this._toastTime)
    }
    // 动画结束之后指定事件隐藏toast
    _onTransitionEnd() {
        if (this._isShow) { this._isShow = false }
        else {
            this._isShow = true
            this.hideToast()
        }
    }
    _renderToast() {
        const { toastState, toastTheme, toastText, zIndex } = this.state
        const { className } = this.props
        return (
            <div className={`${style.toast} ${className}`}>{toastText}</div>
        )
    }
    render() {
        const { toastState, toastTheme, toastText, zIndex } = this.state
        const { toastBoxClassName } = this.props
        console.log(this.props)
        // const cn = toastState === 0 ? style.toastBox : `${style.toastBox} ${style.toastShow}`
        return (
            //   <View className={cn} transitionEnd={this._onTransitionEnd} style={{ zIndex: zIndex }}>
            //     <View className={THEME[toastTheme]} > {toastText} </View>
            //   </View>
            <div className={`${style.toastBox} ${toastBoxClassName}`}>
                {this._renderToast()}
            </div>
        )
    }
}

export default Toast