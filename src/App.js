import React, { Component, Fragment } from 'react'
import Splash from './logo1.png'
import Logo from './logo.png'
import './App.css'
import Navbar from './Navbar.js'
import { Dropdown, Menu, Button, Form, Grid, Header, Image, Message, Segment, Transition, Input, Container } from 'semantic-ui-react'

class App extends Component {
  state = { splash: true, visible: false, activeItem: 'home' }

  componentDidMount() {
    this.setState({ splash: true, visible: true, activeItem: 'home' })
    setTimeout(() => this.setState({ splash: true, visible: false, activeItem: 'home' }), 3000)
    setTimeout(() => this.setState({ splash: false, visible: false, activeItem: 'home' }), 3500)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { splash, visible, activeItem } = this.state

    return (
      splash
        ?
        <div className='splash'>
          <style>{`
        body > div,
        body > div > div,
        body > div > div > div.splash {
          height: 100%;
        }
      `}</style>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column>
              <Transition visible={visible} animation='scale' duration={500}>
                <Image src={Splash} size='large' centered />
              </Transition>
            </Grid.Column>
          </Grid>
        </div>
        :
        <Container style={{ marginTop: '1em' }}>
          <Menu secondary>
            <Menu.Item>
              <Image width='70em' height='70em' src={Logo} href='/' />
            </Menu.Item>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='about me'
              active={activeItem === 'about me'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Container>
    );
  }
}

export default App;
