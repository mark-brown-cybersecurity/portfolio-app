import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
render(){
 return(
<div style= {{width: '100%', margin: 'auto'}}>
<Grid className="landing-grid">
<Cell col={12}>
<img
src="https://myrealdomain.com/images/black-man-with-beard-1.png"
alt="markbrown"
className="avatar-img"
/>

<div className="banner-text">
<h1>Full Stack Web Developer</h1>
<hr/>
<p> HTML / CSS | JavaScript | Bootstrap | React </p>

<div className="social-links">
{/*Linkedin*/}
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
<i className="fa fa-linkedin-square" aria-hidden="true" /></a>
{/*Github*/}
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
<i className="fa fa-github-square" aria-hidden="true" /></a>



 </div>
</div>
</Cell>
</Grid>
</div>

 )
}
}

export default Landing;
