import React, { Component } from 'react';

export default class AudioTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: new Audio(props.src),
            isPlaying: false
        };
    }

    componentDidMount() {
        this.state.audio.addEventListener('timeupdate', this.ontimeupdate);
    }

    ontimeupdate() {
        var el = this.state.audio;
        var number = el.currentTime / el.duration * 100;

        this.update(number);

        if (number === 100) {
            return this.setState({
                isPlaying: false
            });
        }
    }

    toggle(event) {
        event.preventDefault();
        var state = this.state.audio;
        var isPlaying = this.state.isPlaying;

        this.setState({
            isPlaying: !isPlaying
        });

        if (isPlaying) {
            return state.pause();
        }
        return state.play();
    }

    update(progress) {
        var context = this.refs.manager.getDOMNode().getContext('2d');

        var percent = Math.min(progress, 100);
        var ratio = window.devicePixelRatio || 1;

        var size = this.refs.manager.getDOMNode().width / ratio;
        var half = size / 2;
        var x = half;
        var y = half;
        var rad = half - 1;

        var angle = Math.PI * 2 * (percent / 100);
        context.clearRect(0, 0, size, size);

        context.strokeStyle = '#00bbff';
        context.beginPath();
        context.arc(x, y, rad, 0, angle, false);
        context.stroke();
    }

    render() {
        var className = this.state.isPlaying ? 'audio playing' : 'audio paused';

        return React.DOM.div({
            className: className
        }, [
            React.DOM.a({
                href: '#',
                onClick: this.toggle,
                className: 'audio-play'
            }),
            React.DOM.canvas({
                width: 57,
                height: 57,
                ref: 'manager',
                size: 53
            })
        ]);
    }
}