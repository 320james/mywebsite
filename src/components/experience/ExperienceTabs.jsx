import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function ExperienceTabs() {
  const [value, setValue] = React.useState(0);
  const mediumViewport = useMediaQuery('(min-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <VerticalTabs
        value={value}
        onChange={handleChange}
        orientation={mediumViewport ? 'vertical' : 'horizontal'}
      >
        <MyTab label={mediumViewport ? 'WillowTree' : '00.'} />
        <MyTab label={mediumViewport ? 'Verizon' : '01.'} />
        <MyTab label={mediumViewport ? 'Verizon' : '02.'} />
      </VerticalTabs>
      <TabContainerStyled>
        {value === 0 && (
          <div className="list-content">
            <h2>
              Software Engineer II @ <span>WillowTree®</span>
            </h2>
            <h3>AUG 2022 - PRESENT | Charlottesville, VA</h3>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Led the development of a premium subscription service, integrating
              secure payments and subscription management via Next.js and Next
              API middleware. Built CI/CD pipelines and cloud deployment,
              enabling a successful launch with 500+ users in the first week.
            </motion.div>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Scaled API services for UVA's newest assessment management
              platform, consolidating three legacy systems to streamline
              assessments and user management for 200+ educators across
              Virginia. Developed backend solutions using ASP.NET Core, C#,
              Entity Framework, and PostgreSQL, ensuring efficient data
              processing and seamless front-end integration.
            </motion.div>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Optimized Node.js backend microservices for a Fortune 500 outdoor
              booking application, implementing API integrations and OAuth 2.0
              to expand user connectivity by 20,000+ users. Automated
              infrastructure deployment with AWS CDK, managing DynamoDB,
              CloudWatch, and Lambda functions.
            </motion.div>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Developed a retirement calculator and ADA-compliant web components
              for a major banking client, enabling 100M+ credit users to plan
              for retirement with enhanced accessibility.
            </motion.div>
          </div>
        )}
        {value === 1 && (
          <div className="list-content">
            <h2>
              Software Engineer Intern @ <span>Verizon</span>
            </h2>
            <h3>JUN 2021 - AUG 2021 | Basking Ridge, NJ</h3>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Programmed front-end UI/UX features on the recommended accessory
              item cards alongside the Digital Sales team for smartphone device
              purchase flow on Verizon’s digital platform.
            </motion.div>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Helped to catalyze the digital growth of generating an increase in
              revenue of accessories from $150M to $395M in 2021.
            </motion.div>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Leveraged React.js, media queries, Node.js, Agile, Git, and Jira
              to enhance the display of product description and dynamic color
              sku options for accessory product item cards to enhance the
              digital customer journey.
            </motion.div>
          </div>
        )}
        {value === 2 && (
          <div className="list-content">
            <h2>
              Software Engineer Intern @ <span>Verizon</span>
            </h2>
            <h3>JUN 2020 - AUG 2020 | Ashburn, VA</h3>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Designed and implemented a full-stack application from scratch
              that dynamically communicates the availability of Verizon’s
              conference room services by displaying a static page on multiple
              channels to promote employee safety during COVID-19.
            </motion.div>
            <motion.div
              className="list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [100, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Took ownership of developing a sophisticated web application
              utilizing Spring Boot, JPA, MySQL, REST Services, Git, and Agile.
            </motion.div>
          </div>
        )}
      </TabContainerStyled>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VerticalTabs = withStyles((theme) => ({
  flexContainer: {
    flexDirection: 'column',
    '@media screen and (max-width: 600px)': {
      flexDirection: 'row',
    },
  },
  indicator: {
    backgroundColor: 'var(--primary-color)',
  },
}))(Tabs);

const MyTab = withStyles((theme) => ({
  root: {
    display: 'flex',
    '@media screen and (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  selected: {
    color: 'var(--primary-color)',
    // borderRight: '2px solid var(--primary-color)',
    '@media screen and (max-width: 600px)': {
      // borderRight: 'none',
      // borderBottom: '2px solid var(--primary-color)',
    },
  },
  wrapper: {
    alignItems: 'self-start',
    '@media screen and (max-width: 600px)': {
      alignItems: 'center',
    },
  },
}))(Tab);

const TabContainerStyled = styled.div`
  padding-left: 2rem;
  width: 70%;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 1;
    padding-bottom: 0.4rem;
    color: var(--light-gray);
    span {
      color: var(--primary-color);
    }

    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
      text-align: center;
    }
  }

  h3 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
    @media screen and (max-width: 600px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  .list {
    padding-bottom: 10px;
    font-size: 1.2rem;
    &::before {
      content: '▹';
      padding-right: 0.4rem;
      color: var(--primary-color);
      left: 0;
    }
  }
`;

export default ExperienceTabs;
