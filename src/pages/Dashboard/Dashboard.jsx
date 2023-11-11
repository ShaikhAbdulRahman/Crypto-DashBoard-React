import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transaction from "./components/Transaction";
import InfoCard from "../../components/InfoCard";
import InfoCard2 from "../../components/InfoCard2";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
      mb={"10"}
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem colSpan={{
          base:1,
          lg:2
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
        <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
        <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
        <InfoCard imgURL="/Visual.svg" />
        </GridItem>
        <GridItem colSpan={1}>
        <InfoCard2 imgURL="/Visual2.svg" />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
