// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    }, () => console.log(this.state.settings.bitrate))
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p',
        },
      }
    }, () => console.log(this.state.settings.video.resolution))
  }


  render() {
    return (
      <div>
        <p><button className="bitrate" onClick={this.handleBitRate}>bitRate</button></p>
        <p><button className="resolution" onClick={this.handleResolution}>rez</button></p>
      </div>
    )
  }

}
