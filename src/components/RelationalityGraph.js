import React from 'react';
import PropTypes from 'prop-types';

const RelationalityGraph = ({width, height, entropy, nodes, numNodes}) => <svg id="probabilities"
  width={width}
  height={height}
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink">
  {
    nodes.map(({color, entropyDeltas}, i) => {
      const entropyDeltaRange = numNodes * Math.log1p(1/numNodes) - Math.log1p(1)
      return <svg key={i}>
          <polyline
          key={`${i}`}
          style={{stroke:`hsl(${color}, 100%, 50%)`, strokeWidth:1, fill:'none'}}
          x={0}
          y={25 * i}
          points={entropyDeltas.map((d, j) => `${j * width / 200},${d/entropyDeltaRange* 80 + 10 + i * 25}`).join(' ')}
          />
          <line
            key={`base${i}`}
            style={{stroke:`lightgrey`, strokeWidth:1, fill:'none'}}
            x1={0}
            y1={25 * (i + .45)}
            x2={width - 5}
            y2={25 * (i + .45)} />
        </svg>

    })
  }
</svg>

const {func, shape, object, string, number, arrayOf} = PropTypes;

RelationalityGraph.propTypes = {
  width: number,
  height: number,
  nodes: arrayOf(object)
};

export default RelationalityGraph;
