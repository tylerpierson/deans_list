import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import styles from './AdminReadingTracker.module.scss'

function AdminReadingTracker() {
  const gradeOptions = [
    { value: 'KG', label: 'KG' },
    { value: '1st', label: '1st' },
    { value: '2nd', label: '2nd' },
    { value: '3rd', label: '3rd' },
    { value: '4th', label: '4th' },
    { value: '5th', label: '5th' },
    { value: '6th', label: '6th' },
    { value: '7th', label: '7th' },
    { value: '8th', label: '8th' },
    { value: '9th', label: '9th' },
    { value: '10th', label: '10th' },
    { value: '11th', label: '11th' },
    { value: '12th', label: '12th' },
  ]

  const scaleOptions = [
    { value: 'AR', label: 'AR' },
    { value: 'Fountas & Pinnell', label: 'Fountas & Pinnell' },
    { value: 'Lexile', label: 'Lexile' },
    { value: 'DRA', label: 'DRA' },
    { value: 'Reading Recovery', label: 'Reading Recovery' },
    { value: 'Rigby', label: 'Rigby' },
    { value: 'Basal', label: 'Basal' },
  ];

  const [scoreOptions, setScoreOptions] = useState([]);

  const generateScoreOptions = (value) => {
    let options = [];
    switch (value) {
      case 'AR':
        options = [
          { value: 'K', label: 'K' },
          { value: 'K.5', label: 'K.5' },
          { value: '1.0', label: '1.0' },
          { value: '1.1', label: '1.1' },
          { value: '1.2', label: '1.2' },
          { value: '1.4', label: '1.4' },
          { value: '1.5', label: '1.5' },
          { value: '1.7', label: '1.7' },
          { value: '1.8', label: '1.8' },
          { value: '2.0', label: '2.0' },
          { value: '2.3', label: '2.3' },
          { value: '2.6', label: '2.6' },
          { value: '2.9', label: '2.9' },
          { value: '3.0', label: '3.0' },
          { value: '3.3', label: '3.3' },
          { value: '3.6', label: '3.6' },
          { value: '4.0', label: '4.0' },
          { value: '4.3', label: '4.3' },
          { value: '4.6', label: '4.6' },
          { value: '4.8', label: '4.8' },
          { value: '5.0', label: '5.0' },
          { value: '5.3', label: '5.3' },
          { value: '5.6', label: '5.6' },
          { value: '6.0', label: '6.0' },
          { value: '6.5', label: '6.5' },
          { value: '7.0', label: '7.0' },
          { value: '7.3', label: '7.3' },
          { value: '7.6', label: '7.6' },
          { value: '8+', label: '8+' },
        ];
        break;
      case 'Fountas & Pinnell':
        options = [
          { value: 'A', label: 'A' },
          { value: 'B', label: 'B' },
          { value: 'C', label: 'C' },
          { value: 'D', label: 'D' },
          { value: 'E', label: 'E' },
          { value: 'F', label: 'F' },
          { value: 'G', label: 'G' },
          { value: 'H', label: 'H' },
          { value: 'I', label: 'I' },
          { value: 'J', label: 'J' },
          { value: 'K', label: 'K' },
          { value: 'L', label: 'L' },
          { value: 'M', label: 'M' },
          { value: 'N', label: 'N' },
          { value: 'O', label: 'O' },
          { value: 'P', label: 'P' },
          { value: 'Q', label: 'Q' },
          { value: 'R', label: 'R' },
          { value: 'S', label: 'S' },
          { value: 'T', label: 'T' },
          { value: 'U', label: 'U' },
          { value: 'V', label: 'V' },
          { value: 'W', label: 'W' },
          { value: 'X', label: 'X' },
          { value: 'Y', label: 'Y' },
          { value: 'Z', label: 'Z' },
          { value: 'Z+', label: 'Z+' },
        ];
        break;
      case 'Lexile':
        options = [
          { value: '<100', label: '<100' },
          { value: '100-199', label: '100-199' },
          { value: '200-299', label: '200-299' },
          { value: '300', label: '300' },
          { value: '400', label: '400' },
          { value: '500', label: '500' },
          { value: '600', label: '600' },
          { value: '700', label: '700' },
          { value: '800', label: '800' },
          { value: '900', label: '900' },
          { value: '1000', label: '1000' },
          { value: '1100', label: '1100' },
          { value: '1200', label: '1200' },
          { value: '1200+', label: '1200+' },
        ];
        break;
      case 'DRA':
        options = [
          { value: 'A.1', label: 'A.1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '6-8', label: '6-8' },
          { value: '10', label: '10' },
          { value: '12', label: '12' },
          { value: '14', label: '14' },
          { value: '16', label: '16' },
          { value: '18', label: '18' },
          { value: '20', label: '20' },
          { value: '24', label: '24' },
          { value: '28', label: '28' },
          { value: '30', label: '30' },
          { value: '34', label: '34' },
          { value: '38', label: '38' },
          { value: '38-40', label: '38-40' },
          { value: '40', label: '40' },
          { value: '40-44', label: '40-44' },
          { value: '44', label: '44' },
          { value: '44-60', label: '44-60' },
          { value: '50', label: '50' },
          { value: '50-60', label: '50-60' },
          { value: '60', label: '60' },
          { value: '60-70', label: '60-70' },
          { value: '70', label: '70' },
          { value: '70-80', label: '70-80' },
          { value: '70-120', label: '70-120' },
          { value: '80', label: '80' },
          { value: '80+', label: '80+' },
        ];
        break;
      case 'Reading Recovery':
        options = [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
          { value: '9', label: '9' },
          { value: '10', label: '10' },
          { value: '11', label: '11' },
          { value: '12', label: '12' },
          { value: '13', label: '13' },
          { value: '14', label: '14' },
          { value: '15', label: '15' },
          { value: '16', label: '16' },
          { value: '17', label: '17' },
          { value: '18', label: '18' },
          { value: '19', label: '19' },
          { value: '20', label: '20' },
        ];
        break;
      case 'Rigby':
        options = [
          { value: '1-2', label: '1-2' },
          { value: '3-4', label: '3-4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
          { value: '9', label: '9' },
          { value: '10', label: '10' },
          { value: '11', label: '11' },
          { value: '12', label: '12' },
          { value: '13', label: '13' },
          { value: '14-15', label: '14-15' },
          { value: '16-17', label: '16-17' },
          { value: '18', label: '18' },
          { value: '19', label: '19' },
          { value: '20+', label: '20+' },
        ];
        break;
      case 'Basal':
        options = [
          { value: 'Readiness', label: 'Readiness' },
          { value: 'Preprim. 1', label: 'Preprim. 1' },
          { value: 'Preprim. 2', label: 'Preprim. 2' },
          { value: 'Preprim. 3', label: 'Preprim. 3' },
          { value: 'Primer', label: 'Primer' },
          { value: 'Primer+', label: 'Primer+' },
          { value: 'Grade 1', label: 'Grade 1' },
          { value: 'Grade 1 (late)', label: 'Grade 1 (late)' },
          { value: 'Grade 2', label: 'Grade 2' },
          { value: 'Grade 3', label: 'Grade 3' },
          { value: 'Grade 4', label: 'Grade 4' },
          { value: 'Grade 5', label: 'Grade 5' },
          { value: 'Grade 6', label: 'Grade 6' },
        ];
        break;
      default:
        options = [];
        break;
    }
    setScoreOptions(options);
  };

  const optionStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'black', // Change the text color here
      maxHeight: '15rem',
      overflow: 'scroll',
    }),
    control: (provided, state) => ({
      ...provided,
      border: '2px solid var(--text-light)', // Remove the border
      outline: 'none', // Remove the outline
    }),
  };

  return (
    <div className={styles.ReadingTracker}>
      <div className={styles.headerContainer}>
        <h3 className={styles.header}>Reading Levels</h3>
        <div className={styles.selectorContainer}>
          <Select
            className={styles.selector}
            options={gradeOptions}
            styles={optionStyles}
            placeholder="Grade"
          />
          <Select
            className={styles.selector}
            options={scaleOptions}
            styles={optionStyles}
            placeholder="Type"
            onChange={(selectedOption) => generateScoreOptions(selectedOption.value)}
          />
        </div>
      </div>
      <div className={styles.scoringContainer}>
        <div className={styles.goalContainer}>
          <h3 className={styles.goalLabel}>Goal:</h3>
          <Select className={styles.selector} options={scoreOptions} styles={optionStyles} placeholder="Scale" />
        </div>
        <div className={styles.targetContainer}>
          <h3>Target %: </h3>
          <div className={styles.targetInnerContainer}>
            <h3>
              <span>80</span>%
            </h3>
            <h3>|</h3>
            <h3>
              <span>5</span> Students
            </h3>
          </div>
        </div>
        <h3>
          On Level: <span className={styles.onLevelSpan}>75%</span>
        </h3>
        <h3>
          Next Check-In: <span className={styles.checkInSpan}>April 30, 2024</span>
        </h3>
      </div>
      <div className={styles.teacherSelector}>
        <p>All</p>
        <p>Teacher 1</p>
        <p>Teacher 2</p>
        <p>Teacher 3</p>
        <p>Teacher 4</p>
      </div>
    </div>
  );
}


export default AdminReadingTracker