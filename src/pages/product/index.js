import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import fetch from '../../kit/fetch'
import {multiUpload} from '../../kit/upload'

import {
  AtButton,
  AtInput,
  AtTextarea,
  AtImagePicker,
  AtForm,
  AtIcon
} from 'taro-ui'

import './index.less'

@inject('counterStore', 'locationStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '发布'
  }

  constructor() {
    super(...arguments)
    this.state = {
      title: '',
      desc: '',
      files:[]
    }
  }
  
  onChangeTitle = (title) => {
      this.setState({title})
  }

  onChange = (files) => {
    this.setState({files})
  }

  onImageClick = (index, file) => {
    wx.previewImage({
      current: file.url,
      urls: this.state.files.map(file => file.url)
    })
  }

  onPublish = async(e) => {
    const {title, desc, files} = this.state;
    const {province, city, area, longitude, latitude} = this.props.locationStore;

    const actFiles = await multiUpload(files.map(file => file.url))
    console.log(actFiles)
    fetch('product/saveOrUpdate', {
        title,
        desc,
        images: actFiles,
        location: `${longitude},${latitude}`,
        province,
        city,
        area
    }).then(() => {
        Taro.showToast({title:'发布成功'})
    })
  }

  render () {
    const {province, city, area} = this.props.locationStore;
    return (
      <View>
        <AtForm className='App' onSubmit={this.onPublish}>

          <AtInput type="text" name="title" onChange={this.onChangeTitle} value={this.state.title} placeholder="标题 品类品牌型号都是对方喜欢搜索的"   />

          <AtTextarea
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            maxLength={200}
            placeholder='描述宝贝的转手原因、入手渠道和使用感受'
          />
        
         <AtImagePicker
            length={3}
            multiple
            files={this.state.files}
            onChange={this.onChange.bind(this)}
            onFail={this.onFail.bind(this)}
            onImageClick={this.onImageClick.bind(this)}
          />
          <View className='addr at-icon at-icon-map-pin'>{` ${province} ${city} ${area}`}</View>
          <AtButton type='primary' formType="submit">发布</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default Index 
