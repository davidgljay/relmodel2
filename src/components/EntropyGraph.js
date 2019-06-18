import React from 'react';
import PropTypes from 'prop-types';

const EntropyGraph = ({width, height, nodes}) => <svg id="probabilities"
  width={width}
  height={height}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink">
  {
    nodes.map(({color, targets}, i) => {
      const l = targets.length
      const entropy = targets.reduce((sum, t) => sum + Math.log1p(t), 0)
      const maxEntropy = l * Math.log1p(1/l)
      const minEntropy = Math.log1p(1)
      return <rect
          key={`${i}`}
          style={{fill:`hsl(${color}, 100%, 50%)`}}
          x={0}
          y={25 * i}
          width={(1 - (entropy - minEntropy) / (maxEntropy - minEntropy)) * width }
          height={20}
          />
    })
  }
</svg>

const {func, shape, object, string, number, arrayOf} = PropTypes;

EntropyGraph.propTypes = {
  width: number,
  height: number,
  nodes: arrayOf(number)
};

export default EntropyGraph;
