import * as React from "react";
import { render } from "react-dom";
import ReactTooltip from "react-tooltip";
import _ from "lodash";
import cx from "classnames";

import { Matrix, SuiteResult } from "./types";

import data from "./matrix";

import "./styles.css";

function Cell(props: {
  scoreInPercent?: number;
  scoreInAbsolute?: number;
  children?: any;
  className?: string;
}) {
  const { scoreInPercent, scoreInAbsolute } = props;
  let cls = "none";
  if (scoreInPercent) {
    let colorCode = Math.floor(scoreInPercent / 0.25) * 25;
    colorCode = Math.max(0, colorCode);
    colorCode = Math.min(75, colorCode);
    cls = colorCode.toString();
  } else if (scoreInAbsolute) {
    cls =
      scoreInAbsolute <= 0
        ? "75"
        : scoreInAbsolute <= 2
        ? "50"
        : scoreInAbsolute <= 4
        ? "25"
        : "0";
  }

  return (
    <td className={props.className}>
      <span className={`color-${cls}`}>{props.children}</span>
    </td>
  );
}

function renderMatrix(matrix: Matrix, name: string, minF1: number) {
  const all = matrix.all;
  matrix = { ...matrix };
  delete matrix.all;

  // navigate all classes and give them an idx
  let cur = 0;
  const idxByName = _.mapValues(matrix, (v, key) =>
    key === "none" ? -1 : cur++
  );
  const size = Object.keys(idxByName).length;

  const rows = _.map(matrix, (v: SuiteResult, key) => {
    if (key === "none") {
      return null;
    }

    const cols = new Array(size).fill(<Cell>0</Cell>, 0, idxByName[key]);

    cols[idxByName[key] + 1] = <td className="name">{key}</td>;

    const noneConfusions = v.confusions!.none || 0;

    const body = (
      <React.Fragment>
        <a data-tip data-for={"cls-" + key}>
          {v.f1.toFixed(1)}
        </a>
        <ReactTooltip id={"cls-" + key} effect="solid">
          <h3>{key}</h3>
          <ul>
            <li>
              <strong>F1: </strong>
              {v.f1.toFixed(2)}
            </li>
            <li>
              <strong>Precision: </strong>
              {v.precision.toFixed(2)}
            </li>
            <li>
              <strong>Recall: </strong>
              {v.recall.toFixed(2)}
            </li>
          </ul>
          <ul>
            <li>
              <strong>False Positives: </strong>
              {v.fp}
            </li>
            <li>
              <strong>False Negatives: </strong>
              {v.fn - noneConfusions}
            </li>
            {noneConfusions ? (
              <li>
                <strong>Not found (none):</strong> {noneConfusions}
              </li>
            ) : null}
          </ul>
        </ReactTooltip>
      </React.Fragment>
    );

    cols[idxByName[key]] = (
      <Cell className="identity" scoreInPercent={v.f1}>
        {body}
      </Cell>
    );

    for (let cls of Object.keys(v.confusions!).filter(x => x !== "none")) {
      if (idxByName[cls] > idxByName[key]) {
        continue;
      }

      const tipKey = `cls-${key}--vs--${cls}`;
      let nConfusions =
        v.confusions![cls] + ((matrix[cls].confusions || {})[key] || 0);

      const body = (
        <React.Fragment>
          <a data-tip data-for={tipKey}>
            {nConfusions}
          </a>
          <ReactTooltip id={tipKey} effect="solid">
            <h3>{key}</h3>
            <p>
              The model got confused <strong>{nConfusions}</strong> times with
              the <strong>{cls}</strong> intent.
            </p>
          </ReactTooltip>
        </React.Fragment>
      );

      cols[idxByName[cls]] = <Cell scoreInAbsolute={nConfusions}>{body}</Cell>;
    }

    return <tr>{cols}</tr>;
  });

  return (
    <div>
      <h2>
        {name} (F1 = {all.f1.toFixed(2)})
      </h2>
      <div>
        <table className="matrix">{rows}</table>
      </div>
    </div>
  );
}

function App(minF1: number = 0) {
  return (
    <div className="App">
      <h1>Confusion Matrix</h1>
      {_.map(data, (matrix, index) => renderMatrix(matrix, index, minF1))}
    </div>
  );
}

class Application extends React.Component {
  state = { minF1: 0 };

  render() {
    return null;
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
