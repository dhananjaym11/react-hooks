import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import * as actions from '../../core/actions';
import Forms from '../../components/Forms/Forms';

class FormPage extends React.Component {

    onSaveClick = (personName, personAge) => {
        const personList = this.props.personList;
        const lastMemberId = personList.length ? personList[personList.length - 1].id : 0;
        const obj = {
            id: lastMemberId + 1,
            name: personName,
            age: personAge
        }
        const updatedList = [...personList, obj];
        this.props.updatePersons(updatedList);
    }

    handleDeletePerson = (id) => {
        const updatedList = this.props.personList.filter(person => person.id !== id);
        this.props.updatePersons(updatedList);
    }

    render() {
        return (
            <Container fixed>
                <h1>Form Page</h1>
                <Forms
                    personList={this.props.personList}
                    onSaveClick={this.onSaveClick}
                    handleDeletePerson={this.handleDeletePerson}
                />
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePersons: (personList) => {
            dispatch(actions.updatePersons(personList))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        personList: state.formReducer.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);