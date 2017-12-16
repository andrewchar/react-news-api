import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const Navigation = (props) => {
  return (
    <div className="nav--wrapper">
      <Nav bsStyle="pills" activeKey={props.news.activeKey} onSelect={props.updateKey}>
        <NavItem
          eventKey={1}
          onClick={() => props.updateNews('recode')}>Recode
        </NavItem>

        <NavItem
          eventKey={2}
          onClick={() => props.updateNews('hacker-news')}>HackerNews
        </NavItem>

        <NavItem
          eventKey={3}
          onClick={() => props.updateNews('techcrunch')}>TechCrunch
        </NavItem>

        <NavItem
          eventKey={4}
          onClick={() => props.updateNews('t3n')}>T3n
        </NavItem>

        <NavItem
          eventKey={5}
          onClick={() => props.updateNews('crypto-coins-news')}>Crypto Coins News
        </NavItem>
      </Nav>
    </div>
  )
}

export default Navigation;
