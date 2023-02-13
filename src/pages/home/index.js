import React from 'react';
import { Helmet } from 'react-helmet';
import Blog from '../../components/container/blog';
import Contacts from '../../components/container/contacts';
import Landing from '../../components/container/landing';
import Navbar from '../../components/container/navbar';
import Projects from '../../components/container/projects';
import About from '../../components/core-ui/about/about';
import Education from '../../components/core-ui/education/education';
import Experience from '../../components/core-ui/experience/experience';
import Skills from '../../components/core-ui/skills/skills';
import { headerData } from '../../data/headerData';

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Navbar />
      <Landing />

      <div
        style={{
          backgroundImage: ' linear-gradient(#cf734e, #6032a8)',
          marginTop: '',
        }}
      >
        <Projects />
      </div>
      <About />
      <Experience />
      <Skills />
      {/* <Certificate /> */}
      <Education />
      <Contacts />
    </div>
  );
}

export default HomePage;

{
  /* <div
style={{
  backgroundImage: ' linear-gradient(#cf734e, #6032a8)',
  marginTop: '',
}}
>
<Projects />
</div>
<div
style={{
  backgroundImage: ' linear-gradient(#6032a8, #739ade)',
  marginTop: '',
}}
>
<Experience />
</div> */
}

{
  /* <div style={{ backgroundColor: '#6032a8', marginTop: '-50px' }}> */
}
{
  /* <div
style={{
  backgroundImage: ' linear-gradient(#739ade , #130936)',
  marginTop: '-50px',
}}
>
<Skills />
</div>
<div
style={{
  backgroundImage: ' linear-gradient(#130936 ,#5478f0)',
  marginTop: '-50px',
}}
>
<Education />
</div>
<div>
<GithubProfileCard prof={githubProfileData} />
</div>
</div> */
}
