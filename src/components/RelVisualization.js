import React from 'react';
import PropTypes from 'prop-types';

const RelVisualization = ({width, height, bits, relModel, getPosition}) => <svg id="visualization"
  width={width}
  height={height}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink">
  {
    bits.map((bit, i) => {
      const source = getPosition(bit.source)
      const target = getPosition(bit.target)
      const bitPlacement = {
        x: source.x + (target.x - source.x) * bit.complete/100,
        y: source.y + (target.y - source.y) * bit.complete/100
      }
      return <circle key={'bit' + i} style={{fill:`hsl(${bit.color}, 100%, 50%)`}} cx={bitPlacement.x} cy={bitPlacement.y} r="2"/>
    })
  }
  {
    relModel.nodes.map(({color, max}, i) => {
      const {x,y} = getPosition(i)
      return <circle key={i} style={{fill:`hsl(${color}, 100%, 50%)`, zIndex: 10}} cx={x} cy={y} r="10"/>
    })
  }
</svg>

const {func, shape, object, string, number, arrayOf} = PropTypes;

RelVisualization.propTypes = {
  width: number,
  height: number,
  bits: arrayOf(object),
  relModel: object,
  getPosition: func
};

export default RelVisualization;
