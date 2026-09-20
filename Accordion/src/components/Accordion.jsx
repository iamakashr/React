import { useState } from "react";
import "../components/Accordion.css";
import data from "./data.js";

const Accordion = () => {
  const [selected, setselected] = useState(null);
  const [enableMultiSection, setEnableMultiSection] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handelSingleSeclection(getCurrentId) {
    setselected(getCurrentId === selected ? null : getCurrentId);
  }

  function handelmultiSelection(getCurrentId) {
    let cpymultiSelect = [...multiSelect];
    const findIndexOfCurrentId = cpymultiSelect.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpymultiSelect.push(getCurrentId);
    else cpymultiSelect.splice(findIndexOfCurrentId, 1);

    setMultiSelect(cpymultiSelect);
    // console.log(selected, multiSelect);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSection(!enableMultiSection)}>
        Enable multi selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSection
                    ? () => handelmultiSelection(dataItem.id)
                    : () => handelSingleSeclection(dataItem.id)
                }
                className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSection
                ? multiSelect.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
