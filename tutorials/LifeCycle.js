import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nesttt.',
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate called');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called ');
  }

  onPressTitle = () => {
    this.setState({titleText: "Bird's Nest [pressed]"});
  };

  render() {
    console.log('Render Called');
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}
          {'\n'}
          {'\n'}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
