import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import {
    Loading,
    Owner,
    IssueList,
    PrevButton,
    NextButton,
    Botoes,
} from './styles';

import api from '../../services/api';

export default class Repository extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            }).isRequired,
        }),
    };

    state = {
        repository: {},
        issues: [],
        loading: true,
        page: 1,
        noPrev: false,
    };

    async componentDidMount() {
        const { match } = this.props;
        const { page } = this.state;

        const repoName = decodeURIComponent(match.params.repository);
        const [repository, issues] = await Promise.all([
            api.get(`/repos/${repoName}`),
            api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'closed',
                    per_page: 5,
                    page,
                },
            }),
        ]);
        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
            noPrev: true,
        });
    }

    async componentDidUpdate(_, prevState) {
        const { page } = this.state;
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);

        if (prevState !== page) {
            const issues = await api.get(`/repos/${repoName}/issues`, {
                params: {
                    state: 'closed',
                    per_page: 5,
                    page,
                },
            });
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ issues: issues.data });
        }
    }

    nextPage = () => {
        const { page } = this.state;
        const nextPage = page + 1;
        this.setState({ page: nextPage, noPrev: false });
    };

    prevPage = () => {
        const { page } = this.state;

        if (page > 1) {
            const prevPage = page - 1;
            this.setState({ page: prevPage });
        } else {
            this.setState({ noPrev: true });
        }
    };

    render() {
        const { repository, issues, loading, page, noPrev } = this.state;
        if (loading) {
            return <Loading>Carregando</Loading>;
        }
        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar aos Repositorios</Link>
                    <h2> </h2>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />

                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                </Owner>
                <IssueList>
                    {issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>
                                    {issue.labels.map(label => (
                                        <span key={String(label.id)}>
                                            {label.name}
                                        </span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                </IssueList>
                <Botoes onChange={this.checkButtons}>
                    <PrevButton onClick={this.prevPage} active={noPrev}>
                        Voltar
                    </PrevButton>
                    <p>{page}</p>
                    <NextButton onClick={this.nextPage}>Avançar</NextButton>
                </Botoes>
            </Container>
        );
    }
}
