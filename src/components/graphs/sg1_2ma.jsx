import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './graphs.css';

class GraphSg12Ma extends React.Component {

  render () {
    return (
      <div>
        <Container
        className="graphs-container">
          <Col className="main-graph">
          <img
          alt="graph-one"
          className="graph-one"
          src="M2_SQS_SG1.jpeg">
          </img>
          </Col>
          <Col className="secondary-graph">
          <img alt="graph-two"
          className="graph-two"
          src="M2_div_colls_SG1.jpeg">
          </img>
          </Col>
        </Container>
      </div>
    )
  }
}

export default GraphSg12Ma;