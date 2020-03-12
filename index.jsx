'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import backgroudImage from './images/img_24296_0_0.png'
import personImage from './images/img_24296_0_1.png'
import likeImage from './images/img_24296_0_2.png'

class HmFollowCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      backgroudImage,
      followText: '+ 关注',
      name: '关注的人',
      personImage,
      fanNumbers: '784',
      fanNumbersCompany: '个',
      likeImage,
      likeNumbers: '189',
      likeNumbersCompany: '个'
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmFollowCard}>
        <View style={styles.container}>
          {true && <Image style={styles.backgroudImage} src={this.state.backgroudImage} />}
          {true && (
            <View style={styles.cardHeader}>
              {true && (
                <View style={styles.followButton}>
                  <Text style={styles.followText}>{this.state.followText}</Text>
                </View>
              )}
            </View>
          )}
          <View style={styles.cardBottom}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Image style={styles.personImage} src={this.state.personImage} />
            <Text style={styles.fanNumbers}>{this.state.fanNumbers}</Text>
            <Text style={styles.fanNumbersCompany}>{this.state.fanNumbersCompany}</Text>
            <Image style={styles.likeImage} src={this.state.likeImage} />
            <Text style={styles.likeNumbers}>{this.state.likeNumbers}</Text>
            {true && <Text style={styles.likeNumbersCompany}>{this.state.likeNumbersCompany}</Text>}
          </View>
        </View>
      </View>
    );
  }
}
export default HmFollowCard;
