"use client";
import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import AppGridContainer from "@crema/components/AppGridContainer";
import AppAnimate from "@crema/components/AppAnimate";
import { useGetDataApi } from "@crema/hooks/APIHooks";
import AppLoader from "@crema/components/AppLoader";
import type { HealthCareType } from "@crema/types/models/dashboards/HealthCare";
import DrCard from "./DrCard";
import Activities from "./Activities";
import HealthStatics from "./HealthStatics";
import TopDoctors from "./TopDoctors";
import UpcomingAppointments from "./UpcomingAppointments";
import Notifications from "./Notifications";
import HospitalStatics from "./HospitalStatics";
import RecentPatients from "./RecentPatients";
import InfoWidget from "./InfoWidget";
import HospitalActivity from "./HospitalActivity";
import ProfileCard from "./ProfileCard";
import AppointmentCard from "./AppointmentCard";
import HeartRate from "./HeartRate";
import YourActivity from "./YourActivity";
import { useAuthUser } from "@crema/hooks/AuthHooks";
import axios from "axios";
import { UserContext } from "@crema/context/AppContextProvider/UserInfoContextProvider";
import Registration from "../../../app/(protected)/Registration/Registration";
import Registrations from "../../../app/(protected)/Registration/Registration";

const HealthCarePage = () => {
  const userData = useContext(UserContext);

  return (
    // <>
    //   {loading ? (
    //     <AppLoader />
    //   ) : (
    //     <AppAnimate animation='transition.slideUpIn' delay={200}>
    //       <AppGridContainer>
    //         {healthCare.salesState.map((data, index) => (
    //           <Grid item xs={12} sm={6} lg={3} key={index}>
    //             <DrCard data={data} />
    //           </Grid>
    //         ))}

    //         <Grid item xs={12} sm={12} md={6}>
    //           <HospitalActivity data={healthCare.hospitalActivity} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={3}>
    //           <ProfileCard />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={3}>
    //           <AppGridContainer>
    //             {healthCare.appointmentCards.map((data, index) => (
    //               <Grid item xs={12} key={index}>
    //                 <AppointmentCard data={data} />
    //               </Grid>
    //             ))}
    //           </AppGridContainer>
    //         </Grid>
    //         <Grid item xs={12} sm={12} lg={4}>
    //           <TopDoctors data={healthCare.topDoctors} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} lg={4}>
    //           <UpcomingAppointments data={healthCare.upcomingAppointment} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} lg={4}>
    //           <Notifications data={healthCare.notifications} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={3}>
    //           <HeartRate data={healthCare.heartCard} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={3}>
    //           <YourActivity data={healthCare.yourActivity} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={3}>
    //           <HeartRate data={healthCare.temperatureCard} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={3}>
    //           <AppGridContainer>
    //             {healthCare.doses.map((data, index) => (
    //               <Grid item xs={12} key={index}>
    //                 <HospitalStatics data={data} />
    //               </Grid>
    //             ))}
    //           </AppGridContainer>
    //         </Grid>
    //         <Grid item xs={12} md={6}>
    //           <HealthStatics data={healthCare.heathStatics} />
    //         </Grid>
    //         <Grid item xs={12} md={6}>
    //           <Activities activities={healthCare.activities} />
    //         </Grid>
    //         {/*<Grid item xs={12} sm={6} md={3}>*/}
    //         {/*  <NewPatients data={healthCare.newPatients} />*/}
    //         {/*</Grid>*/}
    //         {/*<Grid item xs={12} sm={6} md={3}>*/}
    //         {/*  <CancelVisits data={healthCare.cancelVisits} />*/}
    //         {/*</Grid>*/}

    //         {healthCare.hospitalStatics.map((data, index) => (
    //           <Grid item xs={12} sm={6} md={3} key={index}>
    //             <HospitalStatics data={data} />
    //           </Grid>
    //         ))}
    //         <Grid item xs={12} sm={12} md={8}>
    //           <RecentPatients recentPatients={healthCare.recentPatients} />
    //         </Grid>
    //         <Grid item xs={12} sm={12} md={4}>
    //           <AppGridContainer>
    //             {healthCare.bloodCard.map((data, index) => (
    //               <Grid item xs={12} sm={6} key={'grid-' + index}>
    //                 <InfoWidget data={data} />
    //               </Grid>
    //             ))}
    //           </AppGridContainer>
    //         </Grid>
    //       </AppGridContainer>
    //     </AppAnimate>
    //   )}
    // </>
    // <h1>fggfgfggd</h1>
    <>
      <Registrations />
    </>
  );
};

export default HealthCarePage;
