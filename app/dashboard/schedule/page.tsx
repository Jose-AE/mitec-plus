"use client";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Grid, GridItem, Text } from "@chakra-ui/react";

export default function page() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}
