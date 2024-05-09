import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import "./index.css";
import OpenState from "../OpenState";
import DeleteDialogBox from "../DeleteDialogBox";

function ListView(props) {
  const { data } = props;
  const [detailData, setDetailData] = useState(data);
  const [openItemId, setOpenItemId] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isShow, setIsShowModel] = useState(false);

  const toggleOpenState = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
    const filteredData = detailData.filter((item) =>
      `${item.first} ${item.last}`
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    );
    setDetailData(filteredData);
  };

  const onDeleteTab = () => {
    setIsShowModel(true);
  };

  const onCancelButton = () => {
    setIsShowModel(false);
  };

  const onDeleteButton = (id) => {
    const filteredUsers = detailData.filter((user) => user.id !== id);
    setDetailData(filteredUsers);
    setIsShowModel(false);
  };

  return (
    <div className="main-container">
      <ul className="list-card">
        <input
          onChange={onChangeSearchInput}
          className="search-input"
          type="text"
          placeholder="Search user"
        />
        {detailData.map((each) => (
          <li className="list-item" key={each.id}>
            <div className="list-upper-section">
              <div className="img-name-card">
                <img
                  className="person-image"
                  alt={each.first}
                  src={each.picture}
                />
                <h1 className="name">
                  {each.first} {each.last}
                </h1>
              </div>
              <div className="drop-down-icon">
                <button
                  className="drop-button"
                  onClick={() => toggleOpenState(each.id)}
                >
                  {openItemId === each.id ? (
                    <RiArrowDropUpLine size={50} />
                  ) : (
                    <RiArrowDropDownLine size={50} className="icon" />
                  )}
                </button>
              </div>
            </div>
            <div className="drop-container">
              {openItemId === each.id && (
                <OpenState onDelete={onDeleteTab} openData={each} />
              )}
            </div>
            {isShow && openItemId === each.id && (
              <DeleteDialogBox
                onCancelButton={onCancelButton}
                onDeleteButton={() => onDeleteButton(each.id)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListView;
