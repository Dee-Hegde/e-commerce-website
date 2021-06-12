import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import styles from "./Navbar.module.css"
import NavSearch from "./NavSearch"
import styled from "styled-components"
import { Link } from 'react-router-dom'


const SearchDiv=styled.div`
    display: none;
    position: absolute;
    width: 25%;
    height: 30vh;
    margin-left:-50px;
    background-color: white;
    border:1px solid grey;
    box-shadow: 5px 5px 5px grey;
    text-align: left;
`

const NavLinkdiv= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: white;
    width: 30%;
    margin-left: 0%;
`
const LinkContainer= styled.div`
    width: 30%;
    margin-top: 20px;
    height: 8vh;
    background-color:white;
    margin:2%;
    padding-top: 4px;

&:hover{
    border-bottom: 3px solid #f04d68;
    cursor: pointer;
    
}
&:hover ${SearchDiv}{
 display :block;
}
`

const Navtitle = styled.p`
    font-size: 12px;
    background-color: white;
    &:hover ${SearchDiv}{
        display :block;
    }
`

function Navbar() {
    const navData=[
        {title:"men",
        list:["t-shirt","casual shirts","formal Shirts","jackets","Blazers","suits"]},
        {title:"women",
        list:["kurtas","saree","salvaars","dress materials","Tops","skirts&palazzos"]},
        {title:"kids",
        list:["t-shirt","shirts","jeans","shorts","trousers","ethnic wear"]},
        {title:"home&livings",
        list:["bedsheets","blankets","bedding sets","bed covers","pillows","pillow covers"]},
        {title:"beauty",
        list:["lipstick","lip gloss","lip liner","eye liner","kajal","foundation"]}
    ]
    

    return (
        <div className={styles.navbar}>
            <NavLeft/>
            <NavLinkdiv>
                       {navData.map(item=>(
                          <LinkContainer>
                            <Link className={styles.navLinks} to={`/${item.title}`}><h4>{item.title.toUpperCase()}</h4></Link>
                            <SearchDiv>
                                   {item.list.map(el=>(<Navtitle><Link className={styles.navLinks2} to={`/${el}`}>{el.toUpperCase()}</Link></Navtitle>))}
                            </SearchDiv>
                            </LinkContainer>
                       ))}
            </NavLinkdiv>
            <NavSearch/>
            <NavRight/> 
            
        </div>
    )
}

export default Navbar
