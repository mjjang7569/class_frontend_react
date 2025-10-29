'use client';
import { Component } from 'react';

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  // 해결방법1) 화살표함수
  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        {/* 해결방법2 ) 연결시켜주기 */}
        <button onClick={this.onClickCountUp.bind(this)}>카운트올리기</button>
      </>
    );
  }
}
