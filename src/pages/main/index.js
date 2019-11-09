import React, { Component } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, ButtonSubmit } from './styles';

class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    };

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
        console.log(this.state.newRepo);
    };

    render() {
        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositorios
                </h1>
                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Adicionar Repositorio"
                        value={this.state.newRepo}
                        onChange={this.handleInputChange}
                    />
                    <ButtonSubmit disabled>
                        <FaPlus color="#FFF" size={14} />
                    </ButtonSubmit>
                </Form>
            </Container>
        );
    }
}

export default Main;
