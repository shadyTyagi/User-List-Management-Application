import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { BsCheckCircle } from "react-icons/bs";
import "./index.css";

function OpenState(props) {
  const { openData, onDelete } = props;
  const {
    id,
    first,
    last,
    country: initialCountry,
    gender: initialGender,
    dob,
    description: initialDescription,
  } = openData;

  const calculateAge = new Date(dob);
  const presentDate = new Date();
  const initialAge = presentDate.getFullYear() - calculateAge.getFullYear();

  const [name, setName] = useState({ first, last });
  const [country, setCountry] = useState(initialCountry);
  const [description, setDescription] = useState(initialDescription);
  const [age, setAge] = useState(initialAge);
  const [gender, setGender] = useState(initialGender);
  const [isEditing, setIsEditing] = useState(false);

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const onSaveEdit = () => {
    setIsEditing(false);
  };

  const onCancelEdit = () => {
    setName({ first, last });
    setCountry(initialCountry);
    setDescription(initialDescription);
    setAge(initialAge);
    setGender(initialGender);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="age-gender-country-card">
        <div className="age">
          <h1 className="head">Age</h1>
          {isEditing ? (
            <input
              className="edit-input"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          ) : (
            <p className="para">{age}</p>
          )}
        </div>
        <div className="gender">
          <h1 className="head">Gender</h1>
          {isEditing ? (
            <select
              className="edit-input gender-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Rather not say">Rather not say</option>
            </select>
          ) : (
            <p className="para">{gender}</p>
          )}
        </div>
        <div className="country">
          <h1 className="head">Country</h1>
          {isEditing ? (
            <input
              className="edit-input"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          ) : (
            <p className="para">{country}</p>
          )}
        </div>
      </div>
      <div className="text-area-card">
        <h1 className="head">Description</h1>
        {isEditing ? (
          <textarea
            className="textarea"
            rows={10}
            cols={70}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="description-para">{description}</p>
        )}
      </div>
      <div className="button-card">
        {isEditing ? (
          <>
            <button onClick={onCancelEdit} className="button">
              <RxCrossCircled color="red" size={25} />
            </button>
            <button onClick={onSaveEdit} className="button">
              <BsCheckCircle color="green" size={25} />
            </button>
          </>
        ) : (
          <>
            <button onClick={onDelete} className="button">
              <RiDeleteBin6Line size={25} color="red" />
            </button>
            <button onClick={onClickEdit} className="button">
              <VscEdit size={25} color="aqua" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default OpenState;
