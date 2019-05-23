import React, { useState } from 'react';

export default function Forms() {
    const [personName, handleNameChange] = useState('');
    const [personAge, handleAgeChange] = useState(0);
    const [personList, updatePersonList] = useState([]);

    const handleChange = (e) => {
        if (e.target.name === 'personName') {
            handleNameChange(e.target.value);
        } else {
            handleAgeChange(e.target.value);
        }
    };

    const onSaveClick = (e) => {
        e.preventDefault();
        const lastMemberId = personList.length ? personList[personList.length - 1].id : 0;
        const obj = {
            id: lastMemberId + 1,
            name: personName,
            age: personAge
        }
        updatePersonList(m => m.concat(obj));
        handleNameChange('');
        handleAgeChange(0);
    }

    const handleDeletePerson = (id) => {
        const updatedList = personList.filter(person => person.id !== id);
        updatePersonList(updatedList);
    }

    return (
        <div className="form-page">
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="personName"
                                        value={personName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="personAge"
                                        value={personAge}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <button type="sumbit" onClick={onSaveClick}>Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        {personList.map(person => (
                            <div key={person.id}>
                                <span>{person.name} - {person.age}</span>
                                <button
                                    style={{ marginLeft: '10px' }}
                                    title="delete"
                                    onClick={() => handleDeletePerson(person.id)}>
                                    x</button>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}