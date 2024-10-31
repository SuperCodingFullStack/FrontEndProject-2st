import React, { useState } from "react";

const CheckBoxGroup = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [groupAChecked, setGroupAChecked] = useState(false);
  const [groupBChecked, setGroupBChecked] = useState(false);
  const [groupCChecked, setGroupCChecked] = useState(false);

  const [subGroupA, setSubGroupA] = useState([false, false, false]); // A-1, A-2, A-3
  const [subGroupB, setSubGroupB] = useState([false, false, false]); // B-1, B-2, B-3
  const [subGroupC, setSubGroupC] = useState([false, false, false]); // C-1, C-2, C-3

  const handleAllChange = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setGroupAChecked(isChecked);
    setGroupBChecked(isChecked);
    setGroupCChecked(isChecked);
    setSubGroupA([isChecked, isChecked, isChecked]);
    setSubGroupB([isChecked, isChecked, isChecked]);
    setSubGroupC([isChecked, isChecked, isChecked]);
  };

  const handleGroupChange = (groupIndex) => (event) => {
    const isChecked = event.target.checked;

    if (groupIndex === "A") {
      setGroupAChecked(isChecked);
      setSubGroupA([isChecked, isChecked, isChecked]);
    } else if (groupIndex === "B") {
      setGroupBChecked(isChecked);
      setSubGroupB([isChecked, isChecked, isChecked]);
    } else if (groupIndex === "C") {
      setGroupCChecked(isChecked);
      setSubGroupC([isChecked, isChecked, isChecked]);
    }

    // 전체 체크박스 상태 업데이트
    setAllChecked(subGroupA.concat(subGroupB, subGroupC).every(Boolean));
  };

  const handleSubGroupChange = (groupIndex, subIndex) => (event) => {
    const isChecked = event.target.checked;
    let updatedSubGroup;

    if (groupIndex === "A") {
      updatedSubGroup = [...subGroupA];
      updatedSubGroup[subIndex] = isChecked;
      setSubGroupA(updatedSubGroup);
      setGroupAChecked(updatedSubGroup.every(Boolean));
    } else if (groupIndex === "B") {
      updatedSubGroup = [...subGroupB];
      updatedSubGroup[subIndex] = isChecked;
      setSubGroupB(updatedSubGroup);
      setGroupBChecked(updatedSubGroup.every(Boolean));
    } else if (groupIndex === "C") {
      updatedSubGroup = [...subGroupC];
      updatedSubGroup[subIndex] = isChecked;
      setSubGroupC(updatedSubGroup);
      setGroupCChecked(updatedSubGroup.every(Boolean));
    }

    // 전체 체크박스 상태 업데이트
    const allSubGroups = [...subGroupA, ...subGroupB, ...subGroupC];
    setAllChecked(allSubGroups.every(Boolean));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleAllChange}
        />
        All
      </label>
      <div>
        <label>
          <input
            type="checkbox"
            checked={groupAChecked}
            onChange={handleGroupChange("A")}
          />
          A
        </label>
        <div style={{ paddingLeft: "20px" }}>
          {subGroupA.map((checked, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleSubGroupChange("A", index)}
              />
              A-{index + 1}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={groupBChecked}
            onChange={handleGroupChange("B")}
          />
          B
        </label>
        <div style={{ paddingLeft: "20px" }}>
          {subGroupB.map((checked, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleSubGroupChange("B", index)}
              />
              B-{index + 1}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={groupCChecked}
            onChange={handleGroupChange("C")}
          />
          C
        </label>
        <div style={{ paddingLeft: "20px" }}>
          {subGroupC.map((checked, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleSubGroupChange("C", index)}
              />
              C-{index + 1}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckBoxGroup;
