import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtAvatar } from 'taro-ui'

import './index.less'

@inject('locationStore', 'productStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount () {
  }

  render () {
    const {list} = this.props.productStore
    console.log(list)
    return (
      <View>
          <ul>
            <li>
              <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
              <View className='right'>
                <View className='name'>梨子呦</View>
                <text>3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3哈3。</text>
                <View className='items' style='display:flex;flex-wrap:wrap;'>
                  <image mode="widthFix" src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                  <image mode='widthFix' src='https://jdc.jd.com/img/200'></image>
                </View>
              </View>
            </li>
          </ul>
      </View>
    )
  }
}

export default Index 
