import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../stylesheets/navbar.css';

class Navigation extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <NavItem href='/auth/google'>Log In</NavItem>
                );
            default:
                return (
                    <NavItem href='/api/logout'>Log Out</NavItem>
                );
        }
    }

    renderLogo() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <a href='/'>Trip Planner</a>
            default:
                return <a href='/home'>Trip Planner</a>
        }
    }

    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        {this.renderLogo()}
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    {this.renderContent()}
                </Nav>
            </Navbar>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Navigation);