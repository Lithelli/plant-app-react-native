import React from 'react';
import {View, Image} from 'react-native'
import PropTypes from 'prop-types'


class AsyncImage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        loaded: false
    }
  }

  onLoad = () => {
      this.setState({loaded: true});
  }
  render(){
    const {placeholderColor, style, source} = this.props;
    return (
        <View style = {style}>
            <Image
                source = {source}
                style = {[style]}
                onLoad = {this.onLoad}
            />
            {!this.state.loaded &&
            <View
                style={[
                style,
                {
                    backgroundColor: placeholderColor || '#90a4ae',
                    position: 'absolute'
                }
                ]} />
            }
        </View>
    );
  }
}

AsyncImage.propTypes ={
}

AsyncImage.defaultProps ={
}

export default AsyncImage;
